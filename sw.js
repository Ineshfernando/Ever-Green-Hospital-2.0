self.addEventListener('install',event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/Ever-Green Hospital123/', // Update this path
                '/Ever-Green Hospital123/index1.html', // Update this path
                '/Ever-Green Hospital123/styles/style.css', // Update this path
                '/Ever-Green Hospital123/scripts/script.js', // Update this path
                '/Ever-Green Hospital123/favicon/favicon-32x32.png', // Update this path
                '/Ever-Green Hospital123/favicon/favicon-16x16.png', // Update this path

            ])
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);

        })
    );
});