import { EDU_ITEMS, openEduGame } from './edu-engine.js';
import { drawIllustration } from './edu-art.js';
import { isDayMode, onThemeChange } from './theme.ts';

type Lang = 'uz' | 'kaa' | 'ru' | 'en';
function getLang(): Lang { const l = (window as any).__alifLang; return l === 'kaa' || l === 'ru' || l === 'en' ? l : 'uz'; }

type MathTopicId = 'raqam' | 'qoshish' | 'ayirish' | 'mantiq' | 'karra' | 'tez';

interface MathTopic {
  id: MathTopicId;
  title: string;
  sub: string;
  desc: string;
  art: string;
  accent: string;
  itemIds: number[];
  prompts: { q: string; options: string[]; answer: string; explain: string }[];
}

const TOPIC_I18N: Record<Lang, { head: string; sub: string; tag: string; section: string; games: string; gamesSub: string; next: string; retry: string; topics: Array<{title:string;sub:string;desc:string;prompts:Array<{q:string;options:string[];answer:string;explain:string}>}> }> = {
  uz: { head: 'Matematika studiyasi', sub: "Sanash, qo'shish, ayirish va mantiqni o'yin orqali o'rganing.", tag: "bo'lim", section: "Matematika bo'limi", games: "Matematika o'yinlari", gamesSub: "bo'limiga mos mashqlar", next: 'Keyingisi...', retry: "Yana urinib ko'ring.",
    topics: [
      { title:'Raqamlar va sanash', sub:'1?20, tartib, taqqoslash', desc:"Raqamlarni tanish, sanash, tartiblash va kattalikni solishtirishni o'rganing.", prompts:[
        { q:'Qaysi son 6 dan katta?', options:['4','5','9','3'], answer:'9', explain:'9 soni 6 dan katta.' },
        { q:'1 dan keyin qaysi son keladi?', options:['0','2','3','5'], answer:'2', explain:'Sanash tartibi: 1, 2, 3...' },
        { q:'10 va 12 orasida qaysi son bor?', options:['9','11','13','8'], answer:'11', explain:'10 dan keyin 11, keyin 12 keladi.' }
      ]},
      { title:"Qo'shish", sub:"birlashtirish va yig'indi", desc:"Narsalarni birlashtirib qo'shishni, 10 ga to'ldirishni va tez hisoblashni mashq qilamiz.", prompts:[
        { q:"3 + 4 nechaga teng?", options:['6','7','8','5'], answer:'7', explain:"3 ga 4 ni qo'shsak 7 bo'ladi." },
        { q:"10 ga to'ldirish uchun 7 ga nechani qo'shamiz?", options:['2','3','4','5'], answer:'3', explain:'7 + 3 = 10.' },
        { q:"5 + 5 nechaga teng?", options:['9','10','11','8'], answer:'10', explain:'5 + 5 = 10.' }
      ]},
      { title:'Ayirish', sub:"qolganini topish", desc:"Narsalarni ayirib, nechta qolganini topishni o'rganing.", prompts:[
        { q:"9 ? 4 nechaga teng?", options:['3','4','5','6'], answer:'5', explain:'9 dan 4 ni olsak 5 qoladi.' },
        { q:"8 ? 2 nechaga teng?", options:['5','6','7','4'], answer:'6', explain:'8 dan 2 ni olsak 6 qoladi.' },
        { q:"10 ? 3 nechaga teng?", options:['6','7','8','5'], answer:'7', explain:'10 dan 3 ni olsak 7 qoladi.' }
      ]},
      { title:'Shakl va mantiq', sub:'naqsh, soat, juftlik', desc:"Shakllar, ketma-ketlik, juftlik va vaqt orqali mantiqiy fikrlashni kuchaytiramiz.", prompts:[
        { q:'Qaysi biri uchburchak?', options:['?','?','?','?'], answer:'?', explain:'? ? uchburchak shakli.' },
        { q:'2, 4, 6, ... keyingi son?', options:['7','8','9','10'], answer:'8', explain:"Har safar 2 qo'shiladi: 6 + 2 = 8." },
        { q:'Qaysi biri juft?', options:['1','3','4','5'], answer:'4', explain:'4 juft son.' }
      ]},
      { title:'Karra', sub:"2, 5, 10 va jadval", desc:"Karra jadvalini naqsh, sakrash bilan sanash va almashtirish (2?3=3?2) orqali tez yodlaymiz.", prompts:[
        { q:"2 ? 4 nechaga teng?", options:['6','8','10','4'], answer:'8', explain:"2, 4, 6, 8 ? 2 dan sakrab sanadik." },
        { q:"5 ? 3 nechaga teng?", options:['10','15','20','8'], answer:'15', explain:"5, 10, 15." },
        { q:"3 ? 4 va 4 ? 3 haqida nima to'g'ri?", options:["Bir xil","Har xil","Faqat 3?4 katta","Ikkalasi 10"], answer:'Bir xil', explain:"Almashtirish xossasi: 3?4 = 4?3 = 12." }
      ]},
      { title:'Tez hisob', sub:'tezkor mashq va sinov', desc:"Qo'shish-ayirishni tez va aniq yechish uchun qisqa mashqlar.", prompts:[
        { q:"6 + 3 nechaga teng?", options:['8','9','10','7'], answer:'9', explain:'6 + 3 = 9.' },
        { q:"10 ? 5 nechaga teng?", options:['4','5','6','3'], answer:'5', explain:'10 ? 5 = 5.' },
        { q:"4 + 4 nechaga teng?", options:['6','7','8','9'], answer:'8', explain:'4 + 4 = 8.' }
      ]}
    ]},
  kaa: { head:'Matematika studiyas?', sub:"Sanaw, qos?w, al?w h?m mantiqt? oy?n arqal? ?yreni?.", tag:"b?lim", section:"Matematika b?limi", games:"Matematika oy?nlar?", gamesSub:"b?limine s?ykes mashqlar", next:'Keyingisi...', retry:"J?ne ur?n?p k?ri?.",
    topics:[
      { title:'Sanlar h?m sanaw', sub:'1?20, t?rtiplestiriw, sal?st?r?w', desc:"Sanlard? tan?w, sanaw, t?rtiplew h?m sal?st?r?wd? ?yrenemiz.", prompts:[
        { q:'Qays? san 6 dan ?lken?', options:['4','5','9','3'], answer:'9', explain:'9 san? 6 dan ?lken.' },
        { q:'1 den keyin qays? san keledi?', options:['0','2','3','5'], answer:'2', explain:'Sanaw t?rtibi: 1, 2, 3...' },
        { q:'10 h?m 12 aras?nda qays? san bar?', options:['9','11','13','8'], answer:'11', explain:'10 nan keyin 11, keyin 12 keledi.' }
      ]},
      { title:'Qos?w', sub:'biriktiriw h?m j?mi', desc:"Zatlard? biriktirip qos?wd?, 10 ?a tolt?r?wd? h?m tez esaplawd? mashq q?lam?z.", prompts:[
        { q:"3 + 4 neshege te??", options:['6','7','8','5'], answer:'7', explain:"3 ke 4 ti qossaq 7 bolad?." },
        { q:"10 ?a tolt?r?w ush?n 7 ge nesheni qosam?z?", options:['2','3','4','5'], answer:'3', explain:'7 + 3 = 10.' },
        { q:"5 + 5 neshege te??", options:['9','10','11','8'], answer:'10', explain:'5 + 5 = 10.' }
      ]},
      { title:'Al?w', sub:"qal?an?n tab?w", desc:"Zatlard? al?p, neshe qal?an?n tab?wd? ?yrenemiz.", prompts:[
        { q:"9 ? 4 neshege te??", options:['3','4','5','6'], answer:'5', explain:'9 dan 4 ti alsaq 5 qalad?.' },
        { q:"8 ? 2 neshege te??", options:['5','6','7','4'], answer:'6', explain:'8 den 2 ni alsaq 6 qalad?.' },
        { q:"10 ? 3 neshege te??", options:['6','7','8','5'], answer:'7', explain:'10 nan 3 ti alsaq 7 qalad?.' }
      ]},
      { title:'Forma h?m mantiq', sub:'naqsh, saat, jupl?q', desc:"Formalar, izbe-izlik, jupl?q h?m waq?t arqal? mantiqt? k?shleytiremiz.", prompts:[
        { q:"Qays?s? ?shm?yeshlik?", options:['?','?','?','?'], answer:'?', explain:'? ? ?shm?yeshlik.' },
        { q:'2, 4, 6, ... keyingi san?', options:['7','8','9','10'], answer:'8', explain:"H?r sapar 2 qos?lad?: 6 + 2 = 8." },
        { q:"Qays?s? jup san?", options:['1','3','4','5'], answer:'4', explain:'4 jup san.' }
      ]},
      { title:'K?beytiw', sub:'2, 5, 10 h?m kesteler', desc:"K?beytiw kestesin naqsh, sekirip sanaw h?m almast?r?w (2?3=3?2) arqal? tez ?yrenemiz.", prompts:[
        { q:"2 ? 4 neshege te??", options:['6','8','10','4'], answer:'8', explain:"2, 4, 6, 8 ? 2 den sekirip sanaym?z." },
        { q:"5 ? 3 neshege te??", options:['10','15','20','8'], answer:'15', explain:"5, 10, 15." },
        { q:"3 ? 4 h?m 4 ? 3 haqq?nda ne dur?s?", options:["Birdey","H?r q?yl?","Tek 3?4 ?lken","Ekewi 10"], answer:'Birdey', explain:"Almast?r?w q?siyeti: 3?4 = 4?3 = 12." }
      ]},
      { title:'Tez esap', sub:'tez mashq h?m s?naq', desc:"Qos?w-al?wd? tez h?m an?q sheshiw ush?n q?sqa mashqlar.", prompts:[
        { q:"6 + 3 neshege te??", options:['8','9','10','7'], answer:'9', explain:'6 + 3 = 9.' },
        { q:"10 ? 5 neshege te??", options:['4','5','6','3'], answer:'5', explain:'10 ? 5 = 5.' },
        { q:"4 + 4 neshege te??", options:['6','7','8','9'], answer:'8', explain:'4 + 4 = 8.' }
      ]}
    ]},
  ru: { head:'?????????????? ??????', sub:'?????? ???????, ??????????, ???????? ? ??????? ????????? ????? ????.', tag:'???????', section:'?????? ??????????', games:'?????????????? ????', gamesSub:'???????? ?? ???????', next:'??????...', retry:'?????????? ??? ???.',
    topics:[
      { title:'????? ? ????', sub:'1?20, ???????, ?????????', desc:'?????? ???????? ?????, ???????, ??????????? ?? ??????? ? ??????????.', prompts:[
        { q:'????? ????? ?????? 6?', options:['4','5','9','3'], answer:'9', explain:'9 ?????? 6.' },
        { q:'????? ????? ???? ????? 1?', options:['0','2','3','5'], answer:'2', explain:'??????? ?????: 1, 2, 3...' },
        { q:'????? ????? ????? 10 ? 12?', options:['9','11','13','8'], answer:'11', explain:'????? 10 ???? 11, ????? 12.' }
      ]},
      { title:'????????', sub:'??????????? ? ?????', desc:'?????? ?????????? ????????, ????????? ?? 10 ? ?????? ??????????.', prompts:[
        { q:'??????? ????? 3 + 4?', options:['6','7','8','5'], answer:'7', explain:'3 + 4 = 7.' },
        { q:'??????? ????? ???????? ? 7, ????? ???????? 10?', options:['2','3','4','5'], answer:'3', explain:'7 + 3 = 10.' },
        { q:'??????? ????? 5 + 5?', options:['9','10','11','8'], answer:'10', explain:'5 + 5 = 10.' }
      ]},
      { title:'?????????', sub:'??????? ????????', desc:'?????? ???????? ? ????????, ??????? ????????.', prompts:[
        { q:'??????? ????? 9 ? 4?', options:['3','4','5','6'], answer:'5', explain:'9 ? 4 = 5.' },
        { q:'??????? ????? 8 ? 2?', options:['5','6','7','4'], answer:'6', explain:'8 ? 2 = 6.' },
        { q:'??????? ????? 10 ? 3?', options:['6','7','8','5'], answer:'7', explain:'10 ? 3 = 7.' }
      ]},
      { title:'????? ? ??????', sub:'????, ?????, ????', desc:'????????? ?????? ????? ?????, ??????????????????, ???? ? ?????.', prompts:[
        { q:'????? ?????? ? ????????????', options:['?','?','?','?'], answer:'?', explain:'? ? ???????????.' },
        { q:'2, 4, 6, ... ????? ????? ???????', options:['7','8','9','10'], answer:'8', explain:'?????? ??? ?????????? 2: 6 + 2 = 8.' },
        { q:'????? ????? ???????', options:['1','3','4','5'], answer:'4', explain:'4 ? ?????? ?????.' }
      ]},
      { title:'?????????', sub:'2, 5, 10 ? ???????', desc:'?????? ??????? ????????? ????? ??????????????, ???? ?????? ? ???????? ???????????? (2?3=3?2).', prompts:[
        { q:'??????? ????? 2 ? 4?', options:['6','8','10','4'], answer:'8', explain:'2, 4, 6, 8 ? ??????? ?? 2.' },
        { q:'??????? ????? 5 ? 3?', options:['10','15','20','8'], answer:'15', explain:'5, 10, 15.' },
        { q:'??? ????? ??? 3 ? 4 ? 4 ? 3?', options:['?????????','??????','?????? 3?4 ??????','??? 10'], answer:'?????????', explain:'???????????????? ????????: 3?4 = 4?3 = 12.' }
      ]},
      { title:'??????? ????', sub:'??????? ??????????', desc:'???????? ??????? ??? ???????? ???????? ? ?????????.', prompts:[
        { q:'??????? ????? 6 + 3?', options:['8','9','10','7'], answer:'9', explain:'6 + 3 = 9.' },
        { q:'??????? ????? 10 ? 5?', options:['4','5','6','3'], answer:'5', explain:'10 ? 5 = 5.' },
        { q:'??????? ????? 4 + 4?', options:['6','7','8','9'], answer:'8', explain:'4 + 4 = 8.' }
      ]}
    ]},
  en: { head:'Math Studio', sub:'Learn counting, addition, subtraction, and logic through games.', tag:'sections', section:'Math section', games:'Math games', gamesSub:'practice for this section', next:'Next...', retry:'Try again.',
    topics:[
      { title:'Numbers & counting', sub:'1?20, order, compare', desc:'Learn to recognize numbers, count, order, and compare values.', prompts:[
        { q:'Which number is greater than 6?', options:['4','5','9','3'], answer:'9', explain:'9 is greater than 6.' },
        { q:'What comes after 1?', options:['0','2','3','5'], answer:'2', explain:'Counting order: 1, 2, 3...' },
        { q:'Which number is between 10 and 12?', options:['9','11','13','8'], answer:'11', explain:'After 10 comes 11, then 12.' }
      ]},
      { title:'Addition', sub:'combine and total', desc:'Practice combining numbers, making 10, and quick addition.', prompts:[
        { q:'What is 3 + 4?', options:['6','7','8','5'], answer:'7', explain:'3 + 4 = 7.' },
        { q:'How much do you add to 7 to make 10?', options:['2','3','4','5'], answer:'3', explain:'7 + 3 = 10.' },
        { q:'What is 5 + 5?', options:['9','10','11','8'], answer:'10', explain:'5 + 5 = 10.' }
      ]},
      { title:'Subtraction', sub:'find what remains', desc:'Learn to take away and find how many are left.', prompts:[
        { q:'What is 9 ? 4?', options:['3','4','5','6'], answer:'5', explain:'9 ? 4 = 5.' },
        { q:'What is 8 ? 2?', options:['5','6','7','4'], answer:'6', explain:'8 ? 2 = 6.' },
        { q:'What is 10 ? 3?', options:['6','7','8','5'], answer:'7', explain:'10 ? 3 = 7.' }
      ]},
      { title:'Shapes & logic', sub:'patterns, time, pairs', desc:'Build logic with shapes, sequences, pairs, and time.', prompts:[
        { q:'Which one is a triangle?', options:['?','?','?','?'], answer:'?', explain:'? is a triangle.' },
        { q:'2, 4, 6, ... what comes next?', options:['7','8','9','10'], answer:'8', explain:'Add 2 each time: 6 + 2 = 8.' },
        { q:'Which number is even?', options:['1','3','4','5'], answer:'4', explain:'4 is even.' }
      ]},
      { title:'Multiplication', sub:'2, 5, 10 and tables', desc:'Learn times tables with patterns, skip counting, and the commutative property (2?3=3?2).', prompts:[
        { q:'What is 2 ? 4?', options:['6','8','10','4'], answer:'8', explain:'2, 4, 6, 8 ? skip count by 2.' },
        { q:'What is 5 ? 3?', options:['10','15','20','8'], answer:'15', explain:'5, 10, 15.' },
        { q:'What is true about 3 ? 4 and 4 ? 3?', options:['Same','Different','Only 3?4 is bigger','Both 10'], answer:'Same', explain:'Commutative property: 3?4 = 4?3 = 12.' }
      ]},
      { title:'Quick math', sub:'fast practice', desc:'Short drills for fast and accurate addition and subtraction.', prompts:[
        { q:'What is 6 + 3?', options:['8','9','10','7'], answer:'9', explain:'6 + 3 = 9.' },
        { q:'What is 10 ? 5?', options:['4','5','6','3'], answer:'5', explain:'10 ? 5 = 5.' },
        { q:'What is 4 + 4?', options:['6','7','8','9'], answer:'8', explain:'4 + 4 = 8.' }
      ]}
    ]}
};

const TOPIC_META: Array<Pick<MathTopic, 'id'|'art'|'accent'|'itemIds'>> = [
  { id:'raqam', art:'olma', accent:'#68b5ff', itemIds:[10,11,12,13,14,34] },
  { id:'qoshish', art:'yulduz', accent:'#5eead4', itemIds:[15,16,17,18] },
  { id:'ayirish', art:'sar', accent:'#ffd166', itemIds:[19,20] },
  { id:'mantiq', art:'gul', accent:'#a78bfa', itemIds:[23,25,26,31] },
  { id:'karra', art:'yulduz2', accent:'#f59e0b', itemIds:[18,21,37] },
  { id:'tez', art:'raketa', accent:'#ff8fab', itemIds:[21,37,24,40] }
];

function getTopics(lang: Lang): MathTopic[] {
  const t = TOPIC_I18N[lang] || TOPIC_I18N.uz;
  return TOPIC_META.map((m, i) => ({ ...m, ...t.topics[i] }));
}
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

export function createMathView() {
  const section = document.getElementById('view-math') as HTMLElement | null;
  const host = document.getElementById('math-host') as HTMLElement | null;
  if (!section || !host) return { el: section || document.createElement('div'), enter() {}, leave() {} };

  let selected = 0;
  let promptIdx = 0;
  let promptFeedback: { ok: boolean; text: string } | null = null;
  let promptOpts: string[] = [];
  let karraN = 2;
  let isVisible = false;
  let artRaf = 0;
  let artCanvases: Array<{ canvas: HTMLCanvasElement; art: string; accent: string; size: number }> = [];

  function getPack() { const lang = getLang(); return { lang, copy: TOPIC_I18N[lang] || TOPIC_I18N.uz, topics: getTopics(lang) }; }
  function getTopic() { return getPack().topics[selected]; }
  function getPrompt() { const t = getTopic(); return t.prompts[promptIdx % t.prompts.length]; }
  function resetPrompt() { promptFeedback = null; promptOpts = shuffle(getPrompt().options); }

  function stopArt() { if (artRaf) { cancelAnimationFrame(artRaf); artRaf = 0; } }
  function startArt() {
    stopArt();
    const tick = (ts: number) => {
      if (!isVisible) return;
      artCanvases.forEach((e) => {
        const ctx = e.canvas.getContext('2d');
        if (ctx) drawIllustration(ctx, e.art, e.canvas.width, ts * 0.001, e.accent, e.size);
      });
      artRaf = requestAnimationFrame(tick);
    };
    artRaf = requestAnimationFrame(tick);
  }

  function render() {
    if (!host) return;
    stopArt();
    artCanvases = [];
    host.innerHTML = '';
    const { copy, topics } = getPack();
    const topic = topics[selected] || topics[0];
    const shell = document.createElement('div');
    shell.className = 'alpha-studio-shell math-studio-shell';

    const head = document.createElement('div');
    head.className = 'alpha-studio-head';
    head.innerHTML = `
      <div>
        <h2 class="alpha-head-title">${copy.head} <span class="alpha-count-tag">${topics.length} ${copy.tag}</span></h2>
        <p class="alpha-head-sub">${copy.sub}</p>
      </div>
    `;
    shell.appendChild(head);

    const tabs = document.createElement('div');
    tabs.className = 'alpha-filter-row';
    topics.forEach((t, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `alpha-filter-btn ${i === selected ? 'is-active' : ''}`;
      b.textContent = t.title;
      b.addEventListener('click', () => { selected = i; promptIdx = 0; resetPrompt(); render(); });
      tabs.appendChild(b);
    });
    shell.appendChild(tabs);

    const layout = document.createElement('div');
    layout.className = 'alpha-matrix-layout math-layout';

    const left = document.createElement('div');
    left.className = 'alpha-matrix-board math-topic-board';
    topics.forEach((t, i) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `alpha-matrix-cell math-topic-cell ${i === selected ? 'is-selected' : ''}`;
      card.innerHTML = `
        <span class="alpha-cell-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="alpha-cell-glyph" style="font-size:clamp(18px,2.4vw,28px)"><small>${t.title}</small></span>
        <span class="alpha-cell-word">${t.sub}</span>
      `;
      card.addEventListener('click', () => { selected = i; promptIdx = 0; karraN = 2; resetPrompt(); render(); });
      left.appendChild(card);
    });

    const stage = document.createElement('aside');
    stage.className = 'alpha-stage-card math-stage-card';

    if (topic.id === 'karra') {
      const karraWrap = document.createElement('div');
      karraWrap.className = 'karra-stage';
      const ns = [1,2,3,4,5,6,7,8,9];
      const n = karraN;
      const titleByLang: Record<Lang,string> = { uz:`${n} karra jadvali`, kaa:`${n} k?beytiw kestesi`, ru:`??????? ????????? ?? ${n}`, en:`${n} times table` };
      const tipByLang: Record<Lang,string> = {
        uz:"Maslahat: naqshni ko'r, sakrab sanashni ayt, keyin tez javob ber. 3?4 va 4?3 bir xil!",
        kaa:"M?sl?h?t: naqshd? k?r, sekirip sana, keyin tez juwap ber. 3?4 h?m 4?3 birdey!",
        ru:"?????: ?????? ?? ??????????????, ?????? ??????, ????? ??????? ??????. 3?4 ? 4?3 ?????????!",
        en:"Tip: spot the pattern, skip count, then answer fast. 3?4 and 4?3 are the same!"
      };
      karraWrap.innerHTML = `
        <div class="alpha-stage-meta"><span>${String(selected + 1).padStart(2, '0')} / ${topics.length}</span><span>?</span><span>${copy.section}</span></div>
        <div class="karra-head">
          <div>
            <div class="alpha-stage-pair" style="--entry-accent:${topic.accent};font-size:clamp(30px,4.5vw,52px);line-height:1.1">${titleByLang[getLang()]}</div>
            <p class="alpha-spot-hint" style="margin:6px 0 0;color:var(--mute);font-weight:650">${tipByLang[getLang()]}</p>
          </div>
          <canvas class="alpha-stage-art karra-art" width="124" height="124"></canvas>
        </div>
        <div class="karra-n-row">${ns.map(x=>`<button type="button" class="karra-n-btn ${x===n?'is-active':''}" data-n="${x}">${x}</button>`).join('')}</div>
        <div class="karra-table" style="--karra-accent:${topic.accent}">
          ${ns.map((m,i)=>`<div class="karra-row" style="animation-delay:${i*45}ms"><span class="karra-eq">${n} ? ${m}</span><span class="karra-eq-sign">=</span><strong class="karra-ans">${n*m}</strong><span class="karra-dots" aria-hidden="true">${Array.from({length:Math.min(m,10)},()=>'<i></i>').join('')}</span></div>`).join('')}
        </div>
        <div class="karra-skip" aria-label="skip count"><span class="karra-skip-label">Skip:</span>${ns.map(m=>`<span class="karra-skip-chip" style="animation-delay:${m*55}ms">${n*m}</span>`).join('')}</div>
      `;
      const kart = karraWrap.querySelector('.karra-art') as HTMLCanvasElement | null;
      if (kart) artCanvases.push({ canvas: kart, art: 'yulduz', accent: topic.accent, size: 96 });
      karraWrap.querySelectorAll('.karra-n-btn').forEach(btn => {
        btn.addEventListener('click', () => { karraN = Number((btn as HTMLElement).dataset.n || 2); promptIdx = 0; resetPrompt(); render(); });
      });

      const prompt = getPrompt();
      if (!promptOpts.length) resetPrompt();
      const quiz = document.createElement('div');
      quiz.className = 'alpha-lab-body karra-quiz';
      quiz.innerHTML = `
        <div class="alpha-check-form">
          <div class="alpha-check-prompt">${prompt.q}</div>
          <div class="alpha-check-opts">${promptOpts.map((o) => `<button type="button" class="alpha-check-opt" data-val="${o}">${o}</button>`).join('')}</div>
          <div class="alpha-check-msg" style="color:${promptFeedback ? (promptFeedback.ok ? (isDayMode() ? '#047857' : '#5eead4') : (isDayMode() ? '#be123c' : '#ff8fab')) : ''}">${promptFeedback ? promptFeedback.text : ''}</div>
        </div>
      `;
      quiz.querySelectorAll('.alpha-check-opt').forEach((btn) => {
        btn.addEventListener('click', () => {
          const val = (btn as HTMLElement).dataset.val || '';
          if (val === prompt.answer) {
            promptFeedback = { ok: true, text: prompt.explain + ' ' + copy.next };
            render();
            setTimeout(() => { promptIdx++; promptFeedback = null; resetPrompt(); if (isVisible) render(); }, 900);
          } else {
            promptFeedback = { ok: false, text: copy.retry };
            render();
          }
        });
      });
      karraWrap.appendChild(quiz);
      stage.appendChild(karraWrap);
    } else {
      const top = document.createElement('div');
      top.className = 'alpha-stage-top';
      const info = document.createElement('div');
      info.className = 'alpha-stage-hero';
      info.innerHTML = `
        <div class="alpha-stage-meta"><span>${String(selected + 1).padStart(2, '0')} / ${topics.length}</span><span>?</span><span>${copy.section}</span></div>
        <div class="alpha-stage-pair" style="--entry-accent:${topic.accent};font-size:clamp(34px,5vw,56px);line-height:1.1">${topic.title}</div>
        <p class="alpha-spot-hint" style="margin:0 0 10px;color:var(--mute);font-weight:650">${topic.desc}</p>
        <div class="alpha-stage-words">${topic.itemIds.map((id) => { const it = EDU_ITEMS.find(x=>x.id===id); return it ? `<span class="alpha-word-chip">${it.title}</span>` : ''; }).join('')}</div>
      `;
      const art = document.createElement('canvas');
      art.width = 124; art.height = 124; art.className = 'alpha-stage-art';
      artCanvases.push({ canvas: art, art: topic.art, accent: topic.accent, size: 96 });
      top.append(info, art);
      stage.appendChild(top);

      const prompt = getPrompt();
      if (!promptOpts.length) resetPrompt();
      const quiz = document.createElement('div');
      quiz.className = 'alpha-lab-body';
      quiz.innerHTML = `
        <div class="alpha-check-form">
          <div class="alpha-check-prompt">${prompt.q}</div>
          <div class="alpha-check-opts">${promptOpts.map((o) => `<button type="button" class="alpha-check-opt" data-val="${o}">${o}</button>`).join('')}</div>
          <div class="alpha-check-msg" style="color:${promptFeedback ? (promptFeedback.ok ? (isDayMode() ? '#047857' : '#5eead4') : (isDayMode() ? '#be123c' : '#ff8fab')) : ''}">${promptFeedback ? promptFeedback.text : ''}</div>
        </div>
      `;
      quiz.querySelectorAll('.alpha-check-opt').forEach((btn) => {
        btn.addEventListener('click', () => {
          const val = (btn as HTMLElement).dataset.val || '';
          if (val === prompt.answer) {
            promptFeedback = { ok: true, text: prompt.explain + ' ' + copy.next };
            render();
            setTimeout(() => { promptIdx++; promptFeedback = null; resetPrompt(); if (isVisible) render(); }, 900);
          } else {
            promptFeedback = { ok: false, text: copy.retry };
            render();
          }
        });
      });
      stage.appendChild(quiz);
    }

    layout.append(left, stage);
    shell.appendChild(layout);

    const dock = document.createElement('div');
    dock.className = 'alpha-games-dock';
    dock.innerHTML = `
      <div class="alpha-games-head">
        <div><h3 class="alpha-games-title">${copy.games}</h3><p class="alpha-games-sub">${topic.title} ? ${copy.gamesSub}</p></div>
      </div>
      <div class="alpha-games-grid math-games-grid"></div>
    `;
    const grid = dock.querySelector('.alpha-games-grid') as HTMLElement;
    topic.itemIds.forEach((id) => {
      const item = EDU_ITEMS.find((x) => x.id === id);
      if (!item) return;
      const card = document.createElement('div');
      card.className = 'alpha-game-card';
      card.innerHTML = `
        <button type="button" class="alpha-game-btn" data-role="play">
          <span class="alpha-game-glyph">${item.glyph}</span>
          <span class="alpha-game-info"><strong>${item.title}</strong><small>${item.subGlyph}</small></span>
          <span class="alpha-game-go" aria-hidden="true">→</span>
        </button>
        <button type="button" class="alpha-game-pvp-btn" data-role="pvp" title="PvP">1v2</button>
      `;
      card.querySelector('[data-role="play"]')?.addEventListener('click', () => openEduGame(item));
      card.querySelector('[data-role="pvp"]')?.addEventListener('click', () => openEduGame({ ...item, config: { ...(item.config || {}), pvpMode: true } }));
      grid.appendChild(card);
    });
    shell.appendChild(dock);

    host.appendChild(shell);
    if (isVisible) startArt();
  }

  onThemeChange(() => { if (isVisible) render(); });
  window.addEventListener('alif:lang', () => { if (isVisible) { promptIdx = 0; resetPrompt(); render(); } });

  return {
    el: section,
    enter() { isVisible = true; resetPrompt(); render(); },
    leave() { isVisible = false; stopArt(); }
  };
}
