import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST || []);
export default function() {
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('your-app-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          // Add other static assets here
        ]);
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
}
