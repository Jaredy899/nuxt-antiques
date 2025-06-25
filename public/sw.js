// Basic service worker - prevents 404 errors
self.addEventListener('install', () => {
  // Skip waiting and activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  // Take control of all pages immediately
  self.clients.claim();
});

// Optional: Add basic fetch handler if needed
self.addEventListener('fetch', (event) => {
  // Let the browser handle all fetch requests normally
  return;
}); 