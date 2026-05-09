import { useState } from 'react';
import { useAdmin } from './AdminContext.jsx';
import './AdminBar.css';

/**
 * AdminBar — fixed bottom bar shown only in admin mode.
 * Displays pending change count and Save / Discard / Logout actions.
 */
export function AdminBar() {
  const { isAdmin, pendingCount, saveAll, discardAll, logout } = useAdmin();
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // 'ok' | 'error' | null

  if (!isAdmin) return null;

  async function handleSave() {
    if (pendingCount === 0) return;
    setSaving(true);
    setSaveStatus(null);
    try {
      await saveAll();
      setSaveStatus('ok');
      setTimeout(() => setSaveStatus(null), 2500);
    } catch (err) {
      setSaveStatus('error');
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    if (pendingCount > 0) {
      const ok = window.confirm('You have unsaved changes. Discard and logout?');
      if (!ok) return;
    }
    await logout();
  }

  return (
    <div className="admin-bar" role="toolbar" aria-label="Admin controls">
      <div className="admin-bar__left">
        <span className="admin-bar__badge">Admin</span>
        <span className="admin-bar__status">
          {pendingCount > 0
            ? `${pendingCount} unsaved content type${pendingCount > 1 ? 's' : ''}`
            : saveStatus === 'ok'
              ? 'All changes saved'
              : 'No unsaved changes'}
        </span>
        {saveStatus === 'error' && (
          <span className="admin-bar__error">Save failed — check server logs</span>
        )}
      </div>

      <div className="admin-bar__actions">
        {pendingCount > 0 && (
          <button
            type="button"
            className="admin-bar__btn admin-bar__btn--discard"
            onClick={discardAll}
            disabled={saving}
          >
            Discard
          </button>
        )}
        <button
          type="button"
          className={`admin-bar__btn admin-bar__btn--save ${saveStatus === 'ok' ? 'admin-bar__btn--saved' : ''}`}
          onClick={handleSave}
          disabled={saving || pendingCount === 0}
        >
          {saving ? 'Saving…' : saveStatus === 'ok' ? '✓ Saved' : 'Save'}
        </button>
        <button
          type="button"
          className="admin-bar__btn admin-bar__btn--logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
