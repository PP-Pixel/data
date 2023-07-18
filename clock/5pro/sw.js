importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.navigationPreload.enable();

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
  });
  
  self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
  });
  
// ------------------  runtime caching starts ---------------------
// frequently updated resources
workbox.routing.registerRoute(
  /kanto\/json/,
  workbox.strategies.networkFirst({
    cacheName: 'fetch-objects-cache',
  }),
  'GET'
);

//html
workbox.routing.registerRoute(
  new RegExp('index.html'),
  new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
  new RegExp('saved_resource.html'),
  new workbox.strategies.NetworkFirst()
);

// manifest
workbox.routing.registerRoute(
  new RegExp('manifest.json'),
  new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
  new RegExp('https://pp-pixel.github.io/clock5-pro/manifest.json'),
  new workbox.strategies.StaleWhileRevalidate()
);

// ------------------  precaching the assets ---------------------
  const OFFLINE_PAGE = 'index.html';
  workbox.precaching.precacheAndRoute([
    //icon,ogp
    'TIME.ico',
    'icon-192.png',
    'icon-256.png',
    //css
    'style.css',
    'index.css',
    //javaScript
    'js',
    'main.js',
    //other
    'manifest.json',
   OFFLINE_PAGE,  
  ]);
  // サービスワーカー有効化に必須
  self.addEventListener('fetch', function(event) {});
