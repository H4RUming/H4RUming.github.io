// 1) 타임라인 줄 펼치기  2) 필터  3) 관련 줄 강조  4) 상세 패널(#slug)  5) 구조도 탭

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------- 1. 펼치기 ---------- */
$$('.row-head[aria-expanded]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    const body = document.getElementById(btn.getAttribute('aria-controls'));
    body.hidden = open;
    btn.closest('.row').classList.toggle('open', !open);
  });
});

/* ---------- 2. 필터 ---------- */
const filters = $$('.filter');
filters.forEach((f) => {
  f.addEventListener('click', () => {
    const kind = f.dataset.filter;
    filters.forEach((x) => x.setAttribute('aria-pressed', String(x === f)));
    $$('[data-filterable] .row').forEach((row) => {
      row.hidden = kind !== 'all' && row.dataset.kind !== kind;
    });
    $$('[data-filterable] .year').forEach((y) => {
      y.hidden = $$('.row', y).every((r) => r.hidden);
    });
  });
});

/* ---------- 3. 같은 프로젝트에 연결된 줄 함께 강조 ---------- */
$$('.row[data-rel]:not([data-rel=""])').forEach((row) => {
  const rel = row.dataset.rel;
  const peers = $$(`.row[data-rel="${rel}"]`);
  if (peers.length < 2) return;
  const on = () => peers.forEach((p) => p !== row && p.classList.add('linked'));
  const off = () => peers.forEach((p) => p.classList.remove('linked'));
  row.addEventListener('mouseenter', on);
  row.addEventListener('mouseleave', off);
  row.addEventListener('focusin', on);
  row.addEventListener('focusout', off);
});

/* ---------- 4. 상세 패널 ---------- */
const panel = $('[data-panel]');
const scrim = $('[data-scrim]');
let lastFocus = null;
let pushedByUs = false;

function showPanel(slug) {
  const article = panel && $(`[data-detail="${slug}"]`, panel);
  if (!article) return false;
  $$('[data-detail]', panel).forEach((a) => (a.hidden = a !== article));
  panel.hidden = false;
  scrim.hidden = false;
  panel.scrollTop = 0;
  document.documentElement.classList.add('panel-open');
  void panel.offsetWidth; // 강제 리플로우: hidden 해제 직후에도 전환 효과가 적용되도록
  panel.classList.add('in');
  scrim.classList.add('in');
  $(`#title-${slug}`, article)?.focus({ preventScroll: true });
  return true;
}

function hidePanel() {
  if (!panel || panel.hidden) return;
  panel.classList.remove('in');
  scrim.classList.remove('in');
  document.documentElement.classList.remove('panel-open');
  const done = () => {
    panel.hidden = true;
    scrim.hidden = true;
  };
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) done();
  else setTimeout(done, 220);
  lastFocus?.focus({ preventScroll: true });
}

function syncFromHash() {
  const slug = decodeURIComponent(location.hash.slice(1));
  if (!slug || !showPanel(slug)) hidePanel();
}

if (panel) {
  $$('[data-open]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      lastFocus = a;
      pushedByUs = true;
      history.pushState(null, '', `#${a.dataset.open}`);
      syncFromHash();
    });
  });

  const close = () => {
    if (pushedByUs) {
      pushedByUs = false;
      history.back(); // popstate → syncFromHash
    } else {
      history.replaceState(null, '', location.pathname + location.search);
      hidePanel();
    }
  };

  $('[data-close]', panel).addEventListener('click', close);
  scrim.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) close();
  });
  window.addEventListener('popstate', () => {
    pushedByUs = false;
    syncFromHash();
  });
  window.addEventListener('hashchange', syncFromHash);
  syncFromHash();
}

/* ---------- 5. 구조도 탭 ---------- */
$$('[data-pipe]').forEach((pipe) => {
  const tabs = $$('[role="tab"]', pipe);
  const select = (tab, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (e) => {
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (!d) return;
      e.preventDefault();
      select(tabs[(i + d + tabs.length) % tabs.length], true);
    });
  });
});

/* ---------- 6. 라이트/다크 전환 ---------- */
const media = matchMedia('(prefers-color-scheme: dark)');
const sysTheme = () => (media.matches ? 'dark' : 'light');
const readSaved = () => {
  try { return localStorage.getItem('theme'); } catch { return null; }
};
const writeSaved = (value) => {
  try {
    if (value) localStorage.setItem('theme', value);
    else localStorage.removeItem('theme');
  } catch {}
};

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  $$('[data-theme-set]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.themeSet === theme)));
}

applyTheme(document.documentElement.dataset.theme || sysTheme());

$$('[data-theme-set]').forEach((b) => {
  b.addEventListener('click', () => {
    const theme = b.dataset.themeSet;
    // 시스템 설정과 같은 쪽을 고르면 저장하지 않고 다시 시스템을 따른다
    writeSaved(theme === sysTheme() ? null : theme);
    applyTheme(theme);
  });
});

media.addEventListener('change', () => {
  if (!readSaved()) applyTheme(sysTheme());
});
