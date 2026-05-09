import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { adminApi } from './adminApi.js';

const AdminContext = createContext(null);

/**
 * AdminProvider wraps the whole app.
 * - Checks session on mount
 * - Exposes { isAdmin, pendingChanges, stageChange, saveAll, discardAll, logout }
 */
export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);

  // pendingChanges: { [contentType]: patchedData }
  const [pendingChanges, setPendingChanges] = useState({});

  // Loaded content cache: { [contentType]: data }
  const [contentCache, setContentCache] = useState({});

  useEffect(() => {
    adminApi.checkSession()
      .then(() => setIsAdmin(true))
      .catch(() => setIsAdmin(false))
      .finally(() => setChecking(false));
  }, []);

  /** Called by useAdminContent when data is fetched from the server */
  const cacheContent = useCallback((type, data) => {
    setContentCache((prev) => ({ ...prev, [type]: data }));
  }, []);

  /**
   * Stage a field change in memory.
   * path: dot-separated key path into the data object e.g. "rows.0.heading"
   * val: new value
   * contentData: the full current data for that type (so we can merge)
   */
  const stageChange = useCallback((type, path, val, contentData) => {
    setPendingChanges((prev) => {
      const base = prev[type] ?? contentData;
      const updated = deepSet(structuredClone(base), path.split('.'), val);
      return { ...prev, [type]: updated };
    });
  }, []);

  /** Save all pending changes to the server in parallel */
  const saveAll = useCallback(async () => {
    const entries = Object.entries(pendingChanges);
    if (entries.length === 0) return;

    await Promise.all(entries.map(([type, data]) => adminApi.saveContent(type, data)));

    // Move pending into cache, clear pending
    setContentCache((prev) => ({ ...prev, ...pendingChanges }));
    setPendingChanges({});
  }, [pendingChanges]);

  /** Discard all staged changes */
  const discardAll = useCallback(() => {
    setPendingChanges({});
  }, []);

  const login = useCallback(async (password) => {
    await adminApi.login(password);
    setIsAdmin(true);
  }, []);

  const logout = useCallback(async () => {
    await adminApi.logout();
    setIsAdmin(false);
    setPendingChanges({});
  }, []);

  const pendingCount = Object.keys(pendingChanges).length;

  return (
    <AdminContext.Provider value={{
      isAdmin,
      checking,
      pendingChanges,
      pendingCount,
      contentCache,
      cacheContent,
      stageChange,
      saveAll,
      discardAll,
      login,
      logout,
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be used inside AdminProvider');
  return ctx;
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function deepSet(obj, keys, val) {
  if (keys.length === 0) return val;
  const [head, ...rest] = keys;

  // Array index?
  const idx = parseInt(head, 10);
  if (Array.isArray(obj) && !isNaN(idx)) {
    const arr = [...obj];
    arr[idx] = deepSet(arr[idx], rest, val);
    return arr;
  }

  return {
    ...obj,
    [head]: deepSet(obj?.[head], rest, val),
  };
}
