import { useState, useEffect } from 'react';
import { useAdmin } from './AdminContext.jsx';
import { adminApi } from './adminApi.js';

/**
 * Hook: fetch content for a given type, respecting pending admin changes.
 *
 * Usage:
 *   const { data, loading, error, updateField } = useAdminContent('projects');
 *
 * updateField(path, value) stages a change in the admin context.
 * The component receives live merged data (server + pending edits).
 */
export function useAdminContent(type) {
  const { isAdmin, pendingChanges, contentCache, cacheContent, stageChange } = useAdmin();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If already cached, skip the fetch
    if (contentCache[type] !== undefined) {
      setLoading(false);
      return;
    }

    setLoading(true);
    adminApi.getContent(type)
      .then((d) => {
        cacheContent(type, d);
        setError(null);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [type, contentCache, cacheContent]);

  // Merge: pending changes take precedence over the server cache
  const data = pendingChanges[type] ?? contentCache[type];

  const updateField = (path, val) => {
    if (!isAdmin) return;
    stageChange(type, path, val, data);
  };

  return { data, loading, error, updateField };
}
