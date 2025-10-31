import axios from 'axios';

// Build a runtime-friendly API base URL.
// Priority:
// 1. If REACT_APP_API_URL is set (build-time), use it (trim trailing slash).
// 2. If running in the browser on a non-localhost origin, use the current origin + '/api'.
// 3. Fallback to localhost (development).
function getApiBase() {
  const envUrl = process.env.REACT_APP_API_URL;
  if (envUrl && envUrl !== '') {
    return envUrl.replace(/\/+$/g, '');
  }

  if (typeof window !== 'undefined' && window.location && window.location.hostname) {
    // In production when frontend is served from the same origin as the backend
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      return `${window.location.origin}/api`;
    }
  }

  // Development fallback
  return 'http://localhost:5000/api';
}

const api = axios.create({
  baseURL: getApiBase(),
});

// Attach token from localStorage to Authorization header for protected routes
api.interceptors.request.use(
  (config) => {
    try {
      const stored = localStorage.getItem('token');
      // stored may be the raw token string
      if (stored) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${stored}`;
      }
    } catch (e) {
      // ignore (localStorage not available in some environments)
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;