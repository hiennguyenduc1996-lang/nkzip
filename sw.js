// NKZip: chỉ để trình duyệt cho cài ra màn hình chính – không lưu đệm, không chặn yêu cầu
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* để trình duyệt tự tải từ mạng */ });
