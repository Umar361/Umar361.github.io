const CACHE_NAME = 'offline';
const OFFLINE_URL = 'offline.html';
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
  if (window.location.protocol === 'http:') {
    const requireHTTPS = document.getElementById('requireHTTPS');
    const link = requireHTTPS.querySelector('a');
    link.href = window.location.href.replace('http://', 'https://');
    requireHTTPS.classList.remove('hidden');
  }

