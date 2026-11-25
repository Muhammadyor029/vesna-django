export const LANGS = [
  { code: 'uz', name: 'Özbekçe', short: 'UZ' },
  { code: 'kaa', name: 'Qaraqalpaqça', short: 'QQ' },
  { code: 'ru', name: 'Русский', short: 'RU' },
  { code: 'en', name: 'English', short: 'EN' }
];

const KIDS_COUNT = 41;

const S = {
  uz: {
    app_title: 'VESNA KIDS', app_subtitle: 'boğcha · alifbo va öyinlar',
    nav_sphere: 'Öyin xaritasi', nav_games: 'Öyinlar', nav_letters: 'Harflar', nav_math: 'Matematika', nav_alphabet: 'Yöriqnoma',
    menu_intro: 'Bolalar uçun öyinlar', set_grade: 'Sinf', set_every: 'Har', set_rest: 'Dam vaqti',
    theme_mode: 'Kun / tun', guide_btn: 'Yöriqnoma', guide_title: 'VESNA KIDS yöriqnomasi',
    guide_sub: 'Öquvçilar va öqituçilar uçun', rest_now: 'Hozir dam olaylik', eye_now: 'Köz maşqi',
    gallery_left: 'ALIFBO', gallery_right: 'ÖYIN · RANG', gallery_hint: 'AYLANTIRIB TANLANG',
    tag1: 'Boğcha', tag2: 'Alifbo va öyinlar', tag3: 'Tez öyin',
    play: 'Boşlaş', close: 'Yopiş', replay: 'Qayta', exit: 'Çıqiş', check: 'Tekşiriş', next: 'Keyingi',
    finish: 'Yakunlaş', back: 'Orqaga', score: 'Ball', stars: 'Yulduz', question: 'Savol', of: '/',
    grade: 'Sinf', subject: 'Fan', correct: 'Töğri', wrong: 'Xato', try_again: 'Yana urining',
    correct_answer: 'Töğri javob', explain: 'Tuşuntiriş', well_done: 'Ajoyib!', result: 'Natija',
    streak: 'Ketma-ket', streak_unit: 'ta töğri', time_up: 'Vaqt tugadi', no_answer: 'Javob tanlanmadi',
    all_done: 'Barça savollar tugadi', pvp: 'PvP', pvp_on: 'PvP: yoqilgan', player1: '1-öyinçi',
    player2: '2-öyinçi', turn: 'Navbat', duel_live: 'Jonli duel', quick_duel: 'Tez duel',
    new_duel: 'Yangi duel', next_player: '2-öyinçi boşlasin', winner: '{p} ğolib!', draw: 'Durang!',
    p1_keys: '1–4 tugmalari', p2_keys: '7–0 tugmalari', duel_desc: 'Bir ekranda ikki öyinçi. Tez javob bering.',
    round: 'Raund', first_correct: 'birinçi topdi +1', wrong_press: 'xato bosdi',
    subject: 'Fan', math: 'Matematika', uzbek: 'Ona tili', russian: 'Rus tili', english: 'Ingliz tili',
    karakalpak: 'Qoraqalpoq tili', logic: 'Mantiq',
    mul_large: 'Katta köpaytiriş', division: 'Böliş', fractions: 'Kasrlar', percent: 'Foizlar',
    equations: 'Tenglamalar', powers: 'Daraja va ildiz', quadratic: 'Kvadrat tenglama',
    word_problem: 'Masala yeçiş', functions: 'Funksiyalar', statistics: 'Statistika',
    probability: 'Ehtimollik', sequences: 'Ketma-ketlik', logarithms: 'Logarifmlar',
    trigonometry: 'Trigonometriya', geometry: 'Geometriya', mixed: 'Aralaş',
    spelling: 'Imlo', grammar: 'Grammatika', synonyms: 'Maʼnodaşlar', translation: 'Tarjima',
    sentence_order: 'Gap tartibi', logic_pattern: 'Naqş', odd_one: 'Ortiqçasi', analogy: 'Öxşaşlik',
    logic_grid: 'Mantiqiy jadval',
    add_large: 'Katta qoşiş', sub_large: 'Katta ayiriş', decimals: 'Önliklar', ratios: 'Nisbatlar',
    area: 'Yuz', perimeter: 'Perimetr', speed: 'Tezlik',
    antonyms: 'Zid sözlar', punctuation: 'Tiniş belgilari', word_formation: 'Söz yasalishi',
    number_sequence: 'Son ketma-ketligi', matrix_logic: 'Jadval mantiqi', counting: 'Sanash', pattern_shape: 'Şakl naqşi',
    solution: 'Yeçiş:', seq_q: '{seq} → ?', matrix_q: 'Jadvalda ? örniga nima keladi?', count_q: 'Sanaŋ: {items}', shape_q: 'Keyingi şakl qaysi?',
    game_desc: 'Sinf: {grade}. {subject} · {skill}.', start_desc: '{count} ta savol. Töğri javob uçun yulduz olinadi.',
    translation_q: '«{word}» sözining {to} dagi tarjimasi nima?', synonym_q: '«{word}» ga maʼnodaş sözni tanlang.',
    spelling_q: 'Töğri yozilişini tanlang.', grammar_q: 'Gapdagi böş joyga mos sözni tanlang.',
    order_q: 'Töğri gap tartibini tanlang.', pick_grade: 'Menyudan sinfni tanlang.',
    level_name: 'Daraja {n}', type_answer: 'Javobingizni yozing', next_question: 'Keyingi savol',
    lang_uz: 'özbekçe', lang_kaa: 'qaraqalpaqça', lang_ru: 'rusça', lang_en: 'inglizçe'
  },
  kaa: {
    app_title: 'VESNA KIDS', app_subtitle: 'bala baqsha · álippe hám oyınlar',
    nav_sphere: 'Fanlar kartası', nav_games: 'Mashıqlar', nav_letters: 'Harflar', nav_math: 'Matematika', nav_alphabet: 'Bağanısh',
    menu_intro: 'Balalar ushın oyınlar', set_grade: 'Klass', set_every: 'Hár', set_rest: 'Dem waqtı',
    theme_mode: 'Kún / tún', guide_btn: 'Bağanısh', guide_title: 'VESNA KIDS bağanıshı',
    guide_sub: 'Oqıwshılar hám oqıtıwshılar ushın', rest_now: 'Házir dem alaylıq', eye_now: 'Kóz mashıqı',
    gallery_left: 'ÁLIPPE', gallery_right: 'OYIN · REŃ', gallery_hint: 'AYLANDIRIP TAŃLAŃ',
    tag1: 'Bala baqsha', tag2: 'Álippe hám oyınlar', tag3: 'Tez oyın',
    play: 'Baslaw', close: 'Jabıw', replay: 'Qayta', exit: 'Shıǵıw', check: 'Tekseriw', next: 'Keyingi',
    finish: 'Tamatlaw', back: 'Artqa', score: 'Ball', stars: 'Juldız', question: 'Soraw', of: '/',
    grade: 'Klass', subject: 'Fan', correct: 'Durıs', wrong: 'Nawrıs', try_again: 'Tağı bayqap kórin',
    correct_answer: 'Durıs juwap', explain: 'Túsindiriw', well_done: 'Ádep!', result: 'Nátiyje',
    streak: 'Izbe-iz', streak_unit: 'durı', time_up: 'Waqıt tamam', no_answer: 'Juwap tańlanbadı',
    all_done: 'Barlıq sorawlar tamam', pvp: 'PvP', pvp_on: 'PvP: qosılgán', player1: '1-oyınshı',
    player2: '2-oyınshı', turn: 'Gezek', duel_live: 'Janlı duel', quick_duel: 'Tez duel',
    new_duel: 'Jańa duel', next_player: '2-oyınshı baslasın', winner: '{p} jeńimpaz!', draw: 'Teńlik!',
    p1_keys: '1–4 tugmalar', p2_keys: '7–0 tugmalar', duel_desc: 'Bir ekranda eki oyınshı. Tez juwap beriń.',
    round: 'Raund', first_correct: 'birinshi tapta +1', wrong_press: 'nawrıs bastı',
    subject: 'Pán', math: 'Matematika', uzbek: 'Ana tili', russian: 'Rus tili', english: 'Inglis tili',
    karakalpak: 'Qaraqalpaq tili', logic: 'Mantiq',
    mul_large: 'Úlken kóbeytiw', division: 'Bóliw', fractions: 'Kasplar', percent: 'Percentler',
    equations: 'Tendep tumarlar', powers: 'Dáreje hám tamyr', quadratic: 'Kvadrat tendep tumar',
    word_problem: 'Másele sheshiw', functions: 'Funksiyalar', statistics: 'Statistika',
    probability: 'Itimal', sequences: 'Izbe-izlik', logarithms: 'Logarifmler',
    trigonometry: 'Trigonometriya', geometry: 'Geometriya', mixed: 'Aralas',
    spelling: 'Imlo', grammar: 'Grammatika', synonyms: 'Mániles', translation: 'Awırmalaw',
    sentence_order: 'Gáp tártibi', logic_pattern: 'Naqısh', odd_one: 'Artıqsha', analogy: 'Uqsaslıq',
    logic_grid: 'Mantiqiy keste',
    add_large: 'Úlken qosıw', sub_large: 'Úlken alıw', decimals: 'Onlıqlar', ratios: 'Nisbetler',
    area: 'Maydan', perimeter: 'Perimetr', speed: 'Tezlik',
    antonyms: 'Qarama-qarsı sózler', punctuation: 'Tınısh belgiler', word_formation: 'Sóz jasalıwı',
    number_sequence: 'San izbe-izligi', matrix_logic: 'Keste mantiğı', counting: 'Sanaq', pattern_shape: 'Súwret naqıshı',
    solution: 'Sheshiw:', seq_q: '{seq} → ?', matrix_q: 'Kestede ? ornına ne keledi?', count_q: 'Sanań: {items}', shape_q: 'Keyingi súwret qaysı?',
    game_desc: 'Klass: {grade}. {subject} · {skill}.', start_desc: '{count} soraw. Durıs juwap ushın juldız alınadı.',
    translation_q: '«{word}» sóziniń {to} dagi awırması ne?', synonym_q: '«{word}» ǵa mániles sózdi tańlań.',
    spelling_q: 'Durıs jazılıwdı tańlań.', grammar_q: 'Gáptiń bos ornına durıs sózdi tańlań.',
    order_q: 'Durıs gáp tártibin tańlań.', pick_grade: 'Bağanısh klass tańlań.',
    level_name: 'Dáreje {n}', type_answer: 'Juwabıńızdı jazıń', next_question: 'Keyingi soraw',
    lang_uz: 'ózbekşe', lang_kaa: 'qaraqalpaqşa', lang_ru: 'rusşa', lang_en: 'inglisşe'
  },
  ru: {
    app_title: 'VESNA KIDS', app_subtitle: 'дошкольники · алфавит и игры',
    nav_sphere: 'Карта предметов', nav_games: 'Упражнения', nav_letters: 'Предметы', nav_math: 'Matematika', nav_alphabet: 'Инструкция',
    menu_intro: 'Игры для детей', set_grade: 'Класс', set_every: 'Каждые', set_rest: 'Отдых',
    theme_mode: 'День / ночь', guide_btn: 'Инструкция', guide_title: 'Инструкция VESNA KIDS',
    guide_sub: 'Для учеников и учителей', rest_now: 'Отдохнём', eye_now: 'Упражнение для глаз',
    gallery_left: 'АЛФАВИТ · 28 + ʼ', gallery_right: 'ИГРА · ЦВЕТ', gallery_hint: 'ВРАЩАЙТЕ И ВЫБИРАЙТЕ',
    tag1: 'Дошкольники', tag2: 'Алфавит и игры', tag3: 'Быстрая игра',
    play: 'Начать', close: 'Закрыть', replay: 'Заново', exit: 'Выход', check: 'Проверить', next: 'Далее',
    finish: 'Завершить', back: 'Назад', score: 'Баллы', stars: 'Звёзды', question: 'Вопрос', of: '/',
    grade: 'Класс', subject: 'Предмет', correct: 'Верно', wrong: 'Ошибка', try_again: 'Попробуйте ещё',
    correct_answer: 'Правильный ответ', explain: 'Объяснение', well_done: 'Отлично!', result: 'Результат',
    streak: 'Подряд', streak_unit: 'верных', time_up: 'Время вышло', no_answer: 'Ответ не выбран',
    all_done: 'Все вопросы завершены', pvp: 'PvP', pvp_on: 'PvP: включён', player1: 'Игрок 1',
    player2: 'Игрок 2', turn: 'Ход', duel_live: 'Живая дуэль', quick_duel: 'Быстрая дуэль',
    new_duel: 'Новая дуэль', next_player: 'Ход игрока 2', winner: '{p} побеждает!', draw: 'Ничья!',
    p1_keys: 'клавиши 1–4', p2_keys: 'клавиши 7–0', duel_desc: 'Два игрока на одном экране. Отвечайте быстрее.',
    round: 'Раунд', first_correct: 'первый нашёл +1', wrong_press: 'ошибка',
    subject: 'Предмет', math: 'Математика', uzbek: 'Узбекский язык', russian: 'Русский язык', english: 'Английский язык',
    karakalpak: 'Каракалпакский язык', logic: 'Логика',
    mul_large: 'Умножение', division: 'Деление', fractions: 'Дроби', percent: 'Проценты',
    equations: 'Уравнения', powers: 'Степени и корни', quadratic: 'Квадратные уравнения',
    word_problem: 'Задачи', functions: 'Функции', statistics: 'Статистика',
    probability: 'Вероятность', sequences: 'Последовательности', logarithms: 'Логарифмы',
    trigonometry: 'Тригонометрия', geometry: 'Геометрия', mixed: 'Смешанное',
    spelling: 'Орфография', grammar: 'Грамматика', synonyms: 'Синонимы', translation: 'Перевод',
    sentence_order: 'Порядок слов', logic_pattern: 'Закономерность', odd_one: 'Лишнее', analogy: 'Аналогия',
    logic_grid: 'Логическая таблица',
    add_large: 'Сложение больших чисел', sub_large: 'Вычитание больших чисел', decimals: 'Десятичные дроби', ratios: 'Отношения',
    area: 'Площадь', perimeter: 'Периметр', speed: 'Скорость',
    antonyms: 'Антонимы', punctuation: 'Знаки препинания', word_formation: 'Образование слов',
    number_sequence: 'Числовая последовательность', matrix_logic: 'Логика таблицы', counting: 'Счёт', pattern_shape: 'Узор из фигур',
    solution: 'Решение:', seq_q: '{seq} → ?', matrix_q: 'Что стоит вместо ? в таблице?', count_q: 'Посчитай: {items}', shape_q: 'Какая фигура следующая?',
    game_desc: 'Класс: {grade}. {subject} · {skill}.', start_desc: '{count} вопросов. За верный ответ — звезда.',
    translation_q: 'Как переводится «{word}» на {to}?', synonym_q: 'Выберите синоним к «{word}».',
    spelling_q: 'Выберите правильное написание.', grammar_q: 'Выберите подходящее слово.',
    order_q: 'Выберите правильный порядок слов.', pick_grade: 'Выберите класс в меню.',
    level_name: 'Уровень {n}', type_answer: 'Введите ответ', next_question: 'Следующий вопрос',
    lang_uz: 'узбекском', lang_kaa: 'каракалпакском', lang_ru: 'русском', lang_en: 'английском'
  },
  en: {
    app_title: 'VESNA KIDS', app_subtitle: 'kids · alphabet and games',
    nav_sphere: 'Subject map', nav_games: 'Practice', nav_letters: 'Subjects', nav_math: 'Math', nav_alphabet: 'Guide',
    menu_intro: 'Games for kids', set_grade: 'Grade', set_every: 'Every', set_rest: 'Break',
    theme_mode: 'Day / night', guide_btn: 'Guide', guide_title: 'VESNA KIDS guide',
    guide_sub: 'For students and teachers', rest_now: 'Take a break', eye_now: 'Eye exercise',
    gallery_left: 'ALPHABET', gallery_right: 'PLAY · COLOR', gallery_hint: 'ROTATE TO CHOOSE',
    tag1: 'Kids', tag2: 'Alphabet and games', tag3: 'Quick game',
    play: 'Start', close: 'Close', replay: 'Again', exit: 'Exit', check: 'Check', next: 'Next',
    finish: 'Finish', back: 'Back', score: 'Score', stars: 'Stars', question: 'Question', of: '/',
    grade: 'Grade', subject: 'Subject', correct: 'Correct', wrong: 'Wrong', try_again: 'Try again',
    correct_answer: 'Correct answer', explain: 'Explanation', well_done: 'Well done!', result: 'Result',
    streak: 'In a row', streak_unit: 'correct', time_up: 'Time is up', no_answer: 'No answer selected',
    all_done: 'All questions completed', pvp: 'PvP', pvp_on: 'PvP: on', player1: 'Player 1',
    player2: 'Player 2', turn: 'Turn', duel_live: 'Live duel', quick_duel: 'Quick duel',
    new_duel: 'New duel', next_player: 'Player 2 starts', winner: '{p} wins!', draw: 'Draw!',
    p1_keys: 'keys 1–4', p2_keys: 'keys 7–0', duel_desc: 'Two players, one screen. Answer first.',
    round: 'Round', first_correct: 'first to answer +1', wrong_press: 'wrong tap',
    subject: 'Subject', math: 'Maths', uzbek: 'Uzbek', russian: 'Russian', english: 'English',
    karakalpak: 'Karakalpak', logic: 'Logic',
    mul_large: 'Long multiplication', division: 'Division', fractions: 'Fractions', percent: 'Percentages',
    equations: 'Equations', powers: 'Powers and roots', quadratic: 'Quadratic equations',
    word_problem: 'Word problems', functions: 'Functions', statistics: 'Statistics',
    probability: 'Probability', sequences: 'Sequences', logarithms: 'Logarithms',
    trigonometry: 'Trigonometry', geometry: 'Geometry', mixed: 'Mixed',
    spelling: 'Spelling', grammar: 'Grammar', synonyms: 'Synonyms', translation: 'Translation',
    sentence_order: 'Word order', logic_pattern: 'Pattern', odd_one: 'Odd one out', analogy: 'Analogy',
    logic_grid: 'Logic grid',
    add_large: 'Large addition', sub_large: 'Large subtraction', decimals: 'Decimals', ratios: 'Ratios',
    area: 'Area', perimeter: 'Perimeter', speed: 'Speed',
    antonyms: 'Antonyms', punctuation: 'Punctuation', word_formation: 'Word formation',
    number_sequence: 'Number sequence', matrix_logic: 'Logic grid', counting: 'Counting', pattern_shape: 'Shape pattern',
    solution: 'Solution:', seq_q: '{seq} → ?', matrix_q: 'What replaces ? in the grid?', count_q: 'Count: {items}', shape_q: 'Which shape comes next?',
    game_desc: 'Grade: {grade}. {subject} · {skill}.', start_desc: '{count} questions. A star for every correct answer.',
    translation_q: 'What is «{word}» in {to}?', synonym_q: 'Choose a synonym of «{word}».',
    spelling_q: 'Choose the correct spelling.', grammar_q: 'Choose the word that fits the sentence.',
    order_q: 'Choose the correct word order.', pick_grade: 'Choose a grade in the menu.',
    level_name: 'Level {n}', type_answer: 'Type your answer', next_question: 'Next question',
    lang_uz: 'Uzbek', lang_kaa: 'Karakalpak', lang_ru: 'Russian', lang_en: 'English'
  }
};

let currentLang = 'uz';
export function setContentLang(code) { if (S[code]) currentLang = code; }
export function getContentLang() { return currentLang; }
function fmt(s, vars) {
  if (!vars) return s;
  return s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}
export function t(key, vars) { return fmt(S[currentLang]?.[key] ?? S.uz[key] ?? key, vars); }
export function tr(lang, key, vars) { return fmt(S[lang]?.[key] ?? S.uz[key] ?? key, vars); }

export const SUBJECTS = ['math', 'uzbek', 'russian', 'english', 'karakalpak', 'logic'];
export const SKILLS = [
  'mul_large', 'division', 'fractions', 'percent', 'equations', 'powers', 'quadratic', 'word_problem',
  'functions', 'statistics', 'probability', 'sequences', 'logarithms', 'trigonometry', 'geometry', 'mixed',
  'add_large', 'sub_large', 'decimals', 'ratios', 'area', 'perimeter', 'speed',
  'spelling', 'grammar', 'synonyms', 'translation', 'sentence_order', 'antonyms', 'punctuation', 'word_formation',
  'logic_pattern', 'odd_one', 'analogy', 'logic_grid', 'number_sequence', 'matrix_logic', 'counting', 'pattern_shape'
];
export const GRADES = [5, 6, 7, 8, 9, 10, 11];

const PLAN = [
  ...['uzbek', 'russian', 'english', 'karakalpak'].flatMap((s, i) => [
    [s, 'spelling', [5 + i % 2, 6 + i % 2]], [s, 'grammar', [7 + i % 2, 8 + i % 2]],
    [s, 'synonyms', [8, 9]], [s, 'translation', [5, 6, 7]], [s, 'sentence_order', [9, 10, 11]],
    [s, 'antonyms', [6 + i % 2, 7 + i % 2]], [s, 'punctuation', [5, 6]], [s, 'word_formation', [8, 9]]
  ]),
  ['math', 'mul_large', [5, 6]], ['math', 'division', [5, 6]], ['math', 'fractions', [5, 6, 7]],
  ['math', 'percent', [6, 7]], ['math', 'equations', [6, 7, 8]], ['math', 'powers', [7, 8]],
  ['math', 'quadratic', [8, 9]], ['math', 'word_problem', [5, 6, 7]], ['math', 'functions', [7, 8, 9]],
  ['math', 'statistics', [8, 9, 10]], ['math', 'probability', [9, 10]], ['math', 'sequences', [8, 9, 10]],
  ['math', 'logarithms', [10, 11]], ['math', 'trigonometry', [10, 11]], ['math', 'geometry', [7, 8, 9]],
  ['math', 'mixed', [9, 10, 11]],
  ['math', 'add_large', [5, 6]], ['math', 'sub_large', [5, 6]], ['math', 'decimals', [6, 7]],
  ['math', 'ratios', [7, 8]], ['math', 'area', [7, 8]], ['math', 'perimeter', [6, 7]], ['math', 'speed', [8, 9]],
  ['logic', 'logic_pattern', [5, 6, 7]], ['logic', 'odd_one', [7, 8, 9]],
  ['logic', 'analogy', [9, 10]], ['logic', 'logic_grid', [10, 11]],
  ['logic', 'number_sequence', [5, 6, 7]], ['logic', 'matrix_logic', [8, 9]],
  ['logic', 'counting', [5, 6]], ['logic', 'pattern_shape', [7, 8]]
];

const ACCENTS = ['#5eead4', '#68b5ff', '#ffd166', '#ff8fab', '#a78bfa', '#56ccf2'];
const BGS = ['space', 'prism', 'aurora', 'valley'];
const ARTS = ['raketa', 'kitob', 'yulduz', 'sar', 'olma', 'qozi'];

export const EDU_ITEMS = PLAN.map(([subject, skill, grades], i) => {
  const grade = grades[grades.length - 1];
  return {
    id: i + 1, subject, skill, grades,
    glyph: String(i + 1).padStart(2, '0'),
    subGlyph: `${subject} · ${skill}`,
    title: `${t(subject)} · ${t(skill)}`,
    category: t(subject),
    year: `${t('grade')} ${grades.join(', ')}`,
    desc: t('game_desc', { grade: grades.join(', '), subject: t(subject), skill: t(skill) }),
    accent: ACCENTS[i % ACCENTS.length],
    art: ARTS[i % ARTS.length],
    bg: BGS[i % BGS.length],
    gameType: 'senior-quiz',
    config: { subject, skill, grades, count: 6 }
  };
});

// Shared lexicon: [correct word, synonym, distractor, distractor]
export const WORDS = [
  { uz: ['kitob', 'darslik', 'varaq', 'jild'], kaa: ['kitap', 'oquwlıq', 'bet', 'tom'], ru: ['книга', 'учебник', 'страница', 'том'], en: ['book', 'textbook', 'page', 'volume'] },
  { uz: ['suv', 'içimlik', 'daryo', 'tosh'], kaa: ['su', 'ishimlik', 'dárya', 'tas'], ru: ['вода', 'напиток', 'река', 'камень'], en: ['water', 'drink', 'river', 'stone'] },
  { uz: ['maktab', 'öquv yurti', 'sinf', 'uy'], kaa: ['mektep', 'oqıw orayı', 'klass', 'úy'], ru: ['школа', 'училище', 'класс', 'дом'], en: ['school', 'college', 'classroom', 'house'] },
  { uz: ['öqituçi', 'muallim', 'öquvçi', 'direktor'], kaa: ['oqıtıwshı', 'muallim', 'oqıwshı', 'direktor'], ru: ['учитель', 'педагог', 'ученик', 'директор'], en: ['teacher', 'tutor', 'student', 'headmaster'] },
  { uz: ['döst', 'rafiq', 'dushman', 'qoşni'], kaa: ['dos', 'joldas', 'dushpan', 'qońsı'], ru: ['друг', 'товарищ', 'враг', 'сосед'], en: ['friend', 'companion', 'enemy', 'neighbour'] },
  { uz: ['uy', 'bino', 'xona', 'köçe'], kaa: ['úy', 'bina', 'bólme', 'kóshe'], ru: ['дом', 'здание', 'комната', 'улица'], en: ['house', 'building', 'room', 'street'] },
  { uz: ['quyosh', 'nur', 'oy', 'yulduz'], kaa: ['kún', 'şıraq', 'ay', 'juldız'], ru: ['солнце', 'светило', 'луна', 'звезда'], en: ['sun', 'starlight', 'moon', 'planet'] },
  { uz: ['yöl', 'iz', 'köçe', 'köprik'], kaa: ['jol', 'iz', 'kóshe', 'kópir'], ru: ['дорога', 'путь', 'улица', 'мост'], en: ['road', 'path', 'street', 'bridge'] },
  { uz: ['ish', 'mehnat', 'öyin', 'dam'], kaa: ['is', 'miynet', 'oyın', 'dem'], ru: ['работа', 'труд', 'игра', 'отдых'], en: ['work', 'labour', 'play', 'rest'] },
  { uz: ['vaqt', 'soat', 'kun', 'oy'], kaa: ['waqt', 'saat', 'kún', 'ay'], ru: ['время', 'час', 'день', 'месяц'], en: ['time', 'hour', 'day', 'month'] },
  { uz: ['til', 'nutq', 'söz', 'harf'], kaa: ['til', 'sóylew', 'sóz', 'hárip'], ru: ['язык', 'речь', 'слово', 'буква'], en: ['language', 'speech', 'word', 'letter'] },
  { uz: ['bilim', 'maʼlumot', 'davolash', 'öyin'], kaa: ['bilim', 'maǵlıwmat', 'dawalaw', 'oyın'], ru: ['знание', 'сведения', 'лечение', 'игра'], en: ['knowledge', 'information', 'treatment', 'game'] }
];

const SENTENCES = {
  uz: [
    ['Men', 'har', 'kuni', 'kitob', 'öqiyman.'], ['U', 'maktabga', 'ertalab', 'boradi.'],
    ['Biz', 'suv', 'ichamiz', 'har', 'kuni.'], ['Öqituçi', 'doskaga', 'yozadi', 'yangi', 'sözni.']
  ],
  kaa: [
    ['Men', 'hár', 'kúni', 'kitap', 'oqıyman.'], ['Ol', 'mektepke', 'erteń', 'baradı.'],
    ['Biz', 'su', 'ishemiz', 'hár', 'kúni.'], ['Oqıtıwshı', 'doskaǵa', 'jazadı', 'jańa', 'sózdi.']
  ],
  ru: [
    ['Я', 'каждый', 'день', 'читаю', 'книгу.'], ['Он', 'в', 'школу', 'утром', 'идёт.'],
    ['Мы', 'пьём', 'воду', 'каждый', 'день.'], ['Учитель', 'пишет', 'новое', 'слово', 'на доске.']
  ],
  en: [
    ['I', 'read', 'a', 'book', 'every', 'day.'], ['He', 'goes', 'to', 'school', 'early.'],
    ['We', 'drink', 'water', 'every', 'day.'], ['The', 'teacher', 'writes', 'a', 'new', 'word.']
  ]
};

const ANTONYMS = {
  uz: [['katta', 'kiçik'], ['issiq', 'sovuq'], ['tez', 'sekin'], ['uzun', 'qisqa'], ['yaxşi', 'yomon'], ['döst', 'dushman']],
  kaa: [['úlken', 'kishi'], ['ıssı', 'suwıq'], ['tez', 'áste'], ['uzın', 'qısqa'], ['jaqsı', 'jaman'], ['dos', 'dushpan']],
  ru: [['большой', 'маленький'], ['горячий', 'холодный'], ['быстрый', 'медленный'], ['длинный', 'короткий'], ['хороший', 'плохой'], ['друг', 'враг']],
  en: [['big', 'small'], ['hot', 'cold'], ['fast', 'slow'], ['long', 'short'], ['good', 'bad'], ['friend', 'enemy']]
};
const PUNCT = {
  uz: [['Men maktabga boraman', '.'], ['U qaydasan', '?'], ['Vah, yaxşi', '!'], ['Bugun dars bor', '.']],
  kaa: [['Men mektepke baraman', '.'], ['Sen qaydasan', '?'], ['Wah, jaqsı', '!'], ['Búgin dars bar', '.']],
  ru: [['Я иду в школу', '.'], ['Где ты', '?'], ['Как хорошо', '!'], ['Сегодня урок', '.']],
  en: [['I go to school', '.'], ['Where are you', '?'], ['How nice', '!'], ['There is a lesson today', '.']]
};
const FORMS = {
  uz: [['öqit', 'öqituçi'], ['yaz', 'yozuçi'], ['öyna', 'öyinçi'], ['bil', 'bilim']],
  kaa: [['oqıt', 'oqıtıwshı'], ['jaz', 'jazıwshı'], ['oyna', 'oyınshı'], ['bil', 'bilim']],
  ru: [['учить', 'учитель'], ['писать', 'писатель'], ['играть', 'игрок'], ['знать', 'знание']],
  en: [['teach', 'teacher'], ['write', 'writer'], ['play', 'player'], ['know', 'knowledge']]
};

const SUBJ_LANG = { uzbek: 'uz', russian: 'ru', english: 'en', karakalpak: 'kaa' };
const UI_LANG = { uz: 'uz', kaa: 'kaa', ru: 'ru', en: 'en' };

function ri(rng, a, b) { return a + Math.floor(rng() * (b - a + 1)); }
function pick(a, rng) { return a[Math.floor(rng() * a.length)]; }
function shuffle(a, rng) {
  const x = a.slice();
  for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [x[i], x[j]] = [x[j], x[i]]; }
  return x;
}
function numOptions(correct, rng, span = 12) {
  const set = new Set([String(correct)]);
  let guard = 0;
  while (set.size < 4 && guard++ < 60) {
    const d = ri(rng, -span, span);
    if (d !== 0) set.add(String(correct + d));
  }
  while (set.size < 4) set.add(String(correct + set.size));
  return shuffle([...set], rng).map((v) => ({ label: v, correct: v === String(correct) }));
}
function textOptions(correct, others, rng) {
  const list = [correct, ...others.filter((x) => x !== correct)].slice(0, 4);
  while (list.length < 4) list.push(`— ${list.length}`);
  return shuffle(list, rng).map((v) => ({ label: v, correct: v === correct }));
}
function mc(prompt, options, explain) { return { kind: 'choice', prompt, options, explain }; }
function inp(prompt, answer, explain) { return { kind: 'input', prompt, answer: String(answer), explain }; }

const MQ = {
  uz: {
    mul: '{a} × {b} = ?', div: '{x} ÷ {d} = ?', frac: '{a}/{b} + {c}/{b} = ?',
    percent: '{p}% × {base} = ?', eq: '{a}x {sign} {b} = {rhs} → x = ?',
    pow: '{a}^{n} = ?', sqrt: '√{x} = ?', quad: 'x² {sign} {b}x {sign2} {c} = 0. Ildizlar yiğindisi?',
    word: '{n} ta daftar, har biri {p} söm. Jami necha söm?',
    func: 'f(x) = {a}x {sign} {b} bölsa, f({x}) = ?', mean: '{nums} sonlarining örtacha qiymati?',
    prob: 'Qutida {r} qizil, {g} yaşil töp. Qizil olish ehtimolligi?',
    seq: '{seq} ... ketma-ketligining {n}-hadi?', log: 'log_{base}({x}) = ?',
    sin: 'sin {a}° = ?', rect: 'Törtburçak tomonlari {a} va {b}. Yuzi?',
    add: '{a} + {b} = ?', sub: '{a} − {b} = ?', dec: '{a} + {b} = ?',
    ratio: '{a}:{b} = {c}:x → x = ?', perim: 'Törtburçak tomonlari {a} va {b}. Perimetri?',
    speed: '{v} km/soat tezlik bilan {t} soat yurildi. Yöl?'
  },
  kaa: {
    mul: '{a} × {b} = ?', div: '{x} ÷ {d} = ?', frac: '{a}/{b} + {c}/{b} = ?',
    percent: '{p}% × {base} = ?', eq: '{a}x {sign} {b} = {rhs} → x = ?',
    pow: '{a}^{n} = ?', sqrt: '√{x} = ?', quad: 'x² {sign} {b}x {sign2} {c} = 0. Tamırlar jıyındısı?',
    word: '{n} dafter, hárbiri {p} söm. Jámisi ne shem?',
    func: 'f(x) = {a}x {sign} {b} bolsa, f({x}) = ?', mean: '{nums} sanlardıń ortasha mánisi?',
    prob: 'Qutada {r} qızıl, {g} jasıl top. Qızıl alıw itimali?',
    seq: '{seq} ... izbe-izliktiń {n}-hádi?', log: 'log_{base}({x}) = ?',
    sin: 'sin {a}° = ?', rect: 'Tórtmúyesh tárepleri {a} hám {b}. Maydanı?',
    add: '{a} + {b} = ?', sub: '{a} − {b} = ?', dec: '{a} + {b} = ?',
    ratio: '{a}:{b} = {c}:x → x = ?', perim: 'Tórtmúyesh tárepleri {a} hám {b}. Perimetri?',
    speed: '{v} km/saat tezlik penen {t} saat júrildi. Jol?'
  },
  ru: {
    mul: '{a} × {b} = ?', div: '{x} ÷ {d} = ?', frac: '{a}/{b} + {c}/{b} = ?',
    percent: '{p}% × {base} = ?', eq: '{a}x {sign} {b} = {rhs} → x = ?',
    pow: '{a}^{n} = ?', sqrt: '√{x} = ?', quad: 'x² {sign} {b}x {sign2} {c} = 0. Сумма корней?',
    word: '{n} тетрадей по {p} сум. Сколько всего?',
    func: 'f(x) = {a}x {sign} {b}. Найдите f({x}).', mean: 'Среднее чисел: {nums}',
    prob: 'В коробке {r} красных и {g} зелёных. Вероятность красного?',
    seq: '{seq} ... найдите {n}-й член.', log: 'log_{base}({x}) = ?',
    sin: 'sin {a}° = ?', rect: 'Стороны прямоугольника {a} и {b}. Площадь?',
    add: '{a} + {b} = ?', sub: '{a} − {b} = ?', dec: '{a} + {b} = ?',
    ratio: '{a}:{b} = {c}:x → x = ?', perim: 'Стороны прямоугольника {a} и {b}. Периметр?',
    speed: 'Скорость {v} км/ч, время {t} ч. Расстояние?'
  },
  en: {
    mul: '{a} × {b} = ?', div: '{x} ÷ {d} = ?', frac: '{a}/{b} + {c}/{b} = ?',
    percent: '{p}% × {base} = ?', eq: '{a}x {sign} {b} = {rhs} → x = ?',
    pow: '{a}^{n} = ?', sqrt: '√{x} = ?', quad: 'x² {sign} {b}x {sign2} {c} = 0. Sum of roots?',
    word: '{n} notebooks at {p} each. Total?',
    func: 'f(x) = {a}x {sign} {b}. Find f({x}).', mean: 'Mean of {nums}?',
    prob: '{r} red and {g} green balls. Probability of red?',
    seq: '{seq} ... find the {n}th term.', log: 'log_{base}({x}) = ?',
    sin: 'sin {a}° = ?', rect: 'Rectangle sides {a} and {b}. Area?',
    add: '{a} + {b} = ?', sub: '{a} − {b} = ?', dec: '{a} + {b} = ?',
    ratio: '{a}:{b} = {c}:x → x = ?', perim: 'Rectangle sides {a} and {b}. Perimeter?',
    speed: 'Speed {v} km/h, time {t} h. Distance?'
  }
};
function mq(lang, key, vars) { return fmt(MQ[lang]?.[key] ?? MQ.uz[key], vars); }
const ex = (txt) => txt;

function mathQuestion(skill, grade, rng, ui) {
  const lang = ui || currentLang;
  switch (skill) {
    case 'mul_large': {
      const a = ri(rng, 3, 9), b = ri(rng, grade >= 6 ? 1000 : 100, grade >= 6 ? 9999 : 999);
      return inp(mq(lang, 'mul', { a, b }), a * b, ex(`${a} × ${b} = ${a * b}`));
    }
    case 'division': {
      const d = ri(rng, 3, 12), q = ri(rng, 11, 99);
      return inp(mq(lang, 'div', { x: d * q, d }), q, ex(`${d * q} ÷ ${d} = ${q}`));
    }
    case 'fractions': {
      const b = ri(rng, 3, 9), a = ri(rng, 1, b - 1), c = ri(rng, 1, b - 1);
      const num = a + c;
      const right = `${num}/${b}`;
      const others = [...new Set([`${num + 1}/${b}`, `${Math.max(1, num - 1)}/${b}`, `${num}/${b + 1}`])];
      return mc(mq(lang, 'frac', { a, b, c }), textOptions(right, others, rng), ex(`(${a}+${c})/${b} = ${right}`));
    }
    case 'percent': {
      const base = ri(rng, 2, 20) * 20, p = pick([5, 10, 15, 20, 25, 50], rng);
      return inp(mq(lang, 'percent', { p, base }), base * p / 100, ex(`${base} × ${p}/100 = ${base * p / 100}`));
    }
    case 'equations': {
      const x = ri(rng, -12, 25), a = ri(rng, 2, 9), b = ri(rng, -15, 20);
      return inp(mq(lang, 'eq', { a, sign: b >= 0 ? '+' : '−', b: Math.abs(b), rhs: a * x + b }), x,
        ex(`x = (${a * x + b} − ${b}) / ${a} = ${x}`));
    }
    case 'powers': {
      if (rng() < 0.5) { const a = ri(rng, 2, 9), n = ri(rng, 2, 4); return inp(mq(lang, 'pow', { a, n }), a ** n, ex(`${a} × ${a} ... = ${a ** n}`)); }
      const a = ri(rng, 4, 15); return inp(mq(lang, 'sqrt', { x: a * a }), a, ex(`${a} × ${a} = ${a * a}`));
    }
    case 'quadratic': {
      const r1 = ri(rng, -6, 6), r2 = ri(rng, -6, 6), sum = r1 + r2, prod = r1 * r2;
      const b = -sum, c = prod;
      return inp(mq(lang, 'quad', { sign: b >= 0 ? '+' : '−', b: Math.abs(b), sign2: c >= 0 ? '+' : '−', c: Math.abs(c) }), sum,
        ex(`x₁+x₂ = ${sum}`));
    }
    case 'word_problem': {
      const n = ri(rng, 12, 48), p = ri(rng, 15, 95);
      return inp(mq(lang, 'word', { n, p }), n * p, ex(`${n} × ${p} = ${n * p}`));
    }
    case 'functions': {
      const a = ri(rng, 2, 7), b = ri(rng, -9, 12), x = ri(rng, 2, 9);
      return inp(mq(lang, 'func', { a, sign: b >= 0 ? '+' : '−', b: Math.abs(b), x }), a * x + b,
        ex(`${a}×${x} ${b >= 0 ? '+' : '−'} ${Math.abs(b)} = ${a * x + b}`));
    }
    case 'statistics': {
      const nums = Array.from({ length: 5 }, () => ri(rng, 4, 40));
      const total = nums.reduce((s, n) => s + n, 0);
      return inp(mq(lang, 'mean', { nums: nums.join(', ') }), Number((total / 5).toFixed(2)), ex(`${total} ÷ 5 = ${total / 5}`));
    }
    case 'probability': {
      const r = ri(rng, 2, 8), g = ri(rng, 2, 8);
      return mc(mq(lang, 'prob', { r, g }),
        [`${r}/${r + g}`, `${g}/${r + g}`, `${r}/${g}`, `${r + g}/${r}`].map((v, i) => ({ label: v, correct: i === 0 })),
        ex(`${r}/${r + g}`));
    }
    case 'sequences': {
      const a = ri(rng, 2, 15), d = ri(rng, 2, 9), n = ri(rng, 6, 12);
      const seq = [a, a + d, a + 2 * d];
      return inp(mq(lang, 'seq', { seq: seq.join(', '), n }), a + (n - 1) * d, ex(`aₙ = a₁ + (n−1)d`));
    }
    case 'logarithms': {
      const base = pick([2, 3, 5], rng), n = ri(rng, 2, 5);
      return inp(mq(lang, 'log', { base, x: base ** n }), n, ex(`${base}^${n} = ${base ** n}`));
    }
    case 'trigonometry': {
      const a = pick([30, 45, 60], rng);
      const vals = { 30: ['1/2', '√3/2'], 45: ['√2/2', '√2/2'], 60: ['√3/2', '1/2'] };
      return mc(mq(lang, 'sin', { a }),
        [vals[a][0], vals[a][1], '1', '0'].map((v, i) => ({ label: v, correct: i === 0 })), ex(`sin ${a}° = ${vals[a][0]}`));
    }
    case 'geometry': {
      const a = ri(rng, 4, 25), b = ri(rng, 3, 18);
      return mc(mq(lang, 'rect', { a, b }),
        [`${a * b}`, `${a + b}`, `${2 * (a + b)}`, `${a * b / 2}`].map((v, i) => ({ label: v, correct: i === 0 })), ex(`S = a × b = ${a * b}`));
    }
    case 'add_large': {
      const a = ri(rng, 120, 900), b = ri(rng, 80, 700);
      return inp(mq(lang, 'add', { a, b }), a + b, ex(`${a} + ${b} = ${a + b}`));
    }
    case 'sub_large': {
      const a = ri(rng, 400, 1200), b = ri(rng, 80, a - 20);
      return inp(mq(lang, 'sub', { a, b }), a - b, ex(`${a} − ${b} = ${a - b}`));
    }
    case 'decimals': {
      const a = ri(rng, 12, 89) / 10, b = ri(rng, 11, 78) / 10;
      return inp(mq(lang, 'dec', { a: a.toFixed(1), b: b.toFixed(1) }), Number((a + b).toFixed(1)), ex(`${a} + ${b} = ${(a + b).toFixed(1)}`));
    }
    case 'ratios': {
      const k = ri(rng, 2, 9), a = ri(rng, 2, 7), b = ri(rng, 2, 7), c = a * k;
      const x = b * k;
      return inp(mq(lang, 'ratio', { a, b, c }), x, ex(`${a}:${b} = ${c}:x → x = ${b}×${k} = ${x}`));
    }
    case 'area': {
      const a = ri(rng, 4, 24), b = ri(rng, 3, 18);
      return inp(mq(lang, 'rect', { a, b }), a * b, ex(`S = ${a} × ${b} = ${a * b}`));
    }
    case 'perimeter': {
      const a = ri(rng, 4, 24), b = ri(rng, 3, 18);
      return inp(mq(lang, 'perim', { a, b }), 2 * (a + b), ex(`P = 2×(${a}+${b}) = ${2 * (a + b)}`));
    }
    case 'speed': {
      const v = ri(rng, 20, 90), t = ri(rng, 2, 9);
      return inp(mq(lang, 'speed', { v, t }), v * t, ex(`S = ${v} × ${t} = ${v * t} km`));
    }
    default: return mathQuestion(pick(['mul_large', 'percent', 'equations', 'powers', 'statistics'], rng), grade, rng, lang);
  }
}

function misspell(w, rng) {
  if (w.length < 3) return w + 'x';
  const i = ri(rng, 0, w.length - 2);
  return w.slice(0, i) + w[i + 1] + w[i] + w.slice(i + 2);
}

function languageQuestion(subject, skill, rng, ui) {
  const lang = SUBJ_LANG[subject] || 'uz';
  const uiLang = UI_LANG[ui] || 'uz';
  const idx = ri(rng, 0, WORDS.length - 1);
  const w = WORDS[idx];
  const forms = w[lang] || w.uz;
  const uiForms = w[uiLang] || w.uz;
  switch (skill) {
    case 'spelling':
      return mc(tr(uiLang, 'spelling_q'), textOptions(forms[0], [misspell(forms[0], rng), misspell(forms[0], rng), forms[2]], rng), ex(forms[0]));
    case 'synonyms':
      return mc(tr(uiLang, 'synonym_q', { word: forms[0] }), textOptions(forms[1], [forms[2], forms[3], pick(WORDS, rng)[lang]?.[0] || '—'], rng), ex(`${forms[0]} = ${forms[1]}`));
    case 'grammar': {
      const s = pick(SENTENCES[lang] || SENTENCES.uz, rng);
      const ans = s.find((x) => WORDS.some((o) => (o[lang] || o.uz)[0] === x)) || forms[0];
      const others = shuffle(WORDS.filter((o) => (o[lang] || o.uz)[0] !== ans), rng).slice(0, 3).map((o) => (o[lang] || o.uz)[0]);
      return mc(`${tr(uiLang, 'grammar_q')}\n${s.join(' ')}`, textOptions(ans, others, rng), ex(`${s.join(' ')} → ${ans}`));
    }
    case 'translation':
      return mc(tr(uiLang, 'translation_q', { word: forms[0], to: tr(uiLang, `lang_${uiLang}`) }),
        textOptions(uiForms[0], shuffle(WORDS.filter((o) => o !== w), rng).slice(0, 3).map((o) => (o[uiLang] || o.uz)[0]), rng), ex(`${forms[0]} = ${uiForms[0]}`));
    case 'sentence_order': {
      const s = (SENTENCES[lang] || SENTENCES.uz)[ri(rng, 0, (SENTENCES[lang] || SENTENCES.uz).length - 1)];
      const right = s.join(' ');
      const opts = [right, shuffle(s, rng).join(' '), shuffle(s, rng).join(' '), shuffle(s, rng).join(' ')];
      return mc(tr(uiLang, 'order_q'), textOptions(right, opts.slice(1), rng), ex(right));
    }
    case 'antonyms': {
      const pairs = ANTONYMS[lang] || ANTONYMS.uz;
      const [word, right] = pick(pairs, rng);
      const others = pairs.filter((p) => p[1] !== right).map((p) => p[1]);
      const prompt = `${tr(uiLang, 'antonyms')}: «${word}» → ?`;
      return mc(prompt, textOptions(right, others.slice(0, 3), rng), ex(`${word} ↔ ${right}`));
    }
    case 'punctuation': {
      const rows = PUNCT[lang] || PUNCT.uz;
      const [sentence, right] = pick(rows, rng);
      const marks = ['.', '?', '!', ','];
      return mc(`${tr(uiLang, 'punctuation')}: ${sentence}__`,
        marks.map((m) => ({ label: m, correct: m === right })), ex(`${sentence}${right}`));
    }
    case 'word_formation': {
      const rows = FORMS[lang] || FORMS.uz;
      const [base, right] = pick(rows, rng);
      const others = rows.filter((r) => r[1] !== right).map((r) => r[1]);
      return mc(`${tr(uiLang, 'word_formation')}: ${base} → ?`,
        textOptions(right, others, rng), ex(`${base} → ${right}`));
    }
    default: return languageQuestion(subject, 'spelling', rng, ui);
  }
}

function logicQuestion(skill, rng, ui) {
  const uiLang = UI_LANG[ui] || 'uz';
  switch (skill) {
    case 'odd_one': {
      const w = pick(WORDS, rng);
      return mc(tr(uiLang, 'odd_one'),
        textOptions(w[uiLang]?.[2] || w.uz[2], [w[uiLang]?.[0] || w.uz[0], w[uiLang]?.[1] || w.uz[1], pick(WORDS, rng)[uiLang]?.[0] || 'kitob'], rng), ex(w[uiLang]?.[2] || w.uz[2]));
    }
    case 'analogy': {
      const a = WORDS[ri(rng, 0, 5)], b = WORDS[ri(rng, 6, 11)];
      const A = a[uiLang]?.[0] || a.uz[0], B = b[uiLang]?.[0] || b.uz[0];
      return mc(`${A} : ${a[uiLang]?.[1] || a.uz[1]} :: ${B} : ?`,
        textOptions(b[uiLang]?.[1] || b.uz[1], [B, A, pick(WORDS, rng)[uiLang]?.[0] || '—'], rng), ex(`${B} → ${b[uiLang]?.[1] || b.uz[1]}`));
    }
    case 'logic_grid': {
      const a = ri(rng, 2, 6), b = ri(rng, 2, 6);
      return inp(`${a} × ${b} = ?`, a * b, ex(`${a} × ${b} = ${a * b}`));
    }
    case 'number_sequence': {
      const start = ri(rng, 2, 12), step = ri(rng, 2, 7);
      const seq = [start, start + step, start + 2 * step, start + 3 * step];
      return inp(tr(uiLang, 'seq_q', { seq: seq.join(' → ') }), start + 4 * step, ex(`+${step}`));
    }
    case 'matrix_logic': {
      const a = ri(rng, 2, 8), b = ri(rng, 2, 8);
      const grid = `${a} ${b}\n${b * 2} ?`;
      const right = a * 2;
      return mc(`${tr(uiLang, 'matrix_q')}\n${grid}`,
        numOptions(right, rng), ex(`${a}×2 = ${right}`));
    }
    case 'counting': {
      const glyphs = ['●', '▲', '■', '★'];
      const items = Array.from({ length: ri(rng, 4, 9) }, () => pick(glyphs, rng));
      const right = items.filter((x) => x === '●').length;
      return inp(tr(uiLang, 'count_q', { items: items.join(' ') }), right, ex(`● = ${right}`));
    }
    case 'pattern_shape': {
      const cycle = ['●', '▲', '■'];
      const start = ri(rng, 0, 2);
      const seq = [0, 1, 2, 3].map((i) => cycle[(start + i) % 3]);
      const right = cycle[(start + 4) % 3];
      return mc(`${tr(uiLang, 'shape_q')}\n${seq.join(' ')} → ?`,
        cycle.map((v) => ({ label: v, correct: v === right })), ex(`${seq.join(' ')} → ${right}`));
    }
    default: {
      const start = ri(rng, 1, 6), step = ri(rng, 2, 5);
      const seq = [start, start + step, start + 2 * step, start + 3 * step];
      return inp(`${seq.join(' → ')} → ?`, start + 4 * step, ex(`+${step}`));
    }
  }
}

export function makeQuestion(item, rng = Math.random, ui = currentLang) {
  const { subject, skill, grades } = item.config || item;
  if (subject === 'math') return mathQuestion(skill, grades?.[grades.length - 1] || 7, rng, ui);
  if (subject === 'logic') return logicQuestion(skill, rng, ui);
  return languageQuestion(subject, skill, rng, ui);
}

export function makeQuestions(item, count = 6, rng = Math.random, ui = currentLang) {
  const list = [];
  for (let i = 0; i < count; i++) list.push(makeQuestion(item, rng, ui));
  return list;
}

const SCENE = {
  uz: {
    subtitle: `Boğcha · Alifbo, öyin, rang · ${KIDS_COUNT} öyin`,
    short: `Boğcha · ${KIDS_COUNT} öyin`,
    hero1: 'Yangi alifbo va fanlar',
    hero2: 'bilan Boğcha öyinlari',
    about: '28 harf (Ç, Ğ, Ö, Ş) va ʼ tutuq belgisi, barcha fanlar yangi özbek alifbosida.',
    sections: 'Bölimlar',
    sectionsRows: 'Ona tili va adabiyot|Matematika|Tillar|Mantiq va öyinlar',
    chapter1: '1-qism · Fanlar',
    chapter1Body: 'Har bir sinf uchun misol, yechim va bosqichli tushuntirish beriladi.',
    quote1: '“Tushunib örganilgan bilim bir umr esda qoladi.”',
    quote1Note: '— VESNA KIDS öquv daftari',
    stats: `${KIDS_COUNT} ta öyin`,
    statsRows: `Matematika|Ona tili va tillar|Mantiq|PvP duellar`,
    mathBody: 'Hisob, geometriya, nisbat va tezlik masalalari yechimlari bilan.',
    chapter2: '2-qism · Amaliyot',
    chapter2Body: 'Har bir savoldan keyin töğri javob va qisqa yechim körsatiladi.',
    signs: 'Yangi belgilar',
    signsRows: 'Ğ ğ — Ğoz, Toğ|Ö ö — Ördak, Öt|Ş ş — Şer, Şamol|Ç ç — Çoynak, Çana|ʼ — Maʼno, Aʼlo',
    quote2: '“Har kuni besh daqiqa öyin — mustahkam bilim kaliti.”',
    quote2Note: '— VESNA KIDS',
    start: 'Boshlash',
    startRows: `Alifbo va öyinlar|${KIDS_COUNT} ta öyin|Boğcha`,
    credit: 'Raxmanaliyev tomonidan tayyorlangan'
  },
  kaa: {
    subtitle: `Bala baqsha · Alifbo, öyin, rang · ${KIDS_COUNT} oyın`,
    short: `Bala baqsha · ${KIDS_COUNT} oyın`,
    hero1: 'Jańa álippe hám pánler',
    hero2: 'menen Bala baqsha oyınları',
    about: '28 hárip (Ç, Ğ, Ö, Ş) hám ʼ tutuq belgisi, barlıq pánler jańa ózbek álippesinde.',
    sections: 'Bólimler',
    sectionsRows: 'Ana tili hám ádebiyat|Matematika|Tiller|Mantiq hám oyınlar',
    chapter1: '1-bólim · Pánler',
    chapter1Body: 'Hár klass ushın másele, sheshiw hám basqıshlı túsiniktirme beriledi.',
    quote1: '“Túsiniw menen úyrengen bilim ómirlik esde qaladı.”',
    quote1Note: '— VESNA KIDS oqıw daftarı',
    stats: `${KIDS_COUNT} oyın`,
    statsRows: `Matematika|Ana tili hám tiller|Mantiq|PvP dueller`,
    mathBody: 'Esaplaw, geometriya, nisbet hám tezlik máseleleri sheshiwi menen.',
    chapter2: '2-bólim · Ámeliyat',
    chapter2Body: 'Hár sorawdan keyin durıs juwap hám qısqa sheshiw kórsetiledi.',
    signs: 'Jańa belgiler',
    signsRows: 'Ğ ğ — Ğoz, Toğ|Ö ö — Ördak, Öt|Ş ş — Şer, Şamol|Ç ç — Çoynak, Çana|ʼ — Maʼno, Aʼlo',
    quote2: '“Hár kúni bes minut oyın — berik bilim açqıshı.”',
    quote2Note: '— VESNA KIDS',
    start: 'Baslaw',
    startRows: `Álippe hám oyınlar|${KIDS_COUNT} oyın|Bala baqsha`,
    credit: 'Raxmanaliyev tárepinen tayarlanǵan'
  },
  ru: {
    subtitle: `Дошкольники · Алфавит, игры, цвета · ${KIDS_COUNT} игр`,
    short: `Дошкольники · ${KIDS_COUNT} игр`,
    hero1: 'Новый алфавит и предметы',
    hero2: 'для Дошкольникиа',
    about: '28 букв (Ç, Ğ, Ö, Ş) и знак ʼ, все предметы на новом узбекском алфавите.',
    sections: 'Разделы',
    sectionsRows: 'Узбекский и литература|Математика|Языки|Логика и игры',
    chapter1: 'Часть 1 · Предметы',
    chapter1Body: 'Для каждого класса — задача, решение и пошаговое объяснение.',
    quote1: '«Знание, понятое через понимание, остаётся на всю жизнь.»',
    quote1Note: '— Тетрадь VESNA KIDS',
    stats: `${KIDS_COUNT} игр`,
    statsRows: `Математика|Узбекский и языки|Логика|PvP-дуэли`,
    mathBody: 'Счёт, геометрия, отношения и скорость с решением каждой задачи.',
    chapter2: 'Часть 2 · Практика',
    chapter2Body: 'После каждого вопроса показываются верный ответ и краткое решение.',
    signs: 'Новые буквы',
    signsRows: 'Ğ ğ — Ğoz, Toğ|Ö ö — Ördak, Öt|Ş ş — Şer, Şamol|Ç ç — Çoynak, Çana|ʼ — Maʼno, Aʼlo',
    quote2: '«Пять минут практики каждый день — ключ к прочным знаниям.»',
    quote2Note: '— VESNA KIDS',
    start: 'Начать',
    startRows: `Алфавит и игры|${KIDS_COUNT} игр|Дошкольники`,
    credit: 'Подготовил Рахманалиев'
  },
  en: {
    subtitle: `Kids · Alphabet, games, color · ${KIDS_COUNT} games`,
    short: `Kids · ${KIDS_COUNT} games`,
    hero1: 'New alphabet and subjects',
    hero2: 'for little explorers',
    about: '28 letters (Ç, Ğ, Ö, Ş) plus the ʼ tutuq sign, and all subjects in the new Uzbek alphabet.',
    sections: 'Sections',
    sectionsRows: 'Uzbek & literature|Maths|Languages|Logic & games',
    chapter1: 'Part 1 · Subjects',
    chapter1Body: 'Every grade gets a problem, solution and step-by-step explanation.',
    quote1: '“Knowledge learned with understanding stays for life.”',
    quote1Note: '— VESNA KIDS notebook',
    stats: `${KIDS_COUNT} games`,
    statsRows: `Maths|Uzbek & languages|Logic|PvP duels`,
    mathBody: 'Arithmetic, geometry, ratios and speed with every solution shown.',
    chapter2: 'Part 2 · Practice',
    chapter2Body: 'Each question ends with the correct answer and a short solution.',
    signs: 'New letters',
    signsRows: 'Ğ ğ — Ğoz, Toğ|Ö ö — Ördak, Öt|Ş ş — Şer, Şamol|Ç ç — Çoynak, Çana|ʼ — Maʼno, Aʼlo',
    quote2: '“Five minutes of practice a day is the key to lasting knowledge.”',
    quote2Note: '— VESNA KIDS',
    start: 'Start',
    startRows: `Alphabet & games|${KIDS_COUNT} games|Kids`,
    credit: 'Prepared by Rakhmanaliyev'
  }
};
export function st(key, vars) {
  const v = SCENE[getContentLang()]?.[key] ?? SCENE.uz[key] ?? key;
  return fmt(v, vars);
}

export const UI_KEYS = Object.keys(S.uz);
export function tFor(lang, key, vars) { return tr(lang, key, vars); }
