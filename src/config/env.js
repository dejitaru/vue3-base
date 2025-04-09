export const ENV = {
    VITE_BASE_URL: import.meta.env.VITE_BASE_URL || 'http://localhost:9003',
    VITE_API_URL: import.meta.env.VITE_API_URL || 'http://localhost:9003',
    VITE_APP_NAME: import.meta.env.VITE_APP_NAME || 'MyDefaultApp',
    VITE_FEATURE_FLAG: import.meta.env.VITE_FEATURE_FLAG || false,
    VITE_THEME: import.meta.env.VITE_THEME || 'default',
  }

export default ENV