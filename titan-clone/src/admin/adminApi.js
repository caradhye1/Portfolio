/**
 * Thin fetch wrapper for all admin API calls.
 * All requests use credentials: 'include' so the httpOnly cookie is sent.
 */

const BASE = '/api';

async function request(method, path, body) {
  const opts = {
    method,
    credentials: 'include',
    headers: {},
  };

  if (body !== undefined) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(body);
  }

  const res = await fetch(`${BASE}${path}`, opts);
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw Object.assign(new Error(data.error || `HTTP ${res.status}`), { status: res.status });
  }
  return data;
}

export const adminApi = {
  /** Check if the current session is authenticated */
  checkSession: () => request('GET', '/auth/me'),

  /** Login with admin password */
  login: (password) => request('POST', '/auth/login', { password }),

  /** Clear the session cookie */
  logout: () => request('POST', '/auth/logout'),

  /** Fetch all data for a content type */
  getContent: (type) => request('GET', `/content/${type}`),

  /** Save (overwrite) a content type entirely */
  saveContent: (type, data) => request('PATCH', `/content/${type}`, data),

  /**
   * Upload an image file.
   * Returns { url: string }
   */
  uploadImage: async (file) => {
    const form = new FormData();
    form.append('image', file);

    const res = await fetch(`${BASE}/images/upload`, {
      method: 'POST',
      credentials: 'include',
      body: form,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Upload failed');
    return data;
  },
};
