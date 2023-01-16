var CACHE_NAME = "cache-v1";
var urlsToCache = [
  "./index.html",
  "./service-worker.js",
  "./manifest.json",
  "./assets/css/styling.css",
  "./assets/css/themify-icons.css",
  "./assets/css/virtual.css",
  "./assets/css/minibar.virtual.css",
];
console.log("loading sw");

self.addEventListener("install", function (event) {
  // Perform install steps
  console.log("installing sw");
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      try {
        console.log("Opened cache");
        var x = cache.addAll(urlsToCache);
        console.log("cache added");
        return x;
      } catch (error) {
        return null;
      }
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
