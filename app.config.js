// Extends app.json. EXPO_BASE_URL lets the web demo be served from a sub-path
// (e.g. GitHub Pages: /Connecto-for-cross-world-professional-Connection/app). Native builds ignore it.
module.exports = ({ config }) => ({
  ...config,
  experiments: {
    ...config.experiments,
    ...(process.env.EXPO_BASE_URL ? { baseUrl: process.env.EXPO_BASE_URL } : {}),
  },
});
