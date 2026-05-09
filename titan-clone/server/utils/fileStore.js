import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'data');
const BACKUP_DIR = path.join(DATA_DIR, 'backups');
const MAX_BACKUPS = 10;

// Ensure directories exist
fs.mkdirSync(DATA_DIR, { recursive: true });
fs.mkdirSync(BACKUP_DIR, { recursive: true });

const filePath = (type) => path.join(DATA_DIR, `${type}.json`);

export function readData(type) {
  const fp = filePath(type);
  if (!fs.existsSync(fp)) {
    throw new Error(`Content type "${type}" not found`);
  }
  return JSON.parse(fs.readFileSync(fp, 'utf8'));
}

export function writeData(type, data) {
  const fp = filePath(type);
  const tmp = fp + '.tmp';

  // Backup current file before overwriting
  if (fs.existsSync(fp)) {
    const timestamp = Date.now();
    const backupPath = path.join(BACKUP_DIR, `${type}.${timestamp}.json`);
    fs.copyFileSync(fp, backupPath);
    pruneBackups(type);
  }

  // Atomic write: write to .tmp then rename
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), 'utf8');
  fs.renameSync(tmp, fp);
}

function pruneBackups(type) {
  const files = fs.readdirSync(BACKUP_DIR)
    .filter(f => f.startsWith(`${type}.`) && f.endsWith('.json'))
    .map(f => ({ name: f, time: parseInt(f.split('.')[1]) || 0 }))
    .sort((a, b) => b.time - a.time);

  // Remove old backups beyond MAX_BACKUPS
  files.slice(MAX_BACKUPS).forEach(({ name }) => {
    fs.unlinkSync(path.join(BACKUP_DIR, name));
  });
}
