/* 영어일기 웹앱 설치용 서비스워커(오프라인).
   - 항상 인터넷에서 최신 파일을 먼저 받고, 인터넷이 안 될 때만 저장해 둔 걸 보여 줌(새 버전이 바로 보이게).
     GitHub Pages는 10분 보관을 허락하므로(max-age=600) 받을 때 cache: "no-cache" — 매번 서버에 바뀌었는지 물어봄(안 바뀌었으면 짧은 응답).
   - 새 버전을 올릴 때마다 CACHE 숫자를 올림 → 폰이 새 서비스워커를 받아 바로 바꿔 끼우고(skipWaiting·clients.claim),
     앱 화면에는 "새 버전이 나왔어요 [새로 고침]" 막대가 뜸(index.html '앱 업데이트').
   - 같은 github.io 주소를 쓰는 한 장 영어와 저장 공간(Cache Storage)을 같이 쓰므로, **지울 때는 ediary- 로 시작하는 옛 저장소만** 지움.
   - ElevenLabs 같은 다른 사이트 요청, GET이 아닌 요청은 건드리지 않음(음성은 앱이 IndexedDB ediary-tts에 따로 저장). */
const CACHE = "ediary-v1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./data/topics.js"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("ediary-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  /* 페이지 열기(navigate) 요청은 옵션을 바꿔 복사할 수 없어서 주소로 새로 만듦 */
  const fresh = req.mode === "navigate"
    ? new Request(req.url, { cache: "no-cache", credentials: "same-origin" })
    : new Request(req, { cache: "no-cache" });
  e.respondWith(
    fetch(fresh)
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: req.mode === "navigate" }).then(r => r || (req.mode === "navigate" ? caches.match("./index.html") : Response.error())))
  );
});
