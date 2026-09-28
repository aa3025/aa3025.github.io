/* ==========================================================================
   4004ENG MATLAB PC Labs - Core Application Logic with Password Protection
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // App state
  let appState = {
    manifest: null,
    passwords: {},
    activeWeekId: '',
    activeSectionId: '',
    completedTasks: [],
    theme: 'light',
    sidebarOpen: false,
    sidebarCollapsed: false
  };

  // DOM Elements
  const sidebar = document.getElementById('sidebar');
  const sidebarResizer = document.getElementById('sidebar-resizer');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const closeSidebarBtn = document.getElementById('close-sidebar-btn');
  const collapseSidebarBtn = document.getElementById('collapse-sidebar-btn');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const searchInput = document.getElementById('search-input');
  const navMenu = document.getElementById('nav-menu');
  const breadcrumbs = document.getElementById('breadcrumbs');
  const contentPane = document.getElementById('content-pane');
  const progressPercent = document.getElementById('progress-percent');
  const progressBar = document.getElementById('progress-bar');
  const progressStats = document.getElementById('progress-stats');

  // Initialize
  init();

  async function init() {
    loadSettings();
    setupEventListeners();
    
    try {
      // 1. Fetch manifest.json or load bundled manifest
      if (window.COURSE_MANIFEST) {
        appState.manifest = window.COURSE_MANIFEST;
      } else {
        const response = await fetch('data/manifest.json');
        if (!response.ok) {
          throw new Error('Failed to load course structure manifest.');
        }
        appState.manifest = await response.json();
      }
      
      // 2. Fetch obfuscated passwords list or load bundled passwords
      if (window.COURSE_PASSWORDS) {
        appState.passwords = window.COURSE_PASSWORDS;
      } else {
        try {
          const passRes = await fetch('data/utils/.sys_cache.dat');
          if (passRes.ok) {
            const encText = await passRes.text();
            const decText = atob(encText);
            appState.passwords = JSON.parse(decText);
          }
        } catch (e) {
          console.warn("Could not load obfuscated passwords list:", e);
        }
      }
      
      // 3. Build Nav Menu and load initial view
      clearSearchAutofill();
      buildNavMenu();
      updateProgressTracker();
      
      // Delay-clearing to counteract MS Edge delayed autofill
      setTimeout(clearSearchAutofill, 50);
      setTimeout(clearSearchAutofill, 300);
      
      // 4. Initial route
      handleRouting();
      
      // 5. Initialize icons
      lucide.createIcons();
    } catch (error) {
      console.error(error);
      renderError(error.message);
    }
  }

  // Load theme and task state
  function loadSettings() {
    // Theme
    const savedTheme = localStorage.getItem('4004eng_theme') || 'light';
    appState.theme = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Sidebar Width (validate number > 200px to avoid empty/corrupted values)
    const savedWidth = localStorage.getItem('4004eng_sidebar_width');
    const parsedWidth = parseInt(savedWidth, 10);
    if (savedWidth && !isNaN(parsedWidth) && parsedWidth >= 200) {
      document.documentElement.style.setProperty('--sidebar-width', `${parsedWidth}px`);
    } else {
      localStorage.removeItem('4004eng_sidebar_width');
      document.documentElement.style.removeProperty('--sidebar-width');
    }

    // Completed Tasks
    try {
      const savedTasks = localStorage.getItem('4004eng_completed_tasks');
      appState.completedTasks = savedTasks ? JSON.parse(savedTasks) : [];
    } catch (e) {
      appState.completedTasks = [];
    }

    // Sidebar Collapsed Preference (Desktop)
    const savedCollapsed = localStorage.getItem('4004eng_sidebar_collapsed') === 'true';
    appState.sidebarCollapsed = savedCollapsed;
    if (savedCollapsed && window.innerWidth > 768) {
      document.body.classList.add('sidebar-collapsed');
    }
  }

  // Save Settings helper
  function saveSettings() {
    localStorage.setItem('4004eng_completed_tasks', JSON.stringify(appState.completedTasks));
  }

  // Event Listeners setup
  function setupEventListeners() {
    // Hash routing
    window.addEventListener('hashchange', handleRouting);

    // Sidebar toggles for mobile
    menuToggleBtn.addEventListener('click', toggleSidebar);
    closeSidebarBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    // Sidebar collapse / restore for desktop
    if (collapseSidebarBtn) {
      collapseSidebarBtn.addEventListener('mousedown', (e) => {
        e.stopPropagation();
      });
      collapseSidebarBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCollapseSidebar();
      });
    }

    // Keyboard shortcut: Ctrl+B or Cmd+B to toggle sidebar
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        if (window.innerWidth > 768) {
          toggleCollapseSidebar();
        } else {
          toggleSidebar();
        }
      }
    });

    // Theme switcher
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Search filter
    searchInput.addEventListener('input', handleSearch);

    // Sidebar resize
    let isResizing = false;
    let hasMoved = false;

    if (sidebarResizer) {
      sidebarResizer.addEventListener('mousedown', (e) => {
        if (e.target.closest('#collapse-sidebar-btn') || appState.sidebarCollapsed) {
          return;
        }
        e.preventDefault();
        isResizing = true;
        hasMoved = false;
        document.body.style.cursor = 'col-resize';
        sidebarResizer.classList.add('resizing');
      });

      document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        const newWidth = e.clientX;
        const minWidth = 200;
        const maxWidth = Math.min(600, window.innerWidth * 0.6);

        if (newWidth >= minWidth && newWidth <= maxWidth) {
          hasMoved = true;
          const widthStr = `${Math.round(newWidth)}px`;
          document.documentElement.style.setProperty('--sidebar-width', widthStr);
        }
      });

      document.addEventListener('mouseup', () => {
        if (isResizing) {
          isResizing = false;
          document.body.style.cursor = '';
          sidebarResizer.classList.remove('resizing');

          if (hasMoved) {
            const currentWidth = document.documentElement.style.getPropertyValue('--sidebar-width');
            const parsed = parseInt(currentWidth, 10);
            if (currentWidth && !isNaN(parsed) && parsed >= 200) {
              localStorage.setItem('4004eng_sidebar_width', `${parsed}px`);
            }
          }
        }
      });
    }
  }

  function toggleSidebar() {
    appState.sidebarOpen = !appState.sidebarOpen;
    if (appState.sidebarOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  }

  function toggleCollapseSidebar() {
    appState.sidebarCollapsed = !appState.sidebarCollapsed;
    if (appState.sidebarCollapsed) {
      document.body.classList.add('sidebar-collapsed');
      localStorage.setItem('4004eng_sidebar_collapsed', 'true');
    } else {
      document.body.classList.remove('sidebar-collapsed');
      localStorage.setItem('4004eng_sidebar_collapsed', 'false');
    }
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function toggleTheme() {
    const nextTheme = appState.theme === 'dark' ? 'light' : 'dark';
    appState.theme = nextTheme;
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('4004eng_theme', nextTheme);
  }

  // Hash-based Router
  function handleRouting() {
    const hash = window.location.hash;
    
    // Close sidebar on mobile navigation
    if (appState.sidebarOpen && window.innerWidth <= 768) {
      toggleSidebar();
    }
    
    if (!hash || !hash.startsWith('#')) {
      // Default to first week's first section in manifest
      if (appState.manifest && appState.manifest.weeks.length > 0) {
        const firstWeek = appState.manifest.weeks[0];
        if (firstWeek.sections.length > 0) {
          window.location.hash = `#${firstWeek.id}/${firstWeek.sections[0].id}`;
          return;
        }
      }
      return;
    }

    const [weekId, sectionId] = hash.substring(1).split('/');
    if (weekId && sectionId) {
      appState.activeWeekId = weekId;
      appState.activeSectionId = sectionId;
      
      // Update UI active states
      updateActiveMenuStates();
      loadSectionContent(weekId, sectionId);
    }
  }

  // Force clear search input if browser injected autofill credentials
  function clearSearchAutofill() {
    if (searchInput && searchInput.value !== '') {
      searchInput.value = '';
      handleSearch({ target: searchInput });
    }
  }

  // Search function to filter navbar items
  function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    const weekGroups = document.querySelectorAll('.week-group');
    
    weekGroups.forEach(group => {
      const weekTitle = group.querySelector('.week-header').textContent.toLowerCase();
      const navItems = group.querySelectorAll('.nav-item');
      let weekHasMatches = false;

      navItems.forEach(item => {
        const itemTitle = item.querySelector('.nav-item-title').textContent.toLowerCase();
        if (itemTitle.includes(query) || weekTitle.includes(query)) {
          item.style.display = 'flex';
          weekHasMatches = true;
        } else {
          item.style.display = 'none';
        }
      });

      if (weekHasMatches || query === '') {
        group.style.display = 'block';
        if (query !== '') {
          group.classList.add('expanded');
        } else {
          // If query cleared, keep expanded only if it's the active week group
          if (group.id === `group-${appState.activeWeekId}`) {
            group.classList.add('expanded');
          } else {
            group.classList.remove('expanded');
          }
        }
      } else {
        group.style.display = 'none';
        group.classList.remove('expanded');
      }
    });
  }

  // Build the navigation lists dynamically
  function buildNavMenu() {
    navMenu.innerHTML = '';
    
    appState.manifest.weeks.forEach(week => {
      const weekGroup = document.createElement('div');
      weekGroup.className = 'week-group';
      weekGroup.id = `group-${week.id}`;

      const header = document.createElement('button');
      header.type = 'button';
      header.className = 'week-header';
      
      const headerLeft = document.createElement('div');
      headerLeft.className = 'week-header-left';
      
      const weekIcon = document.createElement('i');
      weekIcon.setAttribute('data-lucide', 'folder');
      weekIcon.className = 'nav-item-icon';
      
      const titleSpan = document.createElement('span');
      titleSpan.textContent = week.title;

      headerLeft.appendChild(weekIcon);
      headerLeft.appendChild(titleSpan);

      const chevron = document.createElement('i');
      chevron.setAttribute('data-lucide', 'chevron-down');
      chevron.className = 'week-chevron';

      header.appendChild(headerLeft);
      header.appendChild(chevron);

      const contentList = document.createElement('div');
      contentList.className = 'week-content-list';

      week.sections.forEach(sec => {
        const navItem = document.createElement('button');
        navItem.type = 'button';
        navItem.className = 'nav-item';
        navItem.id = `nav-${week.id}-${sec.id}`;
        
        // Add check if completed
        const isCompleted = appState.completedTasks.includes(`${week.id}/${sec.id}`);
        if (isCompleted) {
          navItem.classList.add('completed');
        }

        const navLeft = document.createElement('div');
        navLeft.className = 'nav-item-left';

        const itemIcon = document.createElement('i');
        const iconName = sec.type === 'problem' ? 'code-2' : 'file-text';
        itemIcon.setAttribute('data-lucide', iconName);
        itemIcon.className = 'nav-item-icon';

        const itemTitle = document.createElement('span');
        itemTitle.className = 'nav-item-title';
        itemTitle.textContent = sec.title;

        navLeft.appendChild(itemIcon);
        navLeft.appendChild(itemTitle);

        const statusDot = document.createElement('span');
        statusDot.className = 'nav-item-status';
        statusDot.innerHTML = '<i data-lucide="check" style="width: 10px; height: 10px;"></i>';

        navItem.appendChild(navLeft);
        if (sec.type === 'problem') {
          navItem.appendChild(statusDot);
        }

        navItem.addEventListener('click', () => {
          window.location.hash = `#${week.id}/${sec.id}`;
        });

        contentList.appendChild(navItem);
      });

      weekGroup.appendChild(header);
      weekGroup.appendChild(contentList);

      header.addEventListener('click', () => {
        const isExpanded = weekGroup.classList.contains('expanded');
        if (isExpanded) {
          weekGroup.classList.remove('expanded');
        } else {
          weekGroup.classList.add('expanded');
        }
      });

      navMenu.appendChild(weekGroup);
    });
  }

  // Update navigation items visual active classes
  function updateActiveMenuStates() {
    appState.manifest.weeks.forEach(week => {
      const group = document.getElementById(`group-${week.id}`);
      if (!group) return;

      if (week.id === appState.activeWeekId) {
        group.classList.add('expanded');
      } else if (searchInput.value === '') {
        group.classList.remove('expanded');
      }
    });

    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });

    const activeItem = document.getElementById(`nav-${appState.activeWeekId}-${appState.activeSectionId}`);
    if (activeItem) {
      activeItem.classList.add('active');
    }
  }

  // Update the progress widget calculations
  function updateProgressTracker() {
    let totalProblems = 0;
    let completedProblems = 0;

    appState.manifest.weeks.forEach(week => {
      week.sections.forEach(sec => {
        if (sec.type === 'problem') {
          totalProblems++;
          const taskKey = `${week.id}/${sec.id}`;
          if (appState.completedTasks.includes(taskKey)) {
            completedProblems++;
          }
        }
      });
    });

    const percent = totalProblems > 0 ? Math.round((completedProblems / totalProblems) * 100) : 0;
    progressBar.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;
    progressStats.textContent = `${completedProblems} of ${totalProblems} problems completed`;
  }

  // Render content dynamically
  async function loadSectionContent(weekId, sectionId) {
    contentPane.innerHTML = `
      <div class="content-loading">
        <div class="spinner"></div>
        <p>Loading details...</p>
      </div>
    `;

    try {
      const week = appState.manifest.weeks.find(w => w.id === weekId);
      const section = week ? week.sections.find(s => s.id === sectionId) : null;

      if (!week || !section) {
        throw new Error('Section details could not be found in course outline.');
      }

      // Update breadcrumbs
      breadcrumbs.innerHTML = `
        <span class="breadcrumb-item">${week.title}</span>
        <span class="breadcrumb-separator"><i data-lucide="chevron-right" style="width: 12px; height: 12px;"></i></span>
        <span class="breadcrumb-item active">${section.title}</span>
      `;
      lucide.createIcons({ root: breadcrumbs, props: { style: 'display: inline-block; vertical-align: middle;' } });

      // Fetch content or load from bundled course data
      let rawContent = '';
      if (window.COURSE_PAGES && window.COURSE_PAGES[section.file]) {
        rawContent = window.COURSE_PAGES[section.file];
      } else {
        const resp = await fetch(section.file);
        if (!resp.ok) {
          throw new Error(`Failed to load content file: ${section.file}`);
        }
        rawContent = await resp.text();
      }

      if (section.type === 'markdown') {
        renderMarkdownView(rawContent, weekId);
      } else if (section.type === 'html') {
        renderHtmlView(rawContent, weekId);
      } else if (section.type === 'problem') {
        await renderProblemView(week, section, rawContent);
      }
    } catch (err) {
      console.error(err);
      renderError(err.message);
    }
  }

  // Standard document view
  function renderMarkdownView(markdown, weekId) {
    const htmlContent = parseMarkdownAndLaTeX(markdown);
    
    contentPane.innerHTML = `
      <article class="markdown-body" id="doc-container">
        ${htmlContent}
      </article>
    `;

    // Hook solution download links for password validation (e.g. Week 6 solution PDFs)
    const docContainer = document.getElementById('doc-container');
    const links = docContainer.querySelectorAll('a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href.includes('Solutions.pdf') || href.includes('solutions') || href.includes('solution_'))) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const fileName = href.split('/').pop();
          showPasswordModal(weekId, (password) => {
            downloadAndDecryptFile(href, fileName, password);
          });
        });
      }
    });

    // Process KaTeX formulas
    renderMathInElement(contentPane, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "\\[", right: "\\]", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false}
      ],
      throwOnError: false
    });

    // Color code
    Prism.highlightAllUnder(contentPane);
    lucide.createIcons({ root: contentPane });
  }

  // HTML document view for legacy content
  function renderHtmlView(htmlContent, weekId) {
    contentPane.innerHTML = `
      <article class="markdown-body legacy-container" id="doc-container">
        ${htmlContent}
      </article>
    `;

    // Hook solution download links for password validation if any are embedded in HTML
    const docContainer = document.getElementById('doc-container');
    const links = docContainer.querySelectorAll('a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href.includes('Solutions.pdf') || href.includes('solutions') || href.includes('solution_'))) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const fileName = href.split('/').pop();
          showPasswordModal(weekId, (password) => {
            downloadAndDecryptFile(href, fileName, password);
          });
        });
      }
    });

    // Process KaTeX formulas if any
    renderMathInElement(contentPane, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "\\[", right: "\\]", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false}
      ],
      throwOnError: false
    });

    // Color code snippets
    Prism.highlightAllUnder(contentPane);
    lucide.createIcons({ root: contentPane });
  }

  // Problem exercise view (Interactive panels, codes, solutions reveal, checklists)
  async function renderProblemView(week, section, content) {
    let htmlDesc = '';
    let htmlStatement = '';

    if (section.file.endsWith('.html') || content.includes('class="problem-outcomes"')) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      const outcomesElem = doc.querySelector('.problem-outcomes');
      const statementElem = doc.querySelector('.problem-statement');

      htmlDesc = outcomesElem ? outcomesElem.innerHTML : content;
      htmlStatement = statementElem ? statementElem.innerHTML : '<p>No problem statement available for this exercise yet.</p>';
    } else {
      // Split the source markdown into "Learning Outcomes" (everything before the
      // "### Problem Description" heading) and "Problem Description" (everything after it).
      const splitMarker = /\n###\s*Problem Description\s*\n/i;
      const splitMatch = content.match(splitMarker);
      const outcomesMarkdown = splitMatch ? content.slice(0, splitMatch.index) : content;
      const statementMarkdown = splitMatch ? content.slice(splitMatch.index + splitMatch[0].length) : '';

      htmlDesc = parseMarkdownAndLaTeX(outcomesMarkdown);
      htmlStatement = statementMarkdown
        ? parseMarkdownAndLaTeX(statementMarkdown)
        : '<p>No problem statement available for this exercise yet.</p>';
    }
    const taskKey = `${week.id}/${section.id}`;
    const isCompleted = appState.completedTasks.includes(taskKey);
    const isWeekUnlocked = getUnlockedWeeks().includes(week.id);

    let badgeClass = 'badge-core';
    if (section.badge && (section.badge.includes('Consolidation') || section.badge.includes('Route B'))) {
      badgeClass = 'badge-consolidation';
    }
    if (section.badge && section.badge.includes('Stretch')) {
      badgeClass = 'badge-stretch';
    }
    const badgeHtml = section.badge ? `<span class="badge-tag ${badgeClass}">${section.badge}</span>` : '';
    const templateFileName = section.template_m ? section.template_m.split('/').pop() : `prob${section.id.replace('prob', '')}.m`;
    const solutionFileName = section.solution_m ? section.solution_m.split('/').pop() : `prob${section.id.replace('prob', '')}_sol.m`;

    // Build the outer layout
    contentPane.innerHTML = `
      <div class="problem-header">
        <div class="problem-title-area">
          <span class="problem-tag">${week.title.split(':')[0]} &bull; Exercise</span>
          <h1 class="problem-headline">${section.title} ${badgeHtml}</h1>
        </div>
        <label class="progress-checkbox-card" id="task-checkbox-card">
          <input type="checkbox" id="task-checkbox" ${isCompleted ? 'checked' : ''}>
          <span class="custom-checkbox">
            <i data-lucide="check" style="width: 14px; height: 14px;"></i>
          </span>
          <span class="checkbox-label">${isCompleted ? 'Completed!' : 'Mark Completed'}</span>
        </label>
      </div>

      <div class="tabs-container">
        <div class="tabs-header">
          <button class="tab-btn active" data-tab="desc-tab">Learning Outcomes</button>
          <button class="tab-btn" data-tab="statement-tab">Problem Description</button>
          <button class="tab-btn" data-tab="template-tab">MATLAB Template</button>
          <button class="tab-btn" data-tab="solution-tab">Worked Solution</button>
        </div>

        <!-- Learning Outcomes Panel -->
        <div class="tab-panel active" id="desc-tab">
          <div class="problem-desc-container markdown-body">
            ${htmlDesc}
          </div>
        </div>

        <!-- Problem Statement Panel -->
        <div class="tab-panel" id="statement-tab">
          <div class="problem-desc-container markdown-body">
            ${htmlStatement}
          </div>
        </div>

        <!-- Template Panel -->
        <div class="tab-panel" id="template-tab">
          <div class="code-block-wrapper">
            <div class="code-block-header">
              <span class="code-lang">${templateFileName}</span>
              <button class="copy-btn" data-copy-target="template-code-elem">
                <i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy Code
              </button>
            </div>
            <pre><code class="language-matlab" id="template-code-elem">Loading code template...</code></pre>
          </div>
        </div>

        <!-- Solution Panel -->
        <div class="tab-panel" id="solution-tab">
          <div class="solution-container ${isWeekUnlocked ? 'unlocked' : ''}" id="solution-container">
            <!-- Password prompt overlay -->
            <div class="solution-overlay">
              <i data-lucide="lock" class="solution-overlay-icon"></i>
              <h4 class="solution-overlay-title">Password Protected Solution</h4>
              <p class="solution-overlay-text">Enter the password for ${week.title.split(':')[0]} to unlock the solution code and downloads.</p>
              
              <div style="display: flex; gap: 8px; width: 100%; max-width: 320px; margin-bottom: 8px;">
                <input type="password" id="solution-pass-input" placeholder="Password..." style="flex-grow: 1; padding: 10px 16px; background-color: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--border-radius-md); color: var(--text-primary); font-size: 0.95rem; text-align: center;">
                <button class="reveal-btn" id="unlock-solution-btn" style="padding: 10px 20px;">Unlock</button>
              </div>
              <p id="password-error-msg" class="modal-error" style="margin-bottom: 0; min-height: 18px;"></p>
            </div>
            
            <div class="solution-blurred-content">
              <div class="what-to-compare-box">
                <h4><i data-lucide="check-circle-2" style="width: 18px; height: 18px;"></i> What to Compare in Your Solution</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">
                  Before adapting this solution, evaluate your own attempt against these 4 critical checks:
                </p>
                <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: var(--text-secondary);">
                  <li><strong>Method Strategy:</strong> Did you use the intended approach (e.g. symbolic vs numerical, vectorised vs loop)?</li>
                  <li><strong>Grader Variables:</strong> Are all requested variable names and dimensions (row vs column vector) exact?</li>
                  <li><strong>Element-Wise Operators:</strong> Did you include dot operators (<code>.*</code>, <code>./</code>, <code>.^</code>) in function handles?</li>
                  <li><strong>Sanity &amp; Units:</strong> Does the numerical result make physical sense (sign, magnitude, units)?</li>
                </ul>
              </div>

              <div class="code-block-wrapper">
                <div class="code-block-header">
                  <span class="code-lang">${solutionFileName}</span>
                  <button class="copy-btn" data-copy-target="solution-code-elem">
                    <i data-lucide="copy" style="width: 14px; height: 14px;"></i> Copy Code
                  </button>
                </div>
                <pre><code class="language-matlab" id="solution-code-elem">Unlocking solution...</code></pre>
              </div>
            </div>
          </div>
        </div>

        <!-- Downloads assets section -->
        <div class="download-section">
          <div class="download-header">
            <i data-lucide="download" class="download-header-icon"></i>
            <span>Download Assets for MATLAB</span>
          </div>
          <div class="download-grid" id="download-grid-container">
            <!-- Populated dynamically to switch between locked and active download states -->
          </div>
        </div>
      </div>
    `;

    // Renders download cards depending on unlocked state
    renderDownloadCards(week, section);

    // Set up problem completion checkmark
    const checkbox = document.getElementById('task-checkbox');
    const checkboxCard = document.getElementById('task-checkbox-card');
    const labelSpan = checkboxCard.querySelector('.checkbox-label');

    checkbox.addEventListener('change', () => {
      const activeItem = document.getElementById(`nav-${week.id}-${section.id}`);
      
      if (checkbox.checked) {
        if (!appState.completedTasks.includes(taskKey)) {
          appState.completedTasks.push(taskKey);
        }
        labelSpan.textContent = 'Completed!';
        if (activeItem) activeItem.classList.add('completed');
      } else {
        appState.completedTasks = appState.completedTasks.filter(k => k !== taskKey);
        labelSpan.textContent = 'Mark Completed';
        if (activeItem) activeItem.classList.remove('completed');
      }
      saveSettings();
      updateProgressTracker();
      
      lucide.createIcons();
    });

    // Populate MATLAB Template code (Unencrypted plain script)
    if (section.template_m) {
      if (window.COURSE_TEMPLATES && window.COURSE_TEMPLATES[section.template_m]) {
        const code = window.COURSE_TEMPLATES[section.template_m];
        document.getElementById('template-code-elem').textContent = code;
        Prism.highlightElement(document.getElementById('template-code-elem'));
      } else {
        try {
          const response = await fetch(section.template_m);
          if (response.ok) {
            const code = await response.text();
            document.getElementById('template-code-elem').textContent = code;
            Prism.highlightElement(document.getElementById('template-code-elem'));
          }
        } catch (e) {
          document.getElementById('template-code-elem').textContent = 'Failed to load script template.';
        }
      }
    }

    // Function to load and decrypt solution code
    async function loadAndDecryptSolutionCode(password) {
      if (!section.solution_m) return;
      try {
        let encBuffer;
        if (window.COURSE_SOLUTIONS && window.COURSE_SOLUTIONS[section.solution_m]) {
          const b64 = window.COURSE_SOLUTIONS[section.solution_m];
          const binStr = atob(b64);
          const bytes = new Uint8Array(binStr.length);
          for (let i = 0; i < binStr.length; i++) {
            bytes[i] = binStr.charCodeAt(i);
          }
          encBuffer = bytes.buffer;
        } else {
          const response = await fetch(section.solution_m);
          if (response.ok) {
            encBuffer = await response.arrayBuffer();
          } else {
            document.getElementById('solution-code-elem').textContent = 'Failed to fetch solution from server.';
            return;
          }
        }
        const decBuffer = decryptBytes(encBuffer, password);
        const decCode = new TextDecoder().decode(decBuffer);
        
        document.getElementById('solution-code-elem').textContent = decCode;
        Prism.highlightElement(document.getElementById('solution-code-elem'));
      } catch (e) {
        console.error(e);
        document.getElementById('solution-code-elem').textContent = 'Error decrypting solution: ' + e.message;
      }
    }

    // Load solution if already unlocked in history
    if (isWeekUnlocked) {
      const wPassword = appState.passwords[week.id];
      loadAndDecryptSolutionCode(wPassword);
    }

    // Hook password unlocking event handlers
    const solContainer = document.getElementById('solution-container');
    const unlockBtn = document.getElementById('unlock-solution-btn');
    const passInput = document.getElementById('solution-pass-input');
    const errorMsg = document.getElementById('password-error-msg');

    const handleUnlock = () => {
      const enteredPassword = passInput.value;
      const correctPassword = appState.passwords[week.id];

      if (enteredPassword === correctPassword) {
        unlockWeek(week.id);
        solContainer.classList.add('unlocked');
        loadAndDecryptSolutionCode(correctPassword);
        
        // Re-render active download links instead of locked links
        renderDownloadCards(week, section);
        
        showToast("Solutions unlocked for this week!", "success");
      } else {
        errorMsg.textContent = 'Incorrect password. Try again.';
        passInput.value = '';
        passInput.focus();
      }
    };

    unlockBtn.addEventListener('click', handleUnlock);
    passInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleUnlock();
    });

    // Tab buttons switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });

    // Copy buttons
    const copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-copy-target');
        const codeText = document.getElementById(targetId).textContent;
        
        navigator.clipboard.writeText(codeText).then(() => {
          const originalHTML = btn.innerHTML;
          btn.innerHTML = '<i data-lucide="check" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle;"></i> Copied!';
          btn.style.backgroundColor = 'var(--success)';
          btn.style.borderColor = 'var(--success)';
          btn.style.color = 'white';
          
          lucide.createIcons();
          
          setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.backgroundColor = '';
            btn.style.borderColor = '';
            btn.style.color = '';
            lucide.createIcons();
          }, 2000);
        }).catch(err => {
          alert('Failed to copy: ', err);
        });
      });
    });

    // KaTeX rendering inside Problem Description and Learning Outcomes tabs
    ['statement-tab', 'desc-tab'].forEach(tabId => {
      renderMathInElement(document.getElementById(tabId), {
        delimiters: [
          {left: "$$", right: "$$", display: true},
          {left: "\\[", right: "\\]", display: true},
          {left: "$", right: "$", display: false},
          {left: "\\(", right: "\\)", display: false}
        ],
        throwOnError: false
      });
    });

    Prism.highlightAllUnder(contentPane);
    lucide.createIcons({ root: contentPane });
  }

  // Populate download grid with either active triggers or locked locks
  function renderDownloadCards(week, section) {
    const isUnlocked = getUnlockedWeeks().includes(week.id);
    const grid = document.getElementById('download-grid-container');
    if (!grid) return;

    grid.innerHTML = '';

    // 1. Template MATLAB file (Unencrypted - Always active)
    if (section.template_m) {
      const card = document.createElement('a');
      card.href = section.template_m;
      card.className = 'download-card';
      const fileName = section.template_m ? section.template_m.split('/').pop() : `prob${section.id.replace('prob', '')}.m`;
      card.setAttribute('download', fileName);
      card.innerHTML = `
        <i data-lucide="file-code" class="download-card-icon"></i>
        <div class="download-card-info">
          <span class="download-card-title">MATLAB Template</span>
          <span class="download-card-ext">Script (.m)</span>
        </div>
      `;
      // Ensure download works even under file:// protocol without web server
      card.addEventListener('click', (e) => {
        if (window.COURSE_TEMPLATES && window.COURSE_TEMPLATES[section.template_m]) {
          e.preventDefault();
          const code = window.COURSE_TEMPLATES[section.template_m];
          const blob = new Blob([code], { type: 'text/plain' });
          const blobUrl = URL.createObjectURL(blob);
          const dl = document.createElement('a');
          dl.href = blobUrl;
          dl.download = fileName;
          document.body.appendChild(dl);
          dl.click();
          document.body.removeChild(dl);
          URL.revokeObjectURL(blobUrl);
        }
      });
      grid.appendChild(card);
    }



    // 3. Solution MATLAB script card (Locked / Active)
    if (section.solution_m) {
      const card = document.createElement('a');
      card.href = '#';
      if (isUnlocked) {
        card.className = 'download-card solution-download';
        card.innerHTML = `
          <i data-lucide="file-code-2" class="download-card-icon" style="color: var(--success);"></i>
          <div class="download-card-info">
            <span class="download-card-title">MATLAB Solution</span>
            <span class="download-card-ext">Script (.m)</span>
          </div>
        `;
        card.addEventListener('click', (e) => {
          e.preventDefault();
          const pass = appState.passwords[week.id];
          const solFileName = section.solution_m ? section.solution_m.split('/').pop() : `prob${section.id.replace('prob', '')}_sol.m`;
          downloadAndDecryptFile(section.solution_m, solFileName, pass);
        });
      } else {
        card.className = 'download-card locked';
        card.innerHTML = `
          <i data-lucide="lock" class="download-card-icon"></i>
          <div class="download-card-info">
            <span class="download-card-title">MATLAB Solution (Locked)</span>
            <span class="download-card-ext">Script (.m)</span>
          </div>
        `;
        card.addEventListener('click', (e) => {
          e.preventDefault();
          showPasswordModal(week.id, (password) => {
            unlockWeek(week.id);
            // Refresh problem view loading state
            loadSectionContent(week.id, section.id);
            const solFileName = section.solution_m ? section.solution_m.split('/').pop() : `prob${section.id.replace('prob', '')}_sol.m`;
            downloadAndDecryptFile(section.solution_m, solFileName, password);
          });
        });
      }
      grid.appendChild(card);
    }



    lucide.createIcons({ root: grid });
  }

  // Password Prompt Modal builder
  function showPasswordModal(weekId, callback) {
    const savedUnlocked = getUnlockedWeeks();
    if (savedUnlocked.includes(weekId)) {
      callback(appState.passwords[weekId]);
      return;
    }

    // Backdrop element
    const modal = document.createElement('div');
    modal.className = 'password-modal-backdrop';
    modal.innerHTML = `
      <div class="password-modal-content">
        <i data-lucide="lock" class="password-modal-icon"></i>
        <h3>Unlock Content</h3>
        <p>Please enter the password for ${weekId.replace('week', 'Week ')} to download this solution.</p>
        <input type="password" id="modal-pass-input" placeholder="Enter password..." autofocus>
        <p id="modal-error-msg" class="modal-error"></p>
        <div class="modal-actions">
          <button class="modal-btn cancel-btn" id="modal-cancel">Cancel</button>
          <button class="modal-btn confirm-btn" id="modal-confirm">Unlock</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    lucide.createIcons();

    const input = document.getElementById('modal-pass-input');
    const error = document.getElementById('modal-error-msg');
    
    const handleConfirm = () => {
      const password = input.value;
      const correctPassword = appState.passwords[weekId];
      if (password === correctPassword) {
        unlockWeek(weekId);
        document.body.removeChild(modal);
        callback(password);
      } else {
        error.textContent = 'Incorrect password. Try again.';
        input.value = '';
        input.focus();
      }
    };

    document.getElementById('modal-confirm').addEventListener('click', handleConfirm);
    document.getElementById('modal-cancel').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleConfirm();
    });
    
    // Focus automatically
    input.focus();
  }

  // Local storage management for password unlocking history
  function getUnlockedWeeks() {
    try {
      const saved = localStorage.getItem('4004eng_unlocked_weeks');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  function unlockWeek(weekId) {
    const unlocked = getUnlockedWeeks();
    if (!unlocked.includes(weekId)) {
      unlocked.push(weekId);
      localStorage.setItem('4004eng_unlocked_weeks', JSON.stringify(unlocked));
    }
  }

  // Fetch encrypted file bytes, decrypt them locally with XOR key, and trigger standard Blob download
  async function downloadAndDecryptFile(url, fileName, password) {
    // Show toast loader
    const toast = showToast(`Downloading and decrypting ${fileName}...`, "info");
    
    try {
      let encBuffer;
      if (window.COURSE_SOLUTIONS && window.COURSE_SOLUTIONS[url]) {
        const b64 = window.COURSE_SOLUTIONS[url];
        const binStr = atob(b64);
        const bytes = new Uint8Array(binStr.length);
        for (let i = 0; i < binStr.length; i++) {
          bytes[i] = binStr.charCodeAt(i);
        }
        encBuffer = bytes.buffer;
      } else {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to load encrypted file from server.");
        encBuffer = await res.arrayBuffer();
      }
      
      const decBuffer = decryptBytes(encBuffer, password);
      
      // Determine headers content-type
      let contentType = "application/octet-stream";
      if (fileName.endsWith(".m")) {
        contentType = "text/plain";
      } else if (fileName.endsWith(".pdf")) {
        contentType = "application/pdf";
      }
      
      const blob = new Blob([decBuffer], {type: contentType});
      const downloadUrl = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      
      // Cleanup ObjectURL
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);
      
      toast.remove();
      showToast("Download completed successfully!", "success");
    } catch (err) {
      console.error(err);
      toast.remove();
      showToast("Decryption error: " + err.message, "danger");
    }
  }

  // XOR Byte Decryption
  function decryptBytes(dataBuffer, keyStr) {
    const keyBytes = new TextEncoder().encode(keyStr);
    const srcBytes = new Uint8Array(dataBuffer);
    const outBytes = new Uint8Array(srcBytes.length);
    
    for (let i = 0; i < srcBytes.length; i++) {
      outBytes[i] = srcBytes[i] ^ keyBytes[i % keyBytes.length];
    }
    
    return outBytes.buffer;
  }

  // Action status Toast notifications
  function showToast(message, type = "info") {
    const container = document.querySelector('.toast-container');
    
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    
    let iconName = 'info';
    if (type === 'success') iconName = 'check-circle';
    else if (type === 'danger') iconName = 'alert-octagon';
    else if (type === 'info') iconName = 'refresh-cw'; // spinner loader style
    
    toast.innerHTML = `
      <i data-lucide="${iconName}" class="${type === 'info' ? 'spinner' : ''}" style="width: 16px; height: 16px;"></i>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);
    lucide.createIcons();
    
    if (type !== 'info') {
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }
    return toast;
  }

  // Preprocessor to extract LaTeX markup before Marked parses and restore afterwards
  function parseMarkdownAndLaTeX(markdownText) {
    const formulas = [];
    
    // Hide block math $$...$$
    let processed = markdownText.replace(/\$\$([\s\S]+?)\$\$/g, (match) => {
      formulas.push(match); return `%%MATH_${formulas.length - 1}%%`;
    });
    // Hide block math \[...\]
    processed = processed.replace(/\\\[([\s\S]+?)\\\]/g, (match) => {
      formulas.push(match); return `%%MATH_${formulas.length - 1}%%`;
    });
    // Hide inline math $...$
    processed = processed.replace(/\$([^\$\n]+?)\$/g, (match) => {
      formulas.push(match); return `%%MATH_${formulas.length - 1}%%`;
    });
    // Hide inline math \(...\)
    processed = processed.replace(/\\\([\s\S]+?\\\)/g, (match) => {
      formulas.push(match); return `%%MATH_${formulas.length - 1}%%`;
    });
    
    // Render raw markdown to html via Marked
    let html = marked.parse(processed);
    
    // Restore formulas
    html = html.replace(/%%MATH_(\d+)%%/g, (match, index) => {
      return formulas[index];
    });
    
    return html;
  }

  function renderError(message) {
    contentPane.innerHTML = `
      <div style="max-width: 600px; margin: 80px auto; padding: 30px; background-color: var(--danger-bg); border: 1px solid var(--danger); border-radius: var(--border-radius-md); text-align: center;">
        <i data-lucide="alert-triangle" style="width: 48px; height: 48px; color: var(--danger); margin-bottom: 16px; display: inline-block;"></i>
        <h3 font-family="var(--font-heading)" style="font-weight: 700; margin-bottom: 8px;">An Error Occurred</h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">${message}</p>
        <button onclick="window.location.reload()" style="margin-top: 16px; background-color: var(--accent); color: white; border: none; padding: 10px 20px; border-radius: var(--border-radius-sm); font-weight: 600; cursor: pointer;">Reload Page</button>
      </div>
    `;
    lucide.createIcons();
  }
});
