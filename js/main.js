/* ============================================================
   APERTURE — main.js
   No backend: this is a front-end template. Login/signup forms
   simulate success in-memory so you can see the flow; wire them
   to a real API before going live. No browser storage is used,
   by design (state resets on reload).
   ============================================================ */

(function () {
  'use strict';

  /* ---------- language switching ---------- */
  function applyLanguage(lang) {
    const dict = APERTURE_I18N[lang] || APERTURE_I18N.en;
    const meta = APERTURE_LANGS.find((l) => l.code === lang) || APERTURE_LANGS[0];

    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('dir', meta.dir);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] != null) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('.lang-switch select').forEach((sel) => {
      sel.value = lang;
    });

    // re-render any dynamic curriculum blocks with the new language
    if (typeof renderDynamicContent === 'function') renderDynamicContent(lang);
  }

  function initLangSwitchers() {
    document.querySelectorAll('.lang-switch select').forEach((sel) => {
      // populate options once
      if (!sel.dataset.populated) {
        APERTURE_LANGS.forEach((l) => {
          const opt = document.createElement('option');
          opt.value = l.code;
          opt.textContent = l.label;
          sel.appendChild(opt);
        });
        sel.dataset.populated = 'true';
      }
      sel.addEventListener('change', (e) => applyLanguage(e.target.value));
    });
  }

  /* ---------- mobile nav drawer ---------- */
  function initMobileNav() {
    const toggle = document.querySelector('.menu-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    if (!toggle || !drawer) return;
    const close = drawer.querySelector('.drawer-close');
    toggle.addEventListener('click', () => drawer.classList.add('open'));
    if (close) close.addEventListener('click', () => drawer.classList.remove('open'));
    drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => drawer.classList.remove('open')));
  }

  /* ---------- iris signature interaction ---------- */
  function initIris() {
    document.querySelectorAll('.iris-svg').forEach((svg) => {
      const blades = svg.querySelectorAll('.iris-blade');
      let open = false;
      const setState = (isOpen) => {
        blades.forEach((b, i) => {
          const closedRot = 0;
          const openRot = 34;
          b.style.transform = `rotate(${isOpen ? openRot : closedRot}deg)`;
        });
      };
      setState(false);
      const wrap = svg.closest('.iris-wrap');
      if (wrap) {
        wrap.addEventListener('mouseenter', () => { open = true; setState(true); });
        wrap.addEventListener('mouseleave', () => { open = false; setState(false); });
      }
      // gentle auto-trigger once on load for users who won't hover (e.g. touch)
      setTimeout(() => setState(true), 500);
    });
  }

  /* ---------- dynamic curriculum rendering ---------- */
  function levelName(dict, key) { return dict[key + '_name']; }
  function levelDesc(dict, key) { return dict[key + '_desc']; }

  function renderLevelCards(lang) {
    const wrap = document.querySelector('[data-levels-roll]');
    if (!wrap) return;
    const dict = APERTURE_I18N[lang] || APERTURE_I18N.en;
    wrap.innerHTML = APERTURE_CURRICULUM.map((level) => {
      const lessonCount = level.modules.reduce((s, m) => s + m.lessons.length, 0);
      return `
        <a class="frame-card" href="dashboard.html#${level.id}">
          <span class="frame-sprockets left">${'<span></span>'.repeat(8)}</span>
          <span class="frame-sprockets right">${'<span></span>'.repeat(8)}</span>
          <div class="frame-card-inner">
            <div class="frame-top">
              <span class="frame-numeral">${level.numeral}</span>
              <span class="frame-code">LV.${level.numeral}</span>
            </div>
            <h3>${levelName(dict, level.key)}</h3>
            <p class="desc">${levelDesc(dict, level.key)}</p>
            <div class="frame-meta">
              <span>${level.modules.length} ${dict.modules_label}</span>
              <span>${lessonCount} ${dict.lessons_label}</span>
            </div>
            <span class="frame-link">${dict.view_level}</span>
          </div>
        </a>`;
    }).join('');
  }

  function renderDashboard(lang) {
    const wrap = document.querySelector('[data-contact-sheet]');
    if (!wrap) return;
    const dict = APERTURE_I18N[lang] || APERTURE_I18N.en;
    wrap.innerHTML = APERTURE_CURRICULUM.map((level) => {
      const lessonCount = level.modules.reduce((s, m) => s + m.lessons.length, 0);
      return `
        <section id="${level.id}">
          <div class="level-block-head">
            <span class="level-numeral">${level.numeral}</span>
            <h2>${levelName(dict, level.key)}</h2>
            <span class="count">${level.modules.length} ${dict.modules_label} · ${lessonCount} ${dict.lessons_label}</span>
          </div>
          <div class="module-grid">
            ${level.modules.map((mod) => `
              <div class="module-tile">
                <h4>${mod.title}</h4>
                <ol>
                  ${mod.lessons.map((les) => `
                    <li><span class="fnum">${les.frame}</span><a href="lesson.html?frame=${les.frame}" style="color:inherit;">${les.title}</a></li>
                  `).join('')}
                </ol>
              </div>
            `).join('')}
          </div>
        </section>`;
    }).join('');
  }

  function renderHeroStats() {
    const lessonsEl = document.querySelector('[data-stat-lessons]');
    const modulesEl = document.querySelector('[data-stat-modules]');
    if (lessonsEl) lessonsEl.textContent = apertureTotalLessons();
    if (modulesEl) modulesEl.textContent = apertureTotalModules();
  }

  function renderLessonPage(lang) {
    const target = document.querySelector('[data-lesson-page]');
    if (!target) return;
    const dict = APERTURE_I18N[lang] || APERTURE_I18N.en;
    const params = new URLSearchParams(window.location.search);
    const frameParam = params.get('frame') || '01';

    let found = null, foundLevel = null, foundModule = null, indexInModule = -1;
    APERTURE_CURRICULUM.forEach((level) => {
      level.modules.forEach((mod) => {
        mod.lessons.forEach((les, i) => {
          if (les.frame === frameParam) {
            found = les; foundLevel = level; foundModule = mod; indexInModule = i;
          }
        });
      });
    });
    if (!found) {
      found = APERTURE_CURRICULUM[0].modules[0].lessons[0];
      foundLevel = APERTURE_CURRICULUM[0]; foundModule = APERTURE_CURRICULUM[0].modules[0]; indexInModule = 0;
    }

    document.title = found.title + ' — Aperture';
    const crumb = document.querySelector('[data-lesson-crumb]');
    if (crumb) {
      crumb.innerHTML = `<a href="dashboard.html">${dict.nav_curriculum}</a> / ${levelName(dict, foundLevel.key)} / ${foundModule.title}`;
    }
    const titleEl = document.querySelector('[data-lesson-title]');
    if (titleEl) titleEl.textContent = found.title;

    const exifFrame = document.querySelector('[data-exif-frame]');
    if (exifFrame) exifFrame.textContent = found.frame + ' / ' + String(apertureTotalLessons()).padStart(2, '0');
    const exifLevel = document.querySelector('[data-exif-level]');
    if (exifLevel) exifLevel.textContent = levelName(dict, foundLevel.key);
    const exifModule = document.querySelector('[data-exif-module]');
    if (exifModule) exifModule.textContent = foundModule.title;

    // sidebar: full module lesson list with current highlighted
    const sideList = document.querySelector('[data-module-lessons]');
    if (sideList) {
      sideList.innerHTML = foundModule.lessons.map((les) => `
        <li class="${les.frame === found.frame ? 'current' : ''}">
          <span class="fnum">${les.frame}</span>
          <a href="lesson.html?frame=${les.frame}">${les.title}</a>
        </li>`).join('');
    }
    const sideModuleTitle = document.querySelector('[data-module-title]');
    if (sideModuleTitle) sideModuleTitle.textContent = foundModule.title;

    // lesson body: flagship written content if we have it, otherwise a
    // clear "in progress" placeholder that still shows real structure
    const copyEl = document.querySelector('[data-lesson-copy]');
    const assignmentEl = document.querySelector('[data-assignment-text]');
    const content = (typeof APERTURE_LESSON_CONTENT !== 'undefined') ? APERTURE_LESSON_CONTENT[found.frame] : null;
    if (copyEl) {
      if (content) {
        copyEl.innerHTML = `<p>${content.intro}</p>` + content.sections.map((s) => `<h2>${s.h}</h2><p>${s.p}</p>`).join('');
      } else {
        copyEl.innerHTML = `
          <p>This lesson's full write-up is still being drafted. The page around it — navigation, EXIF strip, module sidebar, and the previous/next flow through the whole roll — is fully wired up, so dropping finished copy in for “${found.title}” is a matter of editing this one lesson's content, not touching any template.</p>
          <h2>What this lesson will cover</h2>
          <p>Expect a short conceptual overview of “${found.title.toLowerCase()}”, followed by the two or three things that matter most in practice, and a shooting assignment to lock it in — the same structure used throughout ${levelName(dict, foundLevel.key)}.</p>`;
      }
    }
    if (assignmentEl) {
      assignmentEl.textContent = content ? content.assignment : `Go shoot something that puts “${found.title.toLowerCase()}” into practice, then review the results critically before moving to the next frame.`;
    }

    // prev/next
    const allLessons = [];
    APERTURE_CURRICULUM.forEach((level) => level.modules.forEach((mod) => mod.lessons.forEach((les) => allLessons.push(les))));
    const idx = allLessons.findIndex((l) => l.frame === found.frame);
    const prevBtn = document.querySelector('[data-lesson-prev]');
    const nextBtn = document.querySelector('[data-lesson-next]');
    if (prevBtn) {
      if (idx > 0) { prevBtn.href = 'lesson.html?frame=' + allLessons[idx - 1].frame; prevBtn.style.visibility = 'visible'; }
      else prevBtn.style.visibility = 'hidden';
    }
    if (nextBtn) {
      if (idx < allLessons.length - 1) { nextBtn.href = 'lesson.html?frame=' + allLessons[idx + 1].frame; nextBtn.style.visibility = 'visible'; }
      else nextBtn.style.visibility = 'hidden';
    }
  }

  function renderDynamicContent(lang) {
    renderLevelCards(lang);
    renderDashboard(lang);
    renderLessonPage(lang);
  }
  window.renderDynamicContent = renderDynamicContent;

  /* ---------- demo auth forms (no backend, no storage) ---------- */
  function initAuthForms() {
    const loginForm = document.querySelector('[data-login-form]');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const alertBox = document.querySelector('[data-form-alert]');
        if (alertBox) {
          alertBox.textContent = 'Signed in — this is a front-end demo, so no real session was created. Connect a backend to make this functional.';
          alertBox.classList.add('show');
        }
      });
    }
    const signupForm = document.querySelector('[data-signup-form]');
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const alertBox = document.querySelector('[data-form-alert]');
        if (alertBox) {
          alertBox.textContent = 'Account created — this is a front-end demo, so nothing was saved. Connect a backend to make this functional.';
          alertBox.classList.add('show');
        }
      });
    }
  }

  /* ---------- init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initLangSwitchers();
    initMobileNav();
    initIris();
    initAuthForms();
    renderHeroStats();
    applyLanguage('en');
  });
})();
