const CACHE_VERSION = 'moby-spa-v3';
const STATIC_CACHE = `moby-cache-${CACHE_VERSION}`;
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/dowodnowy_files/main.css',
  '/dowodnowy_files/dowodnowy.css',
  '/dowodnowy_files/image0.webp',
  '/dowodnowy_files/flaga.gif',
  '/dowodnowy_files/godlo.gif',
  '/dowodnowy_files/dowodnowybg.webp',
  '/assets/roboto_light.woff2',
  '/assets/roboto_regular.woff2',
  '/assets/roboto_medium.woff2',
  '/assets/roboto_medium_italic.woff2',
  '/assets/roboto_bold.woff2',
  '/assets/roboto_black.woff2',
  '/assets/roboto_medium_numbers.woff2',
  '/qr_files/css',
  '/dashboard_files/coi_common_ui_ic_mobywatel_logo.svg',
  '/dashboard_files/ab013_notifications.svg',
  '/dashboard_files/coi_common_ui_ic_document_id.svg',
  '/dashboard_files/CHANGE_IT_home_mid_card.svg',
  '/dashboard_files/ic_arrow_forward_Dgray.svg',
  '/dashboard_files/b001_home.svg',
  '/dashboard_files/ad005_framed_person.svg',
  '/dashboard_files/ac001_services.svg',
  '/dashboard_files/ai001_scanner_qr.svg',
  '/dashboard_files/ab010_more.svg'
];

const ASSET_REGEX = /\.(?:css|js|png|jpg|jpeg|gif|svg|webp|ico|woff2?|ttf)$/i;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== STATIC_CACHE).map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  if (PRECACHE_URLS.includes(url.pathname) || ASSET_REGEX.test(url.pathname)) {
    event.respondWith(cacheFirst(request));
  }
});

async function cacheFirst(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return cachedResponse || Response.error();
  }
}
