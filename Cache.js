self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('SimpleCalculator').then((cache) => cache.addAll([
'/Calculator/'
])),
);
});

self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
})
