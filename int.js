self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('int').then((cache) => cache.addAll([
'Speedy.js',
'index.html',
'Speedy.css',
'jQuery.js',
'Product.ttf',
'Icons.woff2'
])),
);
});

self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
});
