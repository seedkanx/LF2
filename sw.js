// 快取版本號：當您更新遊戲內容時，請更改這個版號（例如 v2, v3）
const CACHE_VERSION = 'fighter-cache-v2.16x';

// 遊戲所需的所有靜態資源（必須 100% 條列，少一個都會導致離線時破圖）
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './game.js',       // 包含 FouV, VuC1 等引擎代碼
    // 請依您的實際路徑填寫所有圖片與音效：
    './img/sprites.png',
    './img/background.jpg',
    './mp3/main.mp3',
    './mp3/hit.mp3'
];

// 階段一：安裝 (Install) - 下載並快取所有資源
self.addEventListener('install', event => {
    // 強制 Service Worker 立即接管，不等待其他分頁關閉
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(CACHE_VERSION)
        .then(cache => {
            console.log('[Service Worker] 快取遊戲資源中...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 階段二：啟動 (Activate) - 清除舊版快取
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // 如果快取名稱與當前版本不符，就刪除它（釋放手機空間）
                    if (cacheName !== CACHE_VERSION) {
                        console.log('[Service Worker] 刪除舊版快取:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// 階段三：攔截請求 (Fetch) - 實現離線遊玩
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(cachedResponse => {
            // 如果快取裡有這個檔案，直接從手機硬碟讀取 (極速且支援離線)
            if (cachedResponse) {
                return cachedResponse;
            }
            // 如果快取沒有，才透過網路抓取
            return fetch(event.request);
        })
    );
});