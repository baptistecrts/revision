// Service worker : l'app marche hors ligne après la première visite.
const CACHE = "revision-v2";
const CORE = ["./", "index.html", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Page : réseau d'abord (pour avoir les mises à jour), cache si hors ligne
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put("index.html", c)); return r; })
        .catch(() => caches.match("index.html"))
    );
    return;
  }
  // Reste (icônes, polices Google) : cache d'abord, puis réseau
  if (url.origin === location.origin || url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
        const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r;
      }))
    );
  }
});
