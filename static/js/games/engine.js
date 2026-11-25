import {
  getKidsProgress,
  openEduGame as launchKidsGame,
  EDU_ITEMS as KIDS_GAMES
} from './edu-engine-legacy.js';

export {
  onBgReady,
  UZ_ALPHABET,
  EDU_ITEMS,
  playSound,
  drawEduCardFrame,
  getKidsProgress,
  recordKidsStars,
  celebrateKids,
  isEduGameOpen,
  closeEduGame,
  openPvpDuel,
  openEduGame,
  getLetterWords,
  LETTER_GAME_MODES
} from './edu-engine-legacy.js';

function syncKidsTotal() {
  const el = document.getElementById('kids-total');
  if (!el) return;
  const progress = getKidsProgress();
  el.textContent = `★ ${progress.stars}`;
  el.classList.remove('is-bump');
  void el.offsetWidth;
  el.classList.add('is-bump');
}

function hintFor(title, sub) {
  const text = `${title} ${sub}`.toLocaleLowerCase('uz');
  if (text.includes('matemat') || text.includes('qöş') || text.includes('ayir') || text.includes('raqam')) {
    return 'Avval rasmlarni sanang, söng javobni tanlang.';
  }
  if (text.includes('mantiq') || text.includes('rang') || text.includes('şakl') || text.includes('ketma')) {
    return 'Qoşni elementlarga diqqat qiling: ketma-ketlik takrorlanadi.';
  }
  if (text.includes('xotira') || text.includes('juft') || text.includes('eshik')) {
    return 'Avval bir kartani eslab qoling, söng unga mos rasmini izdang.';
  }
  if (text.includes('öz') || text.includes('söz') || text.includes('öqiş') || text.includes('harf')) {
    return 'Sözning birinçi harfiga va rasmdagi narsaga qarang.';
  }
  return 'Diqqat bilan qarang, töğri javobni bosing.';
}

function showGameHint() {
  const modal = document.getElementById('edu-modal');
  if (!modal || !modal.classList.contains('is-open')) return;
  const title = document.getElementById('edu-title')?.textContent || '';
  const sub = document.getElementById('edu-sub')?.textContent || '';
  const bubble = document.getElementById('edu-hint-bubble');
  if (!bubble) return;
  bubble.textContent = `💡 ${hintFor(title, sub)}`;
  bubble.classList.add('is-visible');
  window.clearTimeout(showGameHint.timer);
  showGameHint.timer = window.setTimeout(() => bubble.classList.remove('is-visible'), 5200);
}

function ensureGameHelpers() {
  const modal = document.getElementById('edu-modal');
  if (!modal || !modal.classList.contains('is-open')) return;
  const topRight = modal.querySelector('.edu-top-right');
  const stage = modal.querySelector('.edu-stage');
  if (!topRight || !stage) return;

  let hintBtn = document.getElementById('edu-hint-btn');
  if (!hintBtn) {
    hintBtn = document.createElement('button');
    hintBtn.type = 'button';
    hintBtn.id = 'edu-hint-btn';
    hintBtn.className = 'pill-btn edu-hint-btn';
    hintBtn.textContent = '💡 Maslahat';
    hintBtn.setAttribute('aria-label', 'Öyin uchun maslahat');
    hintBtn.addEventListener('click', showGameHint);
    topRight.appendChild(hintBtn);
  }

  let bubble = document.getElementById('edu-hint-bubble');
  if (!bubble) {
    bubble = document.createElement('div');
    bubble.id = 'edu-hint-bubble';
    bubble.className = 'edu-hint-bubble';
    bubble.setAttribute('aria-live', 'polite');
    stage.appendChild(bubble);
  }

  const bar = document.getElementById('edu-kids-progress');
  let swapBtn = document.getElementById('edu-swap-btn');
  if (bar && !swapBtn) {
    swapBtn = document.createElement('button');
    swapBtn.type = 'button';
    swapBtn.id = 'edu-swap-btn';
    swapBtn.className = 'edu-swap-btn';
    swapBtn.textContent = '🎲 Boshqa öyin';
    swapBtn.addEventListener('click', () => {
      const current = document.getElementById('edu-title')?.textContent || '';
      const pool = KIDS_GAMES.filter((item) => item.gameType !== 'final-mix' && item.title !== current);
      const next = pool[Math.floor(Math.random() * pool.length)] || KIDS_GAMES[0];
      launchKidsGame(next);
    });
    bar.appendChild(swapBtn);
  }

  const title = document.getElementById('edu-title')?.textContent || '';
  const sub = document.getElementById('edu-sub')?.textContent || '';
  bubble.classList.remove('is-visible');
  bubble.textContent = `💡 ${hintFor(title, sub)}`;
}

syncKidsTotal();
window.addEventListener('alif:kids-progress', syncKidsTotal);
window.addEventListener('alif:gamemodal', () => {
  const modal = document.getElementById('edu-modal');
  if (modal && modal.classList.contains('is-open')) {
    ensureGameHelpers();
  } else {
    document.getElementById('edu-hint-bubble')?.classList.remove('is-visible');
  }
});
