self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('yes').then((cache) => cache.addAll([
'Speedy.html',
'jQuery.js',
'Speedy.js',
'Icons.woff2',
'Product.ttf',
'Speedy.css'
])),
);
});

self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
})
