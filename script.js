/* ==========================================================================
   CONTENT — ВСЕ ТЕКСТЫ, ПРОЕКТЫ, ОТЗЫВЫ И КОНТАКТЫ МЕНЯЮТСЯ ЗДЕСЬ
   ========================================================================== */
const CONTENT = {
  word: 'PORTFOLIO',

  topBar: {
    left: 'ВЕБ-ДИЗАЙНЕР · ХУДЖАНД',
    right: 'ПОРТФОЛИО'
  },

  hero: {
    headline: [
      'ДЕЛАЮ САЙТЫ ДЛЯ САЛОНОВ,',
      'ЧЕРЕЗ КОТОРЫЕ КЛИЕНТЫ',
      'ЗАПИСЫВАЮТСЯ САМИ'
    ],
    ctaText: 'ОТКРЫТ ДЛЯ ЗАКАЗОВ',
    ctaLink: 'https://t.me/dilovap',
    signature: 'Dilovar',
    paragraph: 'Привет! Я делаю красивые сайты для салонов красоты и барбершопов: с ценами, работами мастеров и онлайн-записью без переписки в директе.',
    location: ['ХУДЖАНД, ТАДЖИКИСТАН', 'РАБОТАЮ ОНЛАЙН']
  },

  projects: {
    title: 'МОИ РАБОТЫ',
    viewAllText: 'СМОТРЕТЬ ВСЕ',
    viewAllLink: '#',
    items: [
      {
        number: '01',
        title: 'САЛОН КРАСОТЫ',
        subtitle: 'Сайт + онлайн-запись',
        tags: ['САЙТ', 'ЗАПИСЬ', 'МОБИЛЬНЫЙ'],
        image: 'images/project-1.jpg',
        url: 'https://demo-sait.netlify.app/'
      },
      {
        number: '02',
        title: 'БАРБЕРШОП',
        subtitle: 'Лендинг с ценами',
        tags: ['ЛЕНДИНГ', 'ДИЗАЙН', 'ЗАПИСЬ'],
        image: 'images/project-2.jpg',
        url: 'https://lola-beauty-home.vercel.app'
      },
      {
        number: '03',
        title: 'СТУДИЯ МАНИКЮРА',
        subtitle: 'Сайт-визитка',
        tags: ['ВИЗИТКА', 'INSTAGRAM', 'ДИЗАЙН'],
        image: 'images/project-3.jpg',
        url: 'https://fademade-tj.netlify.app/'
      }
    ]
  },

  process: {
    title: 'КАК Я РАБОТАЮ',
    steps: [
      { number: '01', title: 'ЗНАКОМСТВО', desc: 'Узнаю о вашем салоне, услугах и мастерах' },
      { number: '02', title: 'ИДЕЯ', desc: 'Продумываю, какие страницы и функции нужны' },
      { number: '03', title: 'ДИЗАЙН', desc: 'Делаю дизайн в стиле вашего салона' },
      { number: '04', title: 'СОЗДАНИЕ', desc: 'Собираю сайт и подключаю онлайн-запись' },
      { number: '05', title: 'ЗАПУСК', desc: 'Проверяю на телефонах и запускаю сайт' }
    ],
    quote: ['Красивый сайт,', 'который приводит', 'клиентов']
  },

  services: {
    title: 'ЧТО Я ДЕЛАЮ',
    footnote: '& И ДРУГОЕ ПОД ВАШ САЛОН',
    items: [
      { icon: 'calendar', name: 'ОНЛАЙН-ЗАПИСЬ' },
      { icon: 'tag', name: 'ПРАЙС-ЛИСТ' },
      { icon: 'image', name: 'ГАЛЕРЕЯ РАБОТ' },
      { icon: 'users', name: 'СТРАНИЦЫ МАСТЕРОВ' },
      { icon: 'instagram', name: 'ССЫЛКА ДЛЯ INSTAGRAM' },
      { icon: 'pin', name: 'КАРТА И КОНТАКТЫ' },
      { icon: 'star', name: 'ОТЗЫВЫ КЛИЕНТОВ' },
      { icon: 'phone', name: 'МОБИЛЬНАЯ ВЕРСИЯ' }
    ]
  },

  showTestimonials: false,
  testimonials: {
    title: 'ОТЗЫВЫ',
    items: [
      { text: 'Здесь будет отзыв клиента', name: 'Имя клиента', role: 'Салон / Барбершоп' },
      { text: 'Здесь будет отзыв клиента', name: 'Имя клиента', role: 'Салон / Барбершоп' },
      { text: 'Здесь будет отзыв клиента', name: 'Имя клиента', role: 'Салон / Барбершоп' }
    ]
  },

  contact: {
    title: 'ДАВАЙТЕ СОЗДАДИМ',
    script: 'что-то красивое',
    subtitle: ['СЕЙЧАС ПРИНИМАЮ', 'НОВЫЕ ЗАКАЗЫ'],
    paragraph: 'Напишите — покажу, как может выглядеть сайт именно вашего салона',
    ctaText: 'НАПИСАТЬ МНЕ',
    ctaLink: 'https://t.me/dilovap',
    list: [
      { icon: 'telegram', label: '@dilovap', link: 'https://t.me/dilovap' },
      { icon: 'instagram', label: '@mansurov.code', link: 'https://instagram.com/mansurov.code' },
      { icon: 'pin', label: 'Худжанд, Таджикистан', link: null }
    ]
  },

  footer: {
    text: 'СПАСИБО, ЧТО ЗАГЛЯНУЛИ'
  },

  images: {
    me: 'images/me.png',
    flower1: 'images/flower-1.png',
    flower2: 'images/flower-2.png',
    flower3: 'images/flower-3.png',
    contact: 'images/me.png'
  }
};

/* ==========================================================================
   ICONS — INLINE SVG (без эмодзи)
   ========================================================================== */
const ICONS = {
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3.5" y="5" width="17" height="16" rx="1"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/><path d="M8.5 13.5l2 2 4-4"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12.5 3.5h5a2 2 0 0 1 2 2v5a2 2 0 0 1-.6 1.4l-8 8a2 2 0 0 1-2.8 0l-5-5a2 2 0 0 1 0-2.8l8-8a2 2 0 0 1 1.4-.6z"/><circle cx="16.2" cy="7.8" r="1.2"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3.5" y="4.5" width="17" height="15" rx="1"/><circle cx="8.5" cy="9.5" r="1.4"/><path d="M20 15l-5-5-8.5 8.5"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="8.5" r="2.4"/><path d="M15.5 14.3c2.6.4 4.5 2.7 4.5 5.7"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="6.5" y="2.5" width="11" height="19" rx="2"/><path d="M10.5 18.5h3"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M21 4.5L3 11.5l6 2.3m12-9.3l-3.3 15.8-8.7-6.5m12-9.3L9 13.8m0 0v5.7l3-3.3"/></svg>'
};

const SILHOUETTE_SVG = `
<svg viewBox="0 0 300 380" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="380" fill="#1a1414"/>
  <ellipse cx="150" cy="140" rx="62" ry="74" fill="#241c1c"/>
  <path d="M60 380c0-70 40-120 90-120s90 50 90 120z" fill="#241c1c"/>
</svg>`;

function flowerSvg(variant) {
  const colors = ['#8E2A35', '#6e1f28', '#5a1920'];
  if (variant === 2) {
    return `<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.9">
        <ellipse cx="80" cy="60" rx="30" ry="42" fill="${colors[0]}" opacity="0.55" transform="rotate(10 80 60)"/>
        <ellipse cx="55" cy="85" rx="26" ry="38" fill="${colors[1]}" opacity="0.6" transform="rotate(-25 55 85)"/>
        <ellipse cx="100" cy="95" rx="28" ry="40" fill="${colors[2]}" opacity="0.6" transform="rotate(35 100 95)"/>
        <circle cx="80" cy="85" r="14" fill="#2a1013"/>
      </g>
    </svg>`;
  }
  if (variant === 3) {
    return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.9">
        <ellipse cx="60" cy="50" rx="22" ry="30" fill="${colors[0]}" opacity="0.6"/>
        <ellipse cx="40" cy="65" rx="18" ry="26" fill="${colors[1]}" opacity="0.6" transform="rotate(-30 40 65)"/>
        <ellipse cx="78" cy="68" rx="19" ry="27" fill="${colors[2]}" opacity="0.6" transform="rotate(28 78 68)"/>
        <circle cx="58" cy="60" r="9" fill="#2a1013"/>
      </g>
    </svg>`;
  }
  return `<svg viewBox="0 0 180 220" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.9">
      <ellipse cx="90" cy="90" rx="38" ry="55" fill="${colors[0]}" opacity="0.5" transform="rotate(-8 90 90)"/>
      <ellipse cx="55" cy="120" rx="32" ry="48" fill="${colors[1]}" opacity="0.55" transform="rotate(-35 55 120)"/>
      <ellipse cx="120" cy="130" rx="34" ry="50" fill="${colors[2]}" opacity="0.55" transform="rotate(30 120 130)"/>
      <ellipse cx="90" cy="150" rx="26" ry="40" fill="${colors[1]}" opacity="0.5" transform="rotate(4 90 150)"/>
      <circle cx="90" cy="118" r="16" fill="#2a1013"/>
    </g>
  </svg>`;
}

/* ==========================================================================
   HELPERS
   ========================================================================== */
function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Пытается загрузить реальное изображение; если файла нет — оставляет плейсхолдер */
function trySwapImage(container, src, altText) {
  if (!container) return;
  const probe = new Image();
  probe.onload = () => {
    container.innerHTML = '';
    const img = document.createElement('img');
    img.src = src;
    img.alt = altText || '';
    img.loading = 'lazy';
    container.appendChild(img);
    container.classList.add('has-image');
  };
  probe.onerror = () => { /* placeholder already in DOM, ничего не делаем */ };
  probe.src = src;
}

/* ==========================================================================
   RENDER: TOP BAR / HERO TEXT
   ========================================================================== */
function renderTopBar() {
  document.querySelector('.topbar-left').textContent = CONTENT.topBar.left;
  document.querySelector('.topbar-right').textContent = CONTENT.topBar.right;
}

function renderHeroWord() {
  const wordEl = document.getElementById('heroWord');
  const letters = CONTENT.word.split('');
  wordEl.innerHTML = letters
    .map((ch, i) => `<span class="letter" style="--i:${i}">${ch}</span>`)
    .join('');
}

function renderHeroText() {
  document.getElementById('heroHeadline').innerHTML = CONTENT.hero.headline
    .map(line => escapeHtml(line))
    .join('<br>');

  const cta = document.getElementById('heroCta');
  cta.href = CONTENT.hero.ctaLink;
  document.getElementById('heroCtaText').textContent = CONTENT.hero.ctaText;

  document.getElementById('heroSignature').textContent = CONTENT.hero.signature;
  document.getElementById('heroParagraph').textContent = CONTENT.hero.paragraph;
  document.getElementById('heroLocation').innerHTML = CONTENT.hero.location
    .map(line => escapeHtml(line))
    .join('<br>');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ==========================================================================
   RENDER: PROJECTS
   ========================================================================== */
function renderProjects() {
  document.getElementById('projectsTitle').textContent = CONTENT.projects.title;
  document.getElementById('projectsViewAllText').textContent = CONTENT.projects.viewAllText;
  document.getElementById('projectsViewAll').href = CONTENT.projects.viewAllLink;

  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  CONTENT.projects.items.forEach(item => {
    const card = el('a', 'project-card');
    card.href = item.url || '#';
    if (item.url && item.url !== '#') {
      card.target = '_blank';
      card.rel = 'noopener';
    }

    const head = el('div', 'project-head');
    head.appendChild(el('span', 'project-number', item.number));
    head.appendChild(el('span', 'project-title', escapeHtml(item.title)));
    card.appendChild(head);

    card.appendChild(el('p', 'project-subtitle', escapeHtml(item.subtitle)));

    const frame = el('div', 'project-frame');
    const mock = el('div', 'project-mock');
    mock.appendChild(el('div', 'mock-menu', '<span></span><span></span><span></span>'));
    mock.appendChild(el('div', 'mock-heading', escapeHtml(item.title)));
    mock.appendChild(el('div', 'mock-btn', 'ПОДРОБНЕЕ'));
    frame.appendChild(mock);
    card.appendChild(frame);
    trySwapImage(frame, item.image, item.title);

    const tags = el('div', 'project-tags');
    item.tags.forEach(t => tags.appendChild(el('span', null, escapeHtml(t))));
    card.appendChild(tags);

    grid.appendChild(card);
  });
}

/* ==========================================================================
   RENDER: PROCESS
   ========================================================================== */
function renderProcess() {
  document.getElementById('processTitle').textContent = CONTENT.process.title;

  const list = document.getElementById('processSteps');
  list.innerHTML = '';
  CONTENT.process.steps.forEach(step => {
    const li = el('li', 'process-step');
    li.appendChild(el('span', 'process-step-num', step.number));
    const textWrap = el('div');
    textWrap.appendChild(el('div', 'process-step-title', escapeHtml(step.title)));
    textWrap.appendChild(el('div', 'process-step-desc', escapeHtml(step.desc)));
    li.appendChild(textWrap);
    list.appendChild(li);
  });

  document.getElementById('processQuote').innerHTML = CONTENT.process.quote
    .map(line => escapeHtml(line))
    .join('<br>');

  const arcFlower = document.getElementById('arcFlower');
  arcFlower.innerHTML = flowerSvg(3);
  trySwapImage(arcFlower, CONTENT.images.flower3, '');
}

/* ==========================================================================
   RENDER: SERVICES
   ========================================================================== */
function renderServices() {
  document.getElementById('servicesTitle').textContent = CONTENT.services.title;
  document.getElementById('servicesFootnote').textContent = CONTENT.services.footnote;

  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = '';
  CONTENT.services.items.forEach(item => {
    const tile = el('div', 'service-tile');
    const icon = el('div', 'service-icon', ICONS[item.icon] || '');
    tile.appendChild(icon);
    tile.appendChild(el('span', 'service-name', escapeHtml(item.name)));
    grid.appendChild(tile);
  });
}

/* ==========================================================================
   RENDER: TESTIMONIALS
   ========================================================================== */
function renderTestimonials() {
  const cell = document.getElementById('testimonialsCell');
  const divider = document.getElementById('testimonialsDivider');
  if (!CONTENT.showTestimonials) {
    cell.style.display = 'none';
    if (divider) divider.style.display = 'none';
    return;
  }

  document.getElementById('testimonialsTitle').textContent = CONTENT.testimonials.title;
  const grid = document.getElementById('testimonialsGrid');
  grid.innerHTML = '';

  CONTENT.testimonials.items.forEach(t => {
    const card = el('div', 'testimonial');
    card.appendChild(el('div', 'testimonial-quote-mark', '&ldquo;'));
    card.appendChild(el('p', 'testimonial-text', escapeHtml(t.text)));

    const footer = el('div', 'testimonial-footer');
    footer.appendChild(el('div', 'testimonial-avatar', initials(t.name)));
    const names = el('div');
    names.appendChild(el('div', 'testimonial-name', escapeHtml(t.name)));
    names.appendChild(el('div', 'testimonial-role', escapeHtml(t.role)));
    footer.appendChild(names);
    card.appendChild(footer);

    grid.appendChild(card);
  });
}

/* ==========================================================================
   RENDER: CONTACT
   ========================================================================== */
function renderContact() {
  document.getElementById('contactTitle').textContent = CONTENT.contact.title;
  document.getElementById('contactScript').textContent = CONTENT.contact.script;
  document.getElementById('contactSubtitle').innerHTML = CONTENT.contact.subtitle
    .map(line => escapeHtml(line))
    .join('<br>');
  document.getElementById('contactParagraph').textContent = CONTENT.contact.paragraph;

  const cta = document.getElementById('contactCta');
  cta.href = CONTENT.contact.ctaLink;
  document.getElementById('contactCtaText').textContent = CONTENT.contact.ctaText;

  const list = document.getElementById('contactList');
  list.innerHTML = '';
  CONTENT.contact.list.forEach(item => {
    const li = el('li');
    const inner = item.link ? el('a') : el('span', 'plain');
    if (item.link) {
      inner.href = item.link;
      inner.target = '_blank';
      inner.rel = 'noopener';
    }
    inner.appendChild(el('span', 'contact-icon', ICONS[item.icon] || ''));
    inner.appendChild(el('span', null, escapeHtml(item.label)));
    li.appendChild(inner);
    list.appendChild(li);
  });

  const photo = document.getElementById('contactPhoto');
  photo.innerHTML = SILHOUETTE_SVG;
  trySwapImage(photo, CONTENT.images.contact, 'Диловар');

  const flower = document.getElementById('contactFlower');
  flower.innerHTML = flowerSvg(3);
}

/* ==========================================================================
   RENDER: FOOTER / MOBILE CTA
   ========================================================================== */
function renderFooter() {
  document.getElementById('footerText').textContent = CONTENT.footer.text;
}

function renderMobileCta() {
  const btn = document.getElementById('mobileCta');
  btn.href = CONTENT.hero.ctaLink;
}

/* ==========================================================================
   HERO VISUALS: PHOTO + FLOWERS + PARALLAX
   ========================================================================== */
function renderHeroVisuals() {
  const photo = document.getElementById('heroPhoto');
  photo.innerHTML = SILHOUETTE_SVG;
  trySwapImage(photo, CONTENT.images.me, 'Диловар');

  const flowerLeft = document.getElementById('flowerLeft');
  flowerLeft.innerHTML = flowerSvg(1);
  trySwapImage(flowerLeft, CONTENT.images.flower1, '');

  const flowerRight = document.getElementById('flowerRight');
  flowerRight.innerHTML = flowerSvg(2);
  trySwapImage(flowerRight, CONTENT.images.flower2, '');
}

function revealHeroPhoto() {
  const photo = document.getElementById('heroPhoto');
  const letterCount = CONTENT.word.length;
  const delay = prefersReducedMotion() ? 0 : letterCount * 45 + 500;
  setTimeout(() => photo.classList.add('is-visible'), delay);
}

function setupParallax() {
  if (prefersReducedMotion()) return;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!canHover) return;

  const stage = document.getElementById('heroStage');
  const photo = document.getElementById('heroPhoto');
  const flowerLeft = document.getElementById('flowerLeft');
  const flowerRight = document.getElementById('flowerRight');

  let raf = null;
  stage.addEventListener('mousemove', (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      photo.style.transform = `translateX(calc(-50% + ${x * 10}px)) translateY(${y * 8}px)`;
      flowerLeft.style.transform = `translate(${x * -6}px, ${y * -6}px)`;
      flowerRight.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
      raf = null;
    });
  });

  stage.addEventListener('mouseleave', () => {
    photo.style.transform = 'translateX(-50%)';
    flowerLeft.style.transform = '';
    flowerRight.style.transform = '';
  });
}

/* ==========================================================================
   INIT
   ========================================================================== */
function init() {
  renderTopBar();
  renderHeroWord();
  renderHeroVisuals();
  renderHeroText();
  renderProjects();
  renderProcess();
  renderServices();
  renderTestimonials();
  renderContact();
  renderFooter();
  renderMobileCta();
  revealHeroPhoto();
  setupParallax();
}

document.addEventListener('DOMContentLoaded', init);
