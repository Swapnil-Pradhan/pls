self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('fox-store').then((cache) => cache.addAll([
'index.html',
'Calculator.js',
'Calculator.css',
'Calculator.png',
'DeleteDark.png',
'DeleteLight.png',
'NoCalculationsDark.png',
'NoCalculationsLight.png',
'ProductSans.tff',
'Montserrat.tff',
'Material.woff2'
])),
);
});

self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
});