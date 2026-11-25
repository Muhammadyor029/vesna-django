const TEXTS = {
  uz: {
    title: "VESNA KIDS ni o'rnating",
    sub: "Tez ochiladi, oflayn ham ishlaydi",
    button: "O'rnatish",
    close: "Yopish",
    help: "Chrome: menyu -> O'rnatish yoki Ilovani qo'shish. Safari: Ulashish -> Ekranga qo'shish.",
    done: "Yo'riqnoma ko'rsatildi"
  },
  kaa: {
    title: "VESNA KIDS ti ornat??",
    sub: "Tez ash?lad?, oflayn da isleydi",
    button: "Ornat?w",
    close: "Jab?w",
    help: "Chrome: menyu -> Ornat?w. Safari: B?lisiw -> Ekranga qos?w.",
    done: "K?rsetpe k?rsetildi"
  },
  ru: {
    title: "?????????? VESNA KIDS",
    sub: "?????? ??????????? ? ???????? ??????",
    button: "??????????",
    close: "???????",
    help: "Chrome: ???? -> ?????????? ??? ???????? ?? ??????? ?????. Safari: ?????????? -> ?? ????? ?????.",
    done: "?????????? ????????"
  },
  en: {
    title: "Install VESNA KIDS",
    sub: "Opens fast and works offline",
    button: "Install",
    close: "Close",
    help: "Chrome: menu -> Install or Add to Home screen. Safari: Share -> Add to Home Screen.",
    done: "Instructions shown"
  }
};

const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { return; } }
};

let lang = document.documentElement.lang || 'uz';
const getText = () => TEXTS[lang] || TEXTS.uz;
const standalone = navigator.standalone === true || ['standalone', 'fullscreen', 'minimal-ui'].some((mode) => window.matchMedia(`(display-mode: ${mode})`).matches);

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});
};

if (document.readyState === 'complete') registerServiceWorker();
else window.addEventListener('load', registerServiceWorker);

if (!standalone && store.get('vesna-pwa-installed') !== '1') {
  const host = document.createElement('div');
  host.innerHTML = `
    <div class="pwa-install" id="pwa-install" role="status" hidden>
      <span class="pwa-install-mark" aria-hidden="true">V</span>
      <div class="pwa-install-copy">
        <strong id="pwa-install-title"></strong>
        <span id="pwa-install-sub"></span>
      </div>
      <button type="button" class="pwa-install-btn" id="pwa-install-btn"></button>
      <button type="button" class="pwa-install-close" id="pwa-install-close"></button>
      <div class="pwa-install-help" id="pwa-install-help" hidden></div>
    </div>
  `;
  document.body.appendChild(host.firstElementChild);

  const banner = document.getElementById('pwa-install');
  const installBtn = document.getElementById('pwa-install-btn');
  const closeBtn = document.getElementById('pwa-install-close');
  const help = document.getElementById('pwa-install-help');
  let deferred = null;

  const applyText = () => {
    const t = getText();
    document.getElementById('pwa-install-title').textContent = t.title;
    document.getElementById('pwa-install-sub').textContent = t.sub;
    if (!help.hidden) installBtn.textContent = t.done; else installBtn.textContent = t.button;
    closeBtn.textContent = '?';
    closeBtn.setAttribute('aria-label', t.close);
    help.textContent = t.help;
  };
  applyText();
  window.addEventListener('alif:lang', (e) => { lang = e.detail?.lang || document.documentElement.lang || 'uz'; applyText(); });

  const dismissed = store.get('vesna-pwa-dismissed') === '1';
  const mobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent) || window.matchMedia('(max-width: 900px)').matches;
  if (!dismissed && mobile) banner.hidden = false;

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferred = event;
    if (store.get('vesna-pwa-dismissed') !== '1') banner.hidden = false;
  });

  installBtn.addEventListener('click', async () => {
    if (!deferred) {
      help.hidden = false;
      installBtn.textContent = getText().done;
      return;
    }
    deferred.prompt();
    const choice = await deferred.userChoice;
    deferred = null;
    banner.hidden = true;
    if (choice.outcome === 'accepted') store.set('vesna-pwa-installed', '1');
  });

  closeBtn.addEventListener('click', () => {
    store.set('vesna-pwa-dismissed', '1');
    banner.hidden = true;
  });

  window.addEventListener('appinstalled', () => {
    store.set('vesna-pwa-installed', '1');
    banner.hidden = true;
  });
}
