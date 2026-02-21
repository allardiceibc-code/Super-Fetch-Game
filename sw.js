const cacheName = 'fetch-game-v1';
const assets = [
  './index.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/620/620851.png',
  'https://cdn-icons-png.flaticon.com/512/33/33736.png',
  'https://cdn-icons-png.flaticon.com/512/1046/1046804.png',
  'https://codesandbox.io/api/v1/sandboxes/f8z7l/assets/bark.mp3'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
