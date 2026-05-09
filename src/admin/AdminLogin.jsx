import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from './AdminContext.jsx';
import './AdminLogin.css';

/**
 * Full-page login form at /admin.
 * Redirects to / on success if already logged in or after login.
 */
export default function AdminLogin() {
  const { isAdmin, checking, login } = useAdmin();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // If already admin, redirect immediately
  useEffect(() => {
    if (!checking && isAdmin) {
      navigate('/', { replace: true });
    }
  }, [isAdmin, checking, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!password) return;

    setLoading(true);
    setError('');
    try {
      await login(password);
      navigate('/', { replace: true });
    } catch (err) {
      if (err.status === 429) {
        setError('Too many attempts. Please wait 15 minutes.');
      } else if (err.status === 401) {
        setError('Incorrect password.');
      } else {
        setError('Login failed. Check that the server is running.');
      }
    } finally {
      setLoading(false);
    }
  }

  if (checking) return null;

  return (
    <div className="admin-login">
      <div className="admin-login__card">
        <h1 className="admin-login__title">Admin Login</h1>
        <p className="admin-login__subtitle">Portfolio CMS</p>

        <form onSubmit={handleSubmit} className="admin-login__form" noValidate>
          <label className="admin-login__label" htmlFor="admin-password">
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            className="admin-login__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            autoComplete="current-password"
            disabled={loading}
            placeholder="Enter admin password"
          />
          {error && <p className="admin-login__error" role="alert">{error}</p>}
          <button
            type="submit"
            className="admin-login__submit"
            disabled={loading || !password}
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
