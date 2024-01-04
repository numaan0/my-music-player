self.addEventListener('install', function(event) {
/* eslint-disable-line no-restricted-globals */
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        // include other files you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
/* eslint-disable-line no-restricted-globals */
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
