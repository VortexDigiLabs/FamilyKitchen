const CACHE_NAME = 'family-kitchen-cache-v2';

// Assets to cache on install for initial shell load
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install Event - Pre-cache essential shells
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => {
      // Force the waiting service worker to become the active service worker
      return self.skipWaiting();
    })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Claim all open tabs immediately under the new active service worker
      return self.clients.claim();
    })
  );
});

// Fetch Event - Stale-While-Revalidate Caching Strategy
self.addEventListener('fetch', (event) => {
  // Bypass caching on localhost for development to prevent stale responses
  if (self.location.hostname === 'localhost' || self.location.hostname === '127.0.0.1') {
    return;
  }

  // Only handle standard GET requests (ignore API calls/mutations if any, or non-http protocols)
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        // Fetch new version from network in parallel
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // Save the fresh response to the cache for the next load
          if (networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          // Network failure - fall back to cache if available
          return cachedResponse;
        });

        // Return the cached version immediately if we have it, otherwise wait for the network
        return cachedResponse || fetchPromise;
      });
    })
  );
});
