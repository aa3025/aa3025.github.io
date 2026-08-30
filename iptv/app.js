/**
 * Nova IPTV Player - Pure JavaScript-Driven Client
 * Zero backend dependencies. Parses playlist.m3u directly in browser.
 */

(function () {
  'use strict';

  // --- ISO Country Codes to Name & Language ---
  const COUNTRY_MAP = {
    us: ["United States", "English"],
    uk: ["United Kingdom", "English"],
    gb: ["United Kingdom", "English"],
    ca: ["Canada", "English"],
    au: ["Australia", "English"],
    nz: ["New Zealand", "English"],
    ie: ["Ireland", "English"],
    in: ["India", "Hindi"],
    de: ["Germany", "German"],
    at: ["Austria", "German"],
    ch: ["Switzerland", "German"],
    ru: ["Russia", "Russian"],
    by: ["Belarus", "Russian"],
    ua: ["Ukraine", "Ukrainian"],
    fr: ["France", "French"],
    be: ["Belgium", "French"],
    mc: ["Monaco", "French"],
    es: ["Spain", "Spanish"],
    mx: ["Mexico", "Spanish"],
    ar: ["Argentina", "Spanish"],
    cl: ["Chile", "Spanish"],
    co: ["Colombia", "Spanish"],
    pe: ["Peru", "Spanish"],
    do: ["Dominican Republic", "Spanish"],
    ec: ["Ecuador", "Spanish"],
    bo: ["Bolivia", "Spanish"],
    hn: ["Honduras", "Spanish"],
    ve: ["Venezuela", "Spanish"],
    cr: ["Costa Rica", "Spanish"],
    py: ["Paraguay", "Spanish"],
    gt: ["Guatemala", "Spanish"],
    sv: ["El Salvador", "Spanish"],
    pa: ["Panama", "Spanish"],
    cu: ["Cuba", "Spanish"],
    uy: ["Uruguay", "Spanish"],
    it: ["Italy", "Italian"],
    sm: ["San Marino", "Italian"],
    pt: ["Portugal", "Portuguese"],
    br: ["Brazil", "Portuguese"],
    mz: ["Mozambique", "Portuguese"],
    ao: ["Angola", "Portuguese"],
    nl: ["Netherlands", "Dutch"],
    se: ["Sweden", "Swedish"],
    no: ["Norway", "Norwegian"],
    dk: ["Denmark", "Danish"],
    fi: ["Finland", "Finnish"],
    pl: ["Poland", "Polish"],
    cz: ["Czech Republic", "Czech"],
    sk: ["Slovakia", "Slovak"],
    hu: ["Hungary", "Hungarian"],
    ro: ["Romania", "Romanian"],
    bg: ["Bulgaria", "Bulgarian"],
    gr: ["Greece", "Greek"],
    tr: ["Turkey", "Turkish"],
    rs: ["Serbia", "Serbian"],
    hr: ["Croatia", "Croatian"],
    ba: ["Bosnia", "Bosnian"],
    ir: ["Iran", "Persian"],
    sa: ["Saudi Arabia", "Arabic"],
    ae: ["United Arab Emirates", "Arabic"],
    eg: ["Egypt", "Arabic"],
    iq: ["Iraq", "Arabic"],
    qa: ["Qatar", "Arabic"],
    kw: ["Kuwait", "Arabic"],
    ma: ["Morocco", "Arabic"],
    dz: ["Algeria", "Arabic"],
    il: ["Israel", "Hebrew"],
    pk: ["Pakistan", "Urdu"],
    bd: ["Bangladesh", "Bengali"],
    id: ["Indonesia", "Indonesian"],
    my: ["Malaysia", "Malay"],
    ph: ["Philippines", "Filipino"],
    th: ["Thailand", "Thai"],
    vn: ["Vietnam", "Vietnamese"],
    cn: ["China", "Chinese"],
    tw: ["Taiwan", "Chinese"],
    hk: ["Hong Kong", "Chinese"],
    jp: ["Japan", "Japanese"],
    kr: ["South Korea", "Korean"],
    za: ["South Africa", "English"],
    ng: ["Nigeria", "English"],
    ke: ["Kenya", "Swahili"]
  };

  const GENRE_ICONS = {
    "News": "📰",
    "Movies": "🍿",
    "Sports": "⚽",
    "Music": "🎵",
    "Entertainment": "🎭",
    "Series": "📺",
    "Kids": "👶",
    "Animation": "🎨",
    "Documentary": "🌿",
    "Comedy": "😂",
    "Education": "🎓",
    "Religious": "🕊️",
    "Lifestyle": "✨",
    "Shop": "🛍️",
    "General": "🌐",
    "Business": "💼",
    "Classic": "🏛️",
    "Culture": "🏛️",
    "Legislative": "⚖️"
  };

  function countryCodeToFlag(code) {
    if (!code || code.length !== 2) return "🌐";
    code = code.toUpperCase();
    if (code === "UK") code = "GB";
    try {
      return String.fromCodePoint(127397 + code.charCodeAt(0), 127397 + code.charCodeAt(1));
    } catch {
      return "🌐";
    }
  }

  function getInitials(name) {
    const cleaned = name.replace(/\([^\)]*\)/g, '').replace(/\[[^\]]*\]/g, '').trim();
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (!parts.length) return "TV";
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  const GRADIENTS = [
    'linear-gradient(135deg, #6366f1, #a855f7)',
    'linear-gradient(135deg, #06b6d4, #3b82f6)',
    'linear-gradient(135deg, #ec4899, #f43f5e)',
    'linear-gradient(135deg, #10b981, #059669)',
    'linear-gradient(135deg, #f59e0b, #d97706)',
    'linear-gradient(135deg, #8b5cf6, #ec4899)',
    'linear-gradient(135deg, #14b8a6, #06b6d4)'
  ];

  function getGradientForName(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return GRADIENTS[Math.abs(hash) % GRADIENTS.length];
  }

  // --- App State ---
  const state = {
    allChannels: [],
    filteredChannels: [],
    currentChannel: null,
    currentIndex: -1,
    favorites: new Set(),
    history: [],
    openGroups: new Set(),
    activeTab: 'all', // 'all', 'favorites', 'history'
    groupBy: 'genre', // 'genre', 'country', 'language', 'none'
    filters: {
      search: '',
      country: '',
      genre: '',
      language: '',
      quality: ''
    },
    useCorsProxy: localStorage.getItem('nova_use_cors_proxy') === 'true',
    volume: parseFloat(localStorage.getItem('nova_volume') || '1'),
    muted: localStorage.getItem('nova_muted') === 'true',
    streamHealth: loadStreamHealth(),
    hideOffline: false,
    statusFilter: '',
    subtitlesEnabled: localStorage.getItem('nova_subtitles') === 'true',
    isProbing: false
  };

  let hls = null;
  let dashPlayer = null;
  let searchTimer = null;
  let overlayTimer = null;

  // --- DOM Elements ---
  const els = {
    totalCountBadge: document.getElementById('total-count-badge'),
    fileInput: document.getElementById('file-input'),
    dropzoneFileInput: document.getElementById('dropzone-file-input'),
    fileDropzone: document.getElementById('file-dropzone'),
    tabAllBtn: document.getElementById('tab-all-btn'),
    tabFavBtn: document.getElementById('tab-fav-btn'),
    tabRecentBtn: document.getElementById('tab-recent-btn'),
    badgeAll: document.getElementById('badge-all'),
    badgeFav: document.getElementById('badge-fav'),
    badgeRecent: document.getElementById('badge-recent'),
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    groupBySelect: document.getElementById('group-by-select'),
    countryFilter: document.getElementById('country-filter'),
    genreFilter: document.getElementById('genre-filter'),
    languageFilter: document.getElementById('language-filter'),
    qualityFilter: document.getElementById('quality-filter'),
    expandAllBtn: document.getElementById('expand-all-btn'),
    collapseAllBtn: document.getElementById('collapse-all-btn'),
    resetAllFiltersBtn: document.getElementById('reset-all-filters-btn'),
    channelGroupsContainer: document.getElementById('channel-groups-container'),
    sidebarLoading: document.getElementById('sidebar-loading'),
    renderedCountText: document.getElementById('rendered-count-text'),
    exportFavsBtn: document.getElementById('export-favs-btn'),
    pullUpdatedBtn: document.getElementById('pull-updated-channels-btn'),
    openUrlModalBtn: document.getElementById('open-url-modal-btn'),
    urlModal: document.getElementById('url-modal'),
    closeUrlModalBtn: document.getElementById('close-url-modal-btn'),
    playlistUrlInput: document.getElementById('playlist-url-input'),
    loadUrlSubmitBtn: document.getElementById('load-url-submit-btn'),
    checkHealthBtn: document.getElementById('check-health-btn'),
    healthBtnText: document.getElementById('health-btn-text'),
    hideOfflineCheckbox: document.getElementById('hide-offline-checkbox'),
    statusFilterSelect: document.getElementById('status-filter-select'),
    healthStats: document.getElementById('health-stats'),
    probeProgressBar: document.getElementById('probe-progress-bar'),
    probeProgressFill: document.getElementById('probe-progress-fill'),
    // Player
    videoContainer: document.getElementById('video-container'),
    video: document.getElementById('iptv-video'),
    playerPlaceholder: document.getElementById('player-placeholder'),
    bufferingSpinner: document.getElementById('buffering-spinner'),
    streamErrorCard: document.getElementById('stream-error-card'),
    errorCloseBtn: document.getElementById('error-close-btn'),
    errorTitle: document.getElementById('error-title'),
    errorDesc: document.getElementById('error-desc'),
    errorVlcBtn: document.getElementById('error-vlc-btn'),
    errorPopupBtn: document.getElementById('error-popup-btn'),
    errorCopyBtn: document.getElementById('error-copy-btn'),
    errorNextBtn: document.getElementById('error-next-btn'),
    videoOverlayControls: document.getElementById('video-overlay-controls'),
    headerAvatarWrap: document.getElementById('header-avatar-wrap'),
    headerFlag: document.getElementById('header-flag'),
    headerChannelTitle: document.getElementById('header-channel-title'),
    headerGenreBadge: document.getElementById('header-genre-badge'),
    headerCountryBadge: document.getElementById('header-country-badge'),
    headerQualityBadge: document.getElementById('header-quality-badge'),
    headerLangBadge: document.getElementById('header-lang-badge'),
    openPopupBtn: document.getElementById('open-popup-btn') || document.getElementById('open-vlc-btn'),
    openVlcBtn: document.getElementById('open-vlc-btn') || document.getElementById('open-popup-btn'),
    copyUrlBtn: document.getElementById('copy-url-btn'),
    headerFavBtn: document.getElementById('header-fav-btn'),
    ctrlPlayBtn: document.getElementById('ctrl-play-btn'),
    iconPlay: document.querySelector('.icon-play'),
    iconPause: document.querySelector('.icon-pause'),
    ctrlPrevBtn: document.getElementById('ctrl-prev-btn'),
    ctrlNextBtn: document.getElementById('ctrl-next-btn'),
    ctrlMuteBtn: document.getElementById('ctrl-mute-btn'),
    iconVolOn: document.querySelector('.icon-vol-on'),
    iconVolOff: document.querySelector('.icon-vol-off'),
    volumeSlider: document.getElementById('volume-slider'),
    equalizerBars: document.getElementById('equalizer-bars'),
    streamInfoTag: document.getElementById('stream-info-tag'),
    ctrlPipBtn: document.getElementById('ctrl-pip-btn'),
    ctrlFullscreenBtn: document.getElementById('ctrl-fullscreen-btn'),
    streamUrlDisplay: document.getElementById('stream-url-display'),
    toastBox: document.getElementById('toast-box'),
    appContainer: document.getElementById('app-container'),
    sidebarPanel: document.getElementById('sidebar-panel'),
    playerStage: document.getElementById('player-stage'),
    scrollToChannelsBtn: document.getElementById('scroll-to-channels-btn'),
    scrollToPlayerBtn: document.getElementById('scroll-to-player-btn'),
    toggleSplitBtn: document.getElementById('toggle-split-btn'),
    toggleSplitText: document.getElementById('toggle-split-text'),
    fsTopBar: document.getElementById('fullscreen-top-bar'),
    fsExitBtn: document.getElementById('fs-exit-btn'),
    fsChannelFlag: document.getElementById('fs-channel-flag'),
    fsChannelName: document.getElementById('fs-channel-name'),
    fsVlcBtn: document.getElementById('fs-vlc-btn'),
    fsCenterControls: document.getElementById('fullscreen-center-controls'),
    fsPrevBtn: document.getElementById('fs-prev-btn'),
    fsPlayBtn: document.getElementById('fs-play-btn'),
    fsNextBtn: document.getElementById('fs-next-btn'),
    fsIconPlay: document.querySelector('.fs-icon-play'),
    fsIconPause: document.querySelector('.fs-icon-pause'),
    sidebarFilters: document.getElementById('sidebar-filters'),
    filtersToggleBar: document.getElementById('filters-toggle-bar'),
    filtersCollapseBtn: document.getElementById('filters-collapse-btn'),
    filtersCollapseIcon: document.getElementById('filters-collapse-icon'),
    filtersCollapseText: document.getElementById('filters-collapse-text'),
    activeChipsContainer: document.getElementById('active-chips-container'),
    miniCheckHealthBtn: document.getElementById('mini-check-health-btn'),
    fsCastBtn: document.getElementById('fs-cast-btn'),
    ctrlCastBtn: document.getElementById('ctrl-cast-btn'),
    vTopCastBtn: document.getElementById('v-top-cast-btn'),
    videoCenterPlayBtn: document.getElementById('video-center-play-btn'),
    vCenterIconPlay: document.querySelector('.v-center-icon-play'),
    vCenterIconPause: document.querySelector('.v-center-icon-pause'),
    castModal: document.getElementById('cast-modal'),
    closeCastModalBtn: document.getElementById('close-cast-modal-btn'),
    castPreviewFlag: document.getElementById('cast-preview-flag'),
    castPreviewName: document.getElementById('cast-preview-name'),
    castPreviewMeta: document.getElementById('cast-preview-meta'),
    castStreamUrlInput: document.getElementById('cast-stream-url-input'),
    modalCopyStreamBtn: document.getElementById('modal-copy-stream-btn'),
    modalChromecastBtn: document.getElementById('modal-chromecast-btn'),
    modalAirplayBtn: document.getElementById('modal-airplay-btn'),
    ctrlCcBtn: document.getElementById('ctrl-cc-btn'),
    fsCcBtn: document.getElementById('fs-cc-btn')
  };

  // --- Fast In-Browser M3U Parser ---
  function parseM3U(text) {
    const lines = text.split(/\r?\n/);
    const channels = [];
    let cur = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      if (line.startsWith('#EXTINF:')) {
        cur = {};
        // tvg-id
        const mId = line.match(/tvg-id="([^"]*)"/i);
        cur.tvg_id = mId ? mId[1].trim() : '';

        // tvg-logo
        const mLogo = line.match(/tvg-logo="([^"]*)"/i);
        cur.logo = mLogo ? mLogo[1].trim() : '';

        // group-title
        const mGrp = line.match(/group-title="([^"]*)"/i);
        let grp = mGrp ? mGrp[1].trim() : '';
        if (!grp || grp.toLowerCase() === 'undefined') grp = 'General';
        cur.group = grp;

        // name
        const commaIdx = line.lastIndexOf(',');
        cur.name = commaIdx !== -1 ? line.substring(commaIdx + 1).trim() : (cur.tvg_id || 'Unknown Channel');

        // Country code extraction from tvg-id
        let cc = 'int';
        if (cur.tvg_id) {
          const mCc = cur.tvg_id.match(/\.([a-z]{2})(?:@|$)/i);
          if (mCc) cc = mCc[1].toLowerCase();
        }
        cur.country_code = cc;

        if (COUNTRY_MAP[cc]) {
          cur.country_name = COUNTRY_MAP[cc][0];
          cur.language = COUNTRY_MAP[cc][1];
          cur.flag = countryCodeToFlag(cc);
        } else if (cc === 'int') {
          cur.country_name = 'Global / International';
          cur.language = 'Various';
          cur.flag = '🌐';
        } else {
          cur.country_name = cc.toUpperCase();
          cur.language = 'Other';
          cur.flag = countryCodeToFlag(cc);
        }

        // Quality
        const combo = (cur.name + ' ' + cur.tvg_id).toLowerCase();
        if (combo.includes('4k') || combo.includes('uhd') || combo.includes('2160p')) {
          cur.quality = '4K UHD';
        } else if (combo.includes('1080p') || combo.includes('1080i') || combo.includes('@fhd')) {
          cur.quality = '1080p FHD';
        } else if (combo.includes('720p') || combo.includes('@hd')) {
          cur.quality = '720p HD';
        } else if (combo.includes('576p') || combo.includes('480p') || combo.includes('@sd')) {
          cur.quality = 'SD';
        } else {
          cur.quality = 'Auto';
        }

      } else if (!line.startsWith('#') && cur) {
        cur.url = line;
        cur.id = 'ch_' + channels.length;
        channels.push(cur);
        cur = null;
      }
    }

    return channels;
  }

  // --- Toast Notification ---
  function showToast(msg, icon = 'ℹ️') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
    els.toastBox.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  // --- LocalStorage Favorites & History ---
  function loadStoredData() {
    try {
      const favs = localStorage.getItem('nova_iptv_favorites');
      if (favs) state.favorites = new Set(JSON.parse(favs));

      const hist = localStorage.getItem('nova_iptv_history');
      if (hist) state.history = JSON.parse(hist);
    } catch (e) {
      console.warn(e);
    }
    updateTabBadges();
  }

  function saveFavorites() {
    try {
      localStorage.setItem('nova_iptv_favorites', JSON.stringify(Array.from(state.favorites)));
    } catch (e) {
      console.warn(e);
    }
    updateTabBadges();
  }

  function saveHistory() {
    try {
      localStorage.setItem('nova_iptv_history', JSON.stringify(state.history.slice(0, 100)));
    } catch (e) {
      console.warn(e);
    }
    updateTabBadges();
  }

  function updateTabBadges() {
    els.badgeAll.textContent = state.allChannels.length.toLocaleString();
    els.badgeFav.textContent = state.favorites.size.toLocaleString();
    els.badgeRecent.textContent = state.history.length.toLocaleString();
  }

  function toggleFavorite(chId) {
    const isFav = state.favorites.has(chId);
    if (isFav) {
      state.favorites.delete(chId);
      showToast('Removed from Favorites', '💔');
    } else {
      state.favorites.add(chId);
      showToast('Added to Favorites', '❤️');
    }
    saveFavorites();

    // Update heart icons
    document.querySelectorAll(`.item-fav-btn[data-id="${chId}"]`).forEach(btn => {
      btn.classList.toggle('favorited', !isFav);
    });

    if (state.currentChannel && state.currentChannel.id === chId) {
      els.headerFavBtn.classList.toggle('favorited', !isFav);
    }

    if (state.activeTab === 'favorites') {
      applyFiltersAndRender();
    }
  }

  // --- Stream Health Cache & Prober ---
  function loadStreamHealth() {
    try {
      const raw = localStorage.getItem('nova_stream_health');
      if (raw) {
        const parsed = JSON.parse(raw);
        const map = new Map();
        const now = Date.now();
        const MAX_AGE = 12 * 60 * 60 * 1000; // 12h cache
        for (const [id, item] of Object.entries(parsed)) {
          if (item && now - item.timestamp < MAX_AGE) {
            map.set(id, item);
          }
        }
        return map;
      }
    } catch (_) {}
    return new Map();
  }

  function saveStreamHealth() {
    try {
      const obj = {};
      state.streamHealth.forEach((val, key) => {
        obj[key] = val;
      });
      localStorage.setItem('nova_stream_health', JSON.stringify(obj));
    } catch (_) {}
  }

  function updateChannelRowStatus(chId, status, shouldSave = true) {
    state.streamHealth.set(chId, { status, timestamp: Date.now() });
    if (shouldSave) saveStreamHealth();

    const row = document.getElementById(`row-${chId}`);
    if (!row) return;

    let pill = row.querySelector('.item-status-pill');
    if (!pill) {
      pill = document.createElement('span');
      pill.className = 'item-status-pill';
      const nameEl = row.querySelector('.item-name');
      if (nameEl) nameEl.insertAdjacentElement('afterend', pill);
    }

    pill.className = `item-status-pill ${status}`;
    const tooltips = {
      online: 'Live & Verified Playable in Browser',
      vlc: 'Live (CORS restricted - Works in VLC)',
      offline: 'Offline / Inaccessible / Blocked',
      testing: 'Checking status...'
    };
    pill.title = tooltips[status] || '';

    if (status === 'offline') {
      row.classList.add('is-offline');
    } else {
      row.classList.remove('is-offline');
    }
  }

  // Probe single channel stream URL with deep content inspection
  async function probeSingleChannel(url, timeoutMs = 3500) {
    if (!url || typeof url !== 'string') return 'offline';
    url = url.trim();

    // 1. Direct CORS Probe (Determines if stream plays natively in browser)
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), timeoutMs);
      const res = await fetch(url, {
        method: 'GET',
        signal: ctrl.signal,
        mode: 'cors',
        cache: 'no-cache'
      });
      clearTimeout(timer);

      if (res.ok) {
        // Inspect body chunk to eliminate false positives (e.g. 200 OK HTML error/block/parking pages)
        const sample = await res.text().then(t => t.slice(0, 1500)).catch(() => '');
        const isHtml = sample.startsWith('<!DOCTYPE') ||
                       sample.startsWith('<html') ||
                       sample.includes('<title>404') ||
                       sample.includes('<title>403') ||
                       sample.includes('Cloudflare') ||
                       sample.includes('Access Denied');

        if (!isHtml && (sample.includes('#EXTM3U') || sample.includes('#EXT-X-') || sample.includes('#EXTINF'))) {
          return 'online'; // 🟢 100% verified browser playable
        }
        if (isHtml) {
          return 'offline'; // 🔴 HTML block / parking page
        }
        return 'online';
      } else if (res.status === 404 || res.status === 410 || res.status === 403 || res.status === 500) {
        return 'offline'; // 🔴 Hard HTTP error
      }
    } catch (_) {
      // Direct CORS failed / blocked
    }

    // 2. Opaque Network Probe (Checks if host is alive on the internet for VLC without browser CORS)
    try {
      const ctrl2 = new AbortController();
      const timer2 = setTimeout(() => ctrl2.abort(), 2500);
      const res2 = await fetch(url, {
        method: 'GET',
        signal: ctrl2.signal,
        mode: 'no-cors',
        cache: 'no-cache'
      });
      clearTimeout(timer2);

      // In web standards, 'opaque' indicates server returned 200/data bytes but withheld CORS headers
      if (res2.type === 'opaque') {
        return 'vlc'; // 🟠 Server alive! Works in VLC Player
      }
      return 'offline';
    } catch (_) {
      return 'offline'; // 🔴 Server dead, connection refused, DNS failure, or timed out
    }
  }

  // Batch probe filtered channels
  async function probeFilteredChannels() {
    if (state.isProbing) return;

    // Scan up to 300 channels in active view
    const listToProbe = state.filteredChannels.slice(0, 300);
    if (!listToProbe.length) {
      showToast('No channels in active filter to check', 'ℹ️');
      return;
    }

    state.isProbing = true;
    els.checkHealthBtn.classList.add('checking');
    els.healthBtnText.textContent = 'Scanning...';
    els.probeProgressBar.style.display = 'block';
    els.probeProgressFill.style.width = '0%';
    els.healthStats.style.display = 'inline-block';

    let done = 0;
    let onlineCount = 0;
    let vlcCount = 0;
    let offlineCount = 0;
    const total = listToProbe.length;

    function updateStats() {
      els.healthStats.innerHTML = `<span style="color:var(--accent-emerald);">🟢 ${onlineCount}</span> <span style="color:#f59e0b;">🟠 ${vlcCount}</span> <span style="color:var(--accent-rose);">🔴 ${offlineCount}</span>`;
      const pct = Math.round((done / total) * 100);
      els.probeProgressFill.style.width = `${pct}%`;
    }

    updateStats();

    // Mark as testing in DOM
    listToProbe.forEach(ch => {
      const row = document.getElementById(`row-${ch.id}`);
      if (row) {
        let pill = row.querySelector('.item-status-pill');
        if (!pill) {
          pill = document.createElement('span');
          pill.className = 'item-status-pill testing';
          pill.title = 'Checking status...';
          row.querySelector('.item-name')?.insertAdjacentElement('afterend', pill);
        } else {
          pill.className = 'item-status-pill testing';
          pill.title = 'Checking status...';
        }
      }
    });

    const CONCURRENCY = 8;
    let idx = 0;

    async function worker() {
      while (idx < listToProbe.length) {
        const ch = listToProbe[idx++];
        const status = await probeSingleChannel(ch.url);
        if (status === 'online') onlineCount++;
        else if (status === 'vlc') vlcCount++;
        else offlineCount++;

        done++;
        updateChannelRowStatus(ch.id, status, false);
        updateStats();
      }
    }

    const workers = Array.from({ length: Math.min(CONCURRENCY, total) }, () => worker());
    await Promise.all(workers);

    // Save batch updates in a single localStorage call
    saveStreamHealth();

    state.isProbing = false;
    els.checkHealthBtn.classList.remove('checking');
    els.healthBtnText.textContent = 'Re-Scan';
    els.probeProgressFill.style.width = '100%';
    setTimeout(() => {
      els.probeProgressBar.style.display = 'none';
    }, 1500);

    // If Hide Dead is active, refresh the list to immediately prune newly detected dead channels
    if (state.hideOffline) {
      applyFiltersAndRender();
    }

    showToast(`Scan complete: ${onlineCount} Browser Live, ${vlcCount} VLC, ${offlineCount} Blocked/Dead`, '⚡');
  }

  // --- IndexedDB Channel Cache for Instant Zero-Second Startup ---
  const DB_NAME = 'NovaIPTV_DB';
  const DB_VERSION = 1;
  const STORE_NAME = 'channels_cache';

  function openDatabase() {
    return new Promise((resolve, reject) => {
      if (!window.indexedDB) {
        return reject(new Error('IndexedDB not supported'));
      }
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function getSavedChannels() {
    try {
      const db = await openDatabase();
      return new Promise((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.get('saved_playlist');
        req.onsuccess = () => {
          if (req.result && Array.isArray(req.result.channels) && req.result.channels.length > 0) {
            resolve(req.result);
          } else {
            resolve(null);
          }
        };
        req.onerror = () => resolve(null);
      });
    } catch (_) {
      return null;
    }
  }

  async function saveChannelsToCache(channels, source) {
    // Only cache full master playlists to IndexedDB, NEVER single streams or tiny subsets
    if (!channels || channels.length < 500) return;
    try {
      const db = await openDatabase();
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put({
        id: 'saved_playlist',
        source: source || './playlist.m3u',
        timestamp: Date.now(),
        channels: channels
      });
    } catch (e) {
      console.warn('Failed to cache channels in IndexedDB:', e);
    }
  }

  // --- Playlist Loader ---
  const DEFAULT_PLAYLIST_URL = './playlist.m3u';

  async function loadPlaylist(sourceUrl, forceNetwork = false) {
    // If old slow remote URL or a single stream was saved in localStorage, reset to bundled playlist
    let storedUrl = localStorage.getItem('nova_playlist_url');
    if (storedUrl === 'https://iptv-org.github.io/iptv/index.m3u' || (storedUrl && (storedUrl.endsWith('.mpd') || storedUrl.includes('mcquack') || storedUrl.includes('hevc_')))) {
      storedUrl = DEFAULT_PLAYLIST_URL;
      localStorage.setItem('nova_playlist_url', DEFAULT_PLAYLIST_URL);
    }

    const url = sourceUrl || storedUrl || DEFAULT_PLAYLIST_URL;

    // 1. FAST PATH: Instant startup from saved IndexedDB cache (only if full playlist >= 500 channels)
    if (!forceNetwork && !sourceUrl) {
      const cached = await getSavedChannels();
      if (cached && cached.channels && cached.channels.length >= 500) {
        console.log(`Instant startup from saved playlist cache: ${cached.channels.length} channels`);
        state.allChannels = cached.channels;
        els.sidebarLoading.style.display = 'none';
        els.fileDropzone.style.display = 'none';
        els.totalCountBadge.textContent = `${state.allChannels.length.toLocaleString()} channels`;

        populateDropdownFilters();
        populateGenreFilter();
        updateTabBadges();
        applyFiltersAndRender();
        showToast(`Loaded ${state.allChannels.length.toLocaleString()} channels (Instant Cache)`, '⚡');
        return;
      } else {
        // Cache is polluted with a single stream or subset - discard and force network reload of ./playlist.m3u
        console.log('Cached playlist contains insufficient channels. Reloading bundled ./playlist.m3u...');
        localStorage.setItem('nova_playlist_url', DEFAULT_PLAYLIST_URL);
      }
    }

    // 2. NETWORK PATH: Load from URL (bundled local ./playlist.m3u or custom)
    els.sidebarLoading.style.display = 'flex';
    els.fileDropzone.style.display = 'none';

    const loadingText = els.sidebarLoading.querySelector('span');
    const isOnlineUrl = url.startsWith('http://') || url.startsWith('https://');

    if (loadingText) {
      loadingText.textContent = isOnlineUrl
        ? `Fetching channels from ${url.replace('https://', '')}...`
        : `Loading saved playlist (${url})...`;
    }

    try {
      console.log(`Fetching M3U from: ${url}`);
      const res = await fetch(url);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const text = await res.text();
      localStorage.setItem('nova_playlist_url', url);
      onPlaylistLoaded(text, isOnlineUrl ? 'Remote URL' : 'Saved playlist.m3u');
    } catch (err) {
      console.warn(`Fetch from ${url} failed:`, err);

      // Fallback: If custom/remote URL failed, try local ./playlist.m3u
      if (url !== './playlist.m3u') {
        try {
          const resLocal = await fetch('./playlist.m3u');
          if (resLocal.ok) {
            const textLocal = await resLocal.text();
            onPlaylistLoaded(textLocal, 'Saved playlist.m3u');
            return;
          }
        } catch (_) {}
      }

      // Check saved cache as fallback
      const cachedFallback = await getSavedChannels();
      if (cachedFallback && cachedFallback.channels) {
        state.allChannels = cachedFallback.channels;
        els.sidebarLoading.style.display = 'none';
        els.fileDropzone.style.display = 'none';
        els.totalCountBadge.textContent = `${state.allChannels.length.toLocaleString()} channels`;
        populateDropdownFilters();
        populateGenreFilter();
        updateTabBadges();
        applyFiltersAndRender();
        showToast('Loaded channels from saved cache', '📦');
      } else {
        els.sidebarLoading.style.display = 'none';
        els.fileDropzone.style.display = 'flex';
        els.totalCountBadge.textContent = 'Please select playlist.m3u';
      }
    }
  }

  function onPlaylistLoaded(text, filename = 'playlist.m3u') {
    const t0 = performance.now();
    state.allChannels = parseM3U(text);
    const t1 = performance.now();

    console.log(`Parsed ${state.allChannels.length} channels in ${(t1 - t0).toFixed(1)}ms`);
    els.sidebarLoading.style.display = 'none';
    els.fileDropzone.style.display = 'none';
    els.totalCountBadge.textContent = `${state.allChannels.length.toLocaleString()} channels`;

    // Persist parsed channels to IndexedDB for instant sub-second startup on next visit
    saveChannelsToCache(state.allChannels, filename);

    populateDropdownFilters();
    populateGenreFilter();
    updateTabBadges();
    applyFiltersAndRender();
    showToast(`Loaded ${state.allChannels.length.toLocaleString()} channels from ${filename}`, '✅');
  }

  // --- Populate Filter Dropdowns ---
  function populateGenreFilter(selectedCountry = '') {
    if (!els.genreFilter) return;
    const currentGenre = state.filters.genre;
    const genreCounts = {};

    const targetChannels = selectedCountry
      ? state.allChannels.filter(c => c.country_code === selectedCountry)
      : state.allChannels;

    targetChannels.forEach(c => {
      const genres = c.group.split(';').map(x => x.trim()).filter(Boolean);
      genres.forEach(g => {
        genreCounts[g] = (genreCounts[g] || 0) + 1;
      });
    });

    els.genreFilter.innerHTML = `<option value="">All Genres (${Object.keys(genreCounts).length})</option>`;
    Object.entries(genreCounts)
      .sort((a, b) => b[1] - a[1])
      .forEach(([genre, count]) => {
        const icon = GENRE_ICONS[genre] || '🎬';
        const opt = document.createElement('option');
        opt.value = genre;
        opt.textContent = `${icon} ${genre} (${count})`;
        if (genre === currentGenre) opt.selected = true;
        els.genreFilter.appendChild(opt);
      });

    if (currentGenre && !genreCounts[currentGenre]) {
      state.filters.genre = '';
    }
  }

  function populateDropdownFilters() {
    const countries = {};
    const languages = {};

    state.allChannels.forEach(c => {
      const cc = c.country_code || 'int';
      if (!countries[cc]) {
        countries[cc] = { name: c.country_name, flag: c.flag, count: 0 };
      }
      countries[cc].count++;

      const lang = c.language || 'Other';
      languages[lang] = (languages[lang] || 0) + 1;
    });

    // Country select - Top 20 by channel count first, then alphabetical A-Z for the rest
    els.countryFilter.innerHTML = '<option value="">All Countries</option>';
    const countriesList = Object.entries(countries);
    const byCount = [...countriesList].sort((a, b) => b[1].count - a[1].count);
    const top20 = byCount.slice(0, 20);
    const top20Keys = new Set(top20.map(([cc]) => cc));
    const rest = countriesList
      .filter(([cc]) => !top20Keys.has(cc))
      .sort((a, b) => a[1].name.localeCompare(b[1].name));

    const optGroupTop = document.createElement('optgroup');
    optGroupTop.label = '⭐ Top 20 Countries';
    top20.forEach(([cc, data]) => {
      const opt = document.createElement('option');
      opt.value = cc;
      opt.textContent = `${data.flag} ${data.name} (${data.count})`;
      optGroupTop.appendChild(opt);
    });
    els.countryFilter.appendChild(optGroupTop);

    if (rest.length > 0) {
      const optGroupRest = document.createElement('optgroup');
      optGroupRest.label = '🌐 Other Countries (A–Z)';
      rest.forEach(([cc, data]) => {
        const opt = document.createElement('option');
        opt.value = cc;
        opt.textContent = `${data.flag} ${data.name} (${data.count})`;
        optGroupRest.appendChild(opt);
      });
      els.countryFilter.appendChild(optGroupRest);
    }

    // Language select - sorted alphabetically A to Z
    els.languageFilter.innerHTML = '<option value="">All</option>';
    Object.entries(languages)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(([lang, count]) => {
        const opt = document.createElement('option');
        opt.value = lang;
        opt.textContent = `${lang} (${count})`;
        els.languageFilter.appendChild(opt);
      });
  }

  // --- Filtering & Grouping Logic ---
  function applyFiltersAndRender() {
    let list = state.allChannels;

    // Tab filter
    if (state.activeTab === 'favorites') {
      list = list.filter(c => state.favorites.has(c.id));
    } else if (state.activeTab === 'history') {
      const histMap = new Map(state.history.map((id, idx) => [id, idx]));
      list = list.filter(c => histMap.has(c.id)).sort((a, b) => histMap.get(a.id) - histMap.get(b.id));
    }

    // Country filter
    if (state.filters.country) {
      list = list.filter(c => c.country_code === state.filters.country);
    }

    // Genre filter
    if (state.filters.genre) {
      const g = state.filters.genre.toLowerCase();
      list = list.filter(c => c.group.toLowerCase().split(';').some(x => x.trim() === g));
    }

    // Language filter
    if (state.filters.language) {
      list = list.filter(c => c.language === state.filters.language);
    }

    // Quality filter
    if (state.filters.quality) {
      list = list.filter(c => c.quality === state.filters.quality);
    }

    // Search query
    if (state.filters.search) {
      const q = state.filters.search.toLowerCase();
      list = list.filter(c => {
        return c.name.toLowerCase().includes(q) ||
               c.group.toLowerCase().includes(q) ||
               c.country_name.toLowerCase().includes(q) ||
               (c.language && c.language.toLowerCase().includes(q));
      });
    }

    // Stream status filter (All, Browser Only, Hide Dead, Offline Only)
    if (state.statusFilter === 'browser') {
      list = list.filter(c => {
        const h = state.streamHealth.get(c.id);
        return h && h.status === 'online';
      });
    } else if (state.statusFilter === 'live' || state.hideOffline) {
      list = list.filter(c => {
        const h = state.streamHealth.get(c.id);
        return !h || h.status !== 'offline';
      });
    } else if (state.statusFilter === 'offline') {
      list = list.filter(c => {
        const h = state.streamHealth.get(c.id);
        return h && h.status === 'offline';
      });
    }

    state.filteredChannels = list;
    els.renderedCountText.textContent = `${list.length.toLocaleString()} channels matching`;

    updateFilterChips();
    renderVerticalGroupedList();
  }

  // --- Filter Collapse & Chips Management ---
  function updateFilterChips() {
    if (!els.activeChipsContainer) return;
    els.activeChipsContainer.innerHTML = '';

    const chips = [];

    if (state.filters.country) {
      const opt = els.countryFilter.querySelector(`option[value="${state.filters.country}"]`);
      chips.push(opt ? opt.textContent.split('(')[0].trim() : state.filters.country);
    }
    if (state.filters.genre) {
      chips.push(state.filters.genre);
    }
    if (state.filters.language) {
      chips.push(state.filters.language);
    }
    if (state.filters.quality) {
      chips.push(state.filters.quality.replace(' FHD', '').replace(' UHD', ''));
    }
    if (state.statusFilter === 'browser') {
      chips.push('🟢 Browser Only');
    } else if (state.statusFilter === 'live' || state.hideOffline) {
      chips.push('🟢+🟠 Hide Dead');
    } else if (state.statusFilter === 'offline') {
      chips.push('🔴 Dead Only');
    }
    if (state.groupBy && state.groupBy !== 'genre') {
      chips.push(`Group: ${state.groupBy}`);
    }

    if (chips.length === 0) {
      const chip = document.createElement('span');
      chip.className = 'filter-chip';
      chip.textContent = 'All Channels';
      els.activeChipsContainer.appendChild(chip);
    } else {
      chips.forEach(text => {
        const chip = document.createElement('span');
        chip.className = 'filter-chip';
        chip.textContent = text;
        els.activeChipsContainer.appendChild(chip);
      });
    }
  }

  function setFiltersCollapsed(collapsed) {
    if (!els.sidebarFilters) return;
    els.sidebarFilters.classList.toggle('collapsed', collapsed);
    if (els.filtersCollapseIcon) {
      els.filtersCollapseIcon.textContent = collapsed ? '▼' : '▲';
    }
    if (els.filtersCollapseText) {
      els.filtersCollapseText.textContent = collapsed ? 'Filters' : 'Hide';
    }
    updateFilterChips();
    localStorage.setItem('nova_filters_collapsed', collapsed ? 'true' : 'false');
  }

  function toggleFiltersCollapsed() {
    if (!els.sidebarFilters) return;
    const isCollapsed = els.sidebarFilters.classList.contains('collapsed');
    setFiltersCollapsed(!isCollapsed);
  }

  // --- Render Vertical Grouped List (NOT tiles, list grouped by genre/etc) ---
  function renderVerticalGroupedList() {
    els.channelGroupsContainer.innerHTML = '';

    if (state.filteredChannels.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'sidebar-loading';
      empty.innerHTML = `<span>No channels match the active filter.</span>`;
      els.channelGroupsContainer.appendChild(empty);
      return;
    }

    // Grouping
    const groups = new Map();
    const groupBy = state.groupBy;

    state.filteredChannels.forEach(ch => {
      let key = 'General';
      let icon = '📺';

      if (groupBy === 'genre') {
        const primaryGroup = ch.group.split(';')[0].trim() || 'General';
        key = primaryGroup;
        icon = GENRE_ICONS[key] || '🎬';
      } else if (groupBy === 'country') {
        key = ch.country_name || 'Global';
        icon = ch.flag || '🌐';
      } else if (groupBy === 'language') {
        key = ch.language || 'Other';
        icon = '🗣️';
      } else {
        key = 'All Channels';
        icon = '📺';
      }

      if (!groups.has(key)) {
        groups.set(key, { key, icon, items: [] });
      }
      groups.get(key).items.push(ch);
    });

    // Sort groups:
    // - Country: Top 20 countries with largest channel count first, then alphabetical A-Z for the rest
    // - Language: Alphabetical A-Z
    // - Other (Genre/etc): Largest first
    let sortedGroups;
    if (groupBy === 'country') {
      const allGroups = Array.from(groups.values());
      const byCount = [...allGroups].sort((a, b) => b.items.length - a.items.length);
      const top20 = byCount.slice(0, 20);
      const top20Keys = new Set(top20.map(g => g.key));
      const rest = allGroups
        .filter(g => !top20Keys.has(g.key))
        .sort((a, b) => a.key.localeCompare(b.key));
      sortedGroups = [...top20, ...rest];
    } else if (groupBy === 'language') {
      sortedGroups = Array.from(groups.values()).sort((a, b) => a.key.localeCompare(b.key));
    } else {
      sortedGroups = Array.from(groups.values()).sort((a, b) => b.items.length - a.items.length);
    }

    // Inside each group, sort channels alphabetically
    sortedGroups.forEach(g => {
      g.items.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    });

    // If searching or very few groups, expand all; otherwise keep first group open by default if nothing selected yet
    if (state.filters.search || sortedGroups.length <= 2) {
      sortedGroups.forEach(g => state.openGroups.add(g.key));
    } else if (state.openGroups.size === 0 && sortedGroups.length > 0) {
      state.openGroups.add(sortedGroups[0].key);
    }

    const frag = document.createDocumentFragment();

    sortedGroups.forEach(grp => {
      const block = document.createElement('div');
      const isOpen = state.openGroups.has(grp.key);
      block.className = `channel-group-block ${isOpen ? 'open' : ''}`;
      block.id = `group-${grp.key.replace(/\W+/g, '-')}`;

      // Accordion Header
      const header = document.createElement('div');
      header.className = 'group-header';
      header.innerHTML = `
        <div class="group-title-wrap">
          <span class="group-icon">${grp.icon}</span>
          <span class="group-name">${escapeHtml(grp.key)}</span>
        </div>
        <div class="group-meta-wrap">
          <span class="group-count-pill">${grp.items.length.toLocaleString()}</span>
          <svg class="group-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      `;

      header.addEventListener('click', () => {
        const isNowOpen = block.classList.toggle('open');
        if (isNowOpen) {
          state.openGroups.add(grp.key);
        } else {
          state.openGroups.delete(grp.key);
        }
      });

      // Vertical Channel List Items
      const itemsList = document.createElement('div');
      itemsList.className = 'channel-items-list';

      // Render items (cap initial render per group to 100 for instantaneous responsiveness)
      const renderLimit = grp.items.length > 120 ? 100 : grp.items.length;
      for (let i = 0; i < renderLimit; i++) {
        const ch = grp.items[i];
        const itemEl = createChannelRowElement(ch);
        itemsList.appendChild(itemEl);
      }

      // If more channels in group, show "Show more" button
      if (grp.items.length > renderLimit) {
        const moreBtn = document.createElement('button');
        moreBtn.className = 'text-action-btn';
        moreBtn.style.padding = '6px 12px';
        moreBtn.textContent = `+ Show ${grp.items.length - renderLimit} more in ${grp.key}...`;
        moreBtn.addEventListener('click', () => {
          moreBtn.remove();
          for (let i = renderLimit; i < grp.items.length; i++) {
            itemsList.appendChild(createChannelRowElement(grp.items[i]));
          }
        });
        itemsList.appendChild(moreBtn);
      }

      block.appendChild(header);
      block.appendChild(itemsList);
      frag.appendChild(block);
    });

    els.channelGroupsContainer.appendChild(frag);
  }

  function createChannelRowElement(ch) {
    const row = document.createElement('div');
    const isPlaying = state.currentChannel && state.currentChannel.id === ch.id;
    const health = state.streamHealth.get(ch.id);

    let statusPill = '';
    let isOfflineClass = '';
    if (health) {
      const tooltips = {
        online: 'Live & Playable',
        vlc: 'Live in VLC (CORS restricted)',
        offline: 'Offline / Inaccessible',
        testing: 'Checking status...'
      };
      statusPill = `<span class="item-status-pill ${health.status}" title="${tooltips[health.status] || ''}"></span>`;
      if (health.status === 'offline') isOfflineClass = 'is-offline';
    }

    row.className = `channel-list-item ${isPlaying ? 'active' : ''} ${isOfflineClass}`;
    row.id = `row-${ch.id}`;

    const isFav = state.favorites.has(ch.id);

    let qualityClass = '';
    if (ch.quality.includes('1080p')) qualityClass = 'fhd';
    else if (ch.quality.includes('4K')) qualityClass = 'uhd';

    let logoContent = '';
    if (ch.logo) {
      logoContent = `<img class="item-logo-img" src="${escapeHtml(ch.logo)}" loading="lazy" onerror="this.remove()">`;
    } else {
      logoContent = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${getGradientForName(ch.name)}">${getInitials(ch.name)}</div>`;
    }

    row.innerHTML = `
      <div class="item-logo-box">${logoContent}</div>
      <span class="item-name" title="${escapeHtml(ch.name)}">${escapeHtml(ch.name)}</span>
      ${statusPill}
      <span class="item-flag">${ch.flag || '🌐'}</span>
      ${ch.quality !== 'Auto' ? `<span class="item-quality ${qualityClass}">${escapeHtml(ch.quality.replace(' UHD','').replace(' FHD','').replace(' HD',''))}</span>` : ''}
      <button class="item-fav-btn ${isFav ? 'favorited' : ''}" data-id="${ch.id}" title="Favorite">
        <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      </button>
    `;

    row.addEventListener('click', (e) => {
      if (e.target.closest('.item-fav-btn')) return;
      playChannel(ch);
    });

    const favBtn = row.querySelector('.item-fav-btn');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(ch.id);
    });

    return row;
  }

  // --- Video Player & VLC Integration ---
  function playChannel(ch) {
    if (!ch || !ch.url) return;

    state.currentChannel = ch;
    state.currentIndex = state.filteredChannels.findIndex(c => c.id === ch.id);

    // Save to history
    state.history = [ch.id, ...state.history.filter(id => id !== ch.id)];
    saveHistory();

    // Hide placeholder and error
    els.playerPlaceholder.style.display = 'none';
    els.streamErrorCard.style.display = 'none';
    els.bufferingSpinner.style.display = 'flex';

    // Update Header
    els.headerFlag.textContent = ch.flag || '🌐';
    els.headerChannelTitle.textContent = ch.name;
    els.headerGenreBadge.textContent = ch.group.split(';')[0];
    els.headerCountryBadge.textContent = ch.country_name;
    els.headerQualityBadge.textContent = ch.quality;

    if (ch.language && ch.language !== 'Various' && ch.language !== 'Other') {
      els.headerLangBadge.textContent = ch.language;
      els.headerLangBadge.style.display = 'inline-block';
    } else {
      els.headerLangBadge.style.display = 'none';
    }

    els.headerFavBtn.classList.toggle('favorited', state.favorites.has(ch.id));
    els.streamUrlDisplay.textContent = ch.url;
    syncFullscreenMetadata();

    // Highlight row
    document.querySelectorAll('.channel-list-item.active').forEach(r => r.classList.remove('active'));
    const activeRow = document.getElementById(`row-${ch.id}`);
    if (activeRow) activeRow.classList.add('active');

    // Immediate handling for known VLC-only channels or mixed-content HTTP
    const knownHealth = state.streamHealth.get(ch.id);
    const isHttpsOrigin = window.location.protocol === 'https:';
    const isPlainHttp = ch.url.startsWith('http://');

    if (knownHealth && knownHealth.status === 'vlc') {
      showStreamError(
        'Server Live • Pop-up Recommended',
        `This channel is actively broadcasting, but its media server blocks in-page web browsers (CORS policy). <a href="${escapeHtml(ch.url)}" class="error-popup-link" target="_blank" rel="noopener noreferrer">Click here to open in Pop-up</a> to stream directly!`,
        ch
      );
      return;
    }

    // Direct Stream URL
    const streamUrl = ch.url;

    // Load Stream in Player (MPEG-DASH vs HLS)
    clearOldSubtitles();
    const isDash = ch.url.toLowerCase().includes('.mpd');
    if (isDash) {
      setupDashPlayer(streamUrl, ch);
    } else {
      setupHlsPlayer(streamUrl, ch);
    }
  }

  // --- Subtitles & Closed Captions Management ---
  function clearOldSubtitles() {
    const video = els.video;
    if (!video) return;

    // 1. Remove all child <track> DOM elements
    video.querySelectorAll('track').forEach(t => t.remove());

    // 2. Disable and purge all native TextTracks cues from screen
    if (video.textTracks) {
      for (let i = 0; i < video.textTracks.length; i++) {
        try {
          const track = video.textTracks[i];
          track.mode = 'disabled';
          if (track.cues && track.removeCue) {
            for (let j = track.cues.length - 1; j >= 0; j--) {
              try { track.removeCue(track.cues[j]); } catch (e) {}
            }
          }
        } catch (e) {}
      }
    }

    // 3. Clear Hls subtitle tracks
    if (hls) {
      try {
        hls.subtitleTrack = -1;
        hls.subtitleDisplay = false;
      } catch (e) {}
    }
  }

  function applySubtitleState() {
    const video = els.video;
    if (!video) return;

    if (!state.subtitlesEnabled) {
      clearOldSubtitles();
    } else {
      if (hls && hls.subtitleTracks && hls.subtitleTracks.length > 0) {
        hls.subtitleDisplay = true;
        hls.subtitleTrack = 0;
      }

      // Enforce strict uniqueness: only the first track is allowed to show,
      // all other tracks (CC3, duplicate 708, etc.) are strictly disabled to prevent double captions!
      if (video.textTracks && video.textTracks.length > 0) {
        let firstTrackShowing = false;
        for (let i = 0; i < video.textTracks.length; i++) {
          const track = video.textTracks[i];
          if (!firstTrackShowing) {
            track.mode = 'showing';
            firstTrackShowing = true;
          } else {
            track.mode = 'disabled';
          }
        }
      }
    }

    [els.ctrlCcBtn, els.fsCcBtn].forEach(btn => {
      if (btn) btn.classList.toggle('cc-active', state.subtitlesEnabled);
    });
  }

  function toggleSubtitles() {
    state.subtitlesEnabled = !state.subtitlesEnabled;
    localStorage.setItem('nova_subtitles', state.subtitlesEnabled.toString());
    applySubtitleState();
    showToast(state.subtitlesEnabled ? 'Subtitles ON (Compact font)' : 'Subtitles OFF (Cleared)', '💬');
  }

  function setupHlsPlayer(url, ch) {
    if (hls) {
      hls.destroy();
      hls = null;
    }
    if (dashPlayer) {
      dashPlayer.destroy();
      dashPlayer = null;
    }

    clearOldSubtitles();

    const video = els.video;

    if (typeof Hls !== 'undefined' && Hls.isSupported()) {
      hls = new Hls({
        debug: false,
        enableWorker: true,
        lowLatencyMode: true,
        manifestLoadingTimeOut: 12000,
        levelLoadingTimeOut: 12000,
        fragLoadingTimeOut: 15000,
        enableCEA708Captions: false, // Prevents duplicate CEA-708 tracks from mirroring CEA-608
        subtitleDisplay: state.subtitlesEnabled
      });

      hls.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, () => {
        applySubtitleState();
      });

      hls.on(Hls.Events.NON_NATIVE_TEXT_TRACKS_FOUND, () => {
        applySubtitleState();
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.warn('HLS Fatal Error:', data.type, data.details);
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              updateChannelRowStatus(ch.id, 'vlc');
              if (isHttpsOrigin && isPlainHttp) {
                showStreamError(
                  'Insecure HTTP Stream • Blocked by Browser',
                  `Your browser blocked this HTTP stream under HTTPS Mixed Content security rules. <a href="${escapeHtml(ch.url)}" class="error-popup-link" target="_blank" rel="noopener noreferrer">Click here to open stream in a pop-up window</a>, or click Pop-up below.`,
                  ch
                );
              } else {
                showStreamError(
                  'Stream Network / CORS Notice',
                  `This stream could not be loaded directly by your browser (frequently due to CORS or token expiration). <a href="${escapeHtml(ch.url)}" class="error-popup-link" target="_blank" rel="noopener noreferrer">Click here to open in Pop-up</a>!`,
                  ch
                );
              }
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              updateChannelRowStatus(ch.id, 'offline');
              showStreamError(
                'Playback Error',
                `Stream codec or format is not supported natively in this browser. <a href="${escapeHtml(ch.url)}" class="error-popup-link" target="_blank" rel="noopener noreferrer">Click here to open in a new pop-up window</a>.`,
                ch
              );
              hls.destroy();
              break;
          }
        }
      });

      hls.on(Hls.Events.LEVEL_SWITCHED, (event, data) => {
        const level = hls.levels[data.level];
        if (level) {
          els.streamInfoTag.textContent = `${level.width}x${level.height} • ${Math.round(level.bitrate / 1000)} kbps`;
        }
      });

      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        updateChannelRowStatus(ch.id, 'online');
        applySubtitleState();
        video.play().catch(err => {
          console.warn('Autoplay prevented:', err);
          showToast('Click play to begin streaming', '▶️');
        });
      });

    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native Apple Safari HLS
      video.src = url;
      video.play().catch(err => {
        console.warn('Native playback error:', err);
      });
    } else {
      showStreamError('HLS Unsupported', `Your browser does not support HLS playback. <a href="${escapeHtml(ch.url)}" class="error-popup-link" target="_blank" rel="noopener noreferrer">Open stream in Pop-up</a>.`, ch);
    }
  }

  // --- MPEG-DASH Player Integration (dash.js) ---
  function setupDashPlayer(url, ch) {
    if (hls) {
      hls.destroy();
      hls = null;
    }
    if (dashPlayer) {
      dashPlayer.destroy();
      dashPlayer = null;
    }

    clearOldSubtitles();
    const video = els.video;
    if (!video) return;

    const isHttpsOrigin = window.location.protocol === 'https:';
    const isPlainHttp = url.startsWith('http://');

    if (typeof dashjs !== 'undefined') {
      try {
        dashPlayer = dashjs.MediaPlayer().create();
        dashPlayer.initialize(video, url, true);

        dashPlayer.updateSettings({
          streaming: {
            lowLatencyEnabled: true,
            abr: {
              autoSwitchBitrate: {
                video: true,
                audio: true
              }
            }
          }
        });

        // Codec translation hook: map in-band 'hev1' to browser-friendly 'hvc1'
        dashPlayer.on(dashjs.MediaPlayer.events.MANIFEST_LOADED, (e) => {
          if (e && e.data) {
            try {
              const manifest = e.data;
              const periods = manifest.Period_asArray || (manifest.Period ? [manifest.Period] : []);
              periods.forEach(p => {
                const adaptSets = p.AdaptationSet_asArray || (p.AdaptationSet ? [p.AdaptationSet] : []);
                adaptSets.forEach(as => {
                  if (as.contentType === 'video' || as.mimeType === 'video/mp4') {
                    const reps = as.Representation_asArray || (as.Representation ? [as.Representation] : []);
                    reps.forEach(rep => {
                      if (rep.codecs && rep.codecs.startsWith('hev1')) {
                        const hvc1Codec = rep.codecs.replace('hev1', 'hvc1');
                        if (window.MediaSource && MediaSource.isTypeSupported && MediaSource.isTypeSupported(`video/mp4; codecs="${hvc1Codec}"`)) {
                          console.log(`Normalizing HEVC codec: ${rep.codecs} -> ${hvc1Codec}`);
                          rep.codecs = hvc1Codec;
                        }
                      }
                    });
                  }
                });
              });
            } catch (err) {
              console.warn('Manifest codec normalization error:', err);
            }
          }
        });

        // Automatic Video Fallback:
        // If playing an HEVC stream and videoWidth is 0 (audio-only),
        // automatically fallback to the broadcast-grade H.264 50fps profile
        if (url.includes('hevc_')) {
          const hevcFallbackTimer = setTimeout(() => {
            if (video && !video.paused && video.videoWidth === 0) {
              console.warn('HEVC video decoding unsupported by browser hardware. Falling back to H.264 HD feed...');
              const fallbackUrl = url.replace(/hevc_iptv_mse_v\d+\.mpd/i, 'pc_hd_abr_v2.mpd');
              showToast('Switching to H.264 50fps video feed...', '🔄');
              setupDashPlayer(fallbackUrl, ch);
            }
          }, 3000);

          const onData = () => {
            if (video.videoWidth > 0) {
              clearTimeout(hevcFallbackTimer);
              video.removeEventListener('loadeddata', onData);
              video.removeEventListener('timeupdate', onData);
            }
          };
          video.addEventListener('loadeddata', onData);
          video.addEventListener('timeupdate', onData);
        }

        dashPlayer.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, () => {
          updateChannelRowStatus(ch.id, 'online');
          els.streamInfoTag.textContent = 'MPEG-DASH • LIVE';
        });

        dashPlayer.on(dashjs.MediaPlayer.events.QUALITY_CHANGE_RENDERED, (e) => {
          if (e && e.mediaType === 'video') {
            try {
              const bitrates = dashPlayer.getBitrateInfoListFor('video');
              if (bitrates && bitrates[e.newQuality]) {
                const q = bitrates[e.newQuality];
                els.streamInfoTag.textContent = `${q.width}x${q.height} • ${Math.round(q.bitrate / 1000)} kbps (DASH)`;
              }
            } catch (_) {}
          }
        });

        dashPlayer.on(dashjs.MediaPlayer.events.ERROR, (e) => {
          console.warn('DASH Player Error:', e);
          updateChannelRowStatus(ch.id, 'vlc');
          if (isHttpsOrigin && isPlainHttp) {
            showStreamError(
              'Insecure HTTP DASH Stream • Blocked by Browser',
              `Your browser blocked this HTTP DASH stream under HTTPS Mixed Content security rules. <a href="${escapeHtml(ch.url)}" class="error-popup-link" target="_blank" rel="noopener noreferrer">Click here to open in new pop-up window</a>, or launch in VLC Player below.`,
              ch
            );
          } else {
            showStreamError(
              'MPEG-DASH Stream Notice',
              `This MPEG-DASH (.mpd) stream could not be loaded directly by the browser (frequently due to BBC UK geo-blocking or CORS). <a href="${escapeHtml(ch.url)}" class="error-popup-link" target="_blank" rel="noopener noreferrer">Try opening in a pop-up window</a> or launch in VLC Player below!`,
              ch
            );
          }
        });

        video.play().catch(err => {
          console.warn('Autoplay prevented:', err);
          showToast('Click play to begin streaming', '▶️');
        });
      } catch (err) {
        console.warn('Failed to initialize dashjs:', err);
        showStreamError(
          'MPEG-DASH Error',
          `Failed to initialize MPEG-DASH engine. <a href="${escapeHtml(ch.url)}" class="error-popup-link" target="_blank" rel="noopener noreferrer">Click to open in Pop-up</a>.`,
          ch
        );
      }
    } else {
      showStreamError(
        'MPEG-DASH Engine Loading',
        `MPEG-DASH (.mpd) engine is loading. <a href="${escapeHtml(ch.url)}" class="error-popup-link" target="_blank" rel="noopener noreferrer">Click to open in Pop-up</a>.`,
        ch
      );
    }
  }

  function showStreamError(title, desc, ch) {
    els.bufferingSpinner.style.display = 'none';
    els.errorTitle.textContent = title;
    els.errorDesc.innerHTML = desc;
    els.streamErrorCard.style.display = 'flex';
  }

  // --- Launch in Pop-up Window ---
  function openCurrentInPopup(customUrl) {
    const url = customUrl || (state.currentChannel ? state.currentChannel.url : null);
    if (!url) {
      showToast('Select a channel first', 'ℹ️');
      return;
    }
    const w = 854;
    const h = 480;
    const left = Math.max(0, Math.floor((window.screen.width - w) / 2));
    const top = Math.max(0, Math.floor((window.screen.height - h) / 2));
    const popup = window.open(
      url,
      'iptv_popup_' + Date.now(),
      `width=${w},height=${h},top=${top},left=${left},scrollbars=no,resizable=yes,status=no,location=yes,toolbar=no,menubar=no`
    );
    if (popup) {
      popup.focus();
      showToast('Opening stream in pop-up window...', '🌐');
    } else {
      window.open(url, '_blank');
      showToast('Opening stream in new tab...', '🌐');
    }
  }

  // --- Launch in VLC Player ---
  function openCurrentInVlc() {
    if (!state.currentChannel) {
      showToast('Select a channel first', 'ℹ️');
      return;
    }
    const url = state.currentChannel.url;
    // On macOS, vlc://<url> will launch VLC if installed
    const vlcProtocolUrl = 'vlc://' + url;
    window.location.href = vlcProtocolUrl;

    showToast(`Launching "${state.currentChannel.name}" in VLC...`, '🚀');

    // Also copy URL as handy backup
    navigator.clipboard.writeText(url).then(() => {
      console.log('Stream URL also copied to clipboard');
    }).catch(() => {});
  }

  function copyCurrentUrl() {
    if (!state.currentChannel) return;
    navigator.clipboard.writeText(state.currentChannel.url).then(() => {
      showToast('Stream URL copied to clipboard!', '📋');
    });
  }

  // --- Video Controls ---
  function togglePlayPause() {
    if (els.video.paused) {
      els.video.play().catch(console.warn);
    } else {
      els.video.pause();
    }
  }

  function playNext() {
    if (!state.filteredChannels.length) return;
    let next = state.currentIndex + 1;
    if (next >= state.filteredChannels.length) next = 0;
    playChannel(state.filteredChannels[next]);
  }

  function playPrev() {
    if (!state.filteredChannels.length) return;
    let prev = state.currentIndex - 1;
    if (prev < 0) prev = state.filteredChannels.length - 1;
    playChannel(state.filteredChannels[prev]);
  }

  function isFullscreen() {
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (els.video.webkitExitFullscreen) {
      els.video.webkitExitFullscreen();
    }
  }

  function enterFullscreen() {
    const target = els.videoContainer;
    const video = els.video;
    if (target.requestFullscreen) {
      target.requestFullscreen().catch(err => {
        if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
      });
    } else if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    }
  }

  function toggleFullscreen() {
    if (isFullscreen()) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }

  function updateFullscreenUI() {
    const fs = isFullscreen();
    els.videoContainer.classList.toggle('is-fullscreen', fs);
    document.body.classList.toggle('in-fullscreen', fs);

    const iconEnter = els.ctrlFullscreenBtn.querySelector('.icon-enter-fs');
    const iconExit = els.ctrlFullscreenBtn.querySelector('.icon-exit-fs');
    if (iconEnter) iconEnter.style.display = fs ? 'none' : 'block';
    if (iconExit) iconExit.style.display = fs ? 'block' : 'none';

    if (fs) {
      resetOverlayIdleTimer(1600);
      syncFullscreenMetadata();
    }
  }

  function syncFullscreenMetadata() {
    if (state.currentChannel) {
      if (els.fsChannelFlag) els.fsChannelFlag.textContent = state.currentChannel.flag || '🌐';
      if (els.fsChannelName) els.fsChannelName.textContent = state.currentChannel.name;
    }
  }

  async function togglePip() {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (document.pictureInPictureEnabled) {
        await els.video.requestPictureInPicture();
      }
    } catch (e) {
      console.warn(e);
    }
  }

  function setVolume(val) {
    state.volume = Math.max(0, Math.min(1, val));
    els.video.volume = state.volume;
    els.volumeSlider.value = state.volume;
    localStorage.setItem('nova_volume', state.volume.toString());

    if (state.volume > 0 && state.muted) {
      toggleMute(false);
    }
    updateVolumeIcons();
  }

  function toggleMute(force) {
    state.muted = typeof force === 'boolean' ? force : !state.muted;
    els.video.muted = state.muted;
    localStorage.setItem('nova_muted', state.muted.toString());
    updateVolumeIcons();
  }

  function updateVolumeIcons() {
    if (state.muted || state.volume === 0) {
      els.iconVolOn.style.display = 'none';
      els.iconVolOff.style.display = 'block';
    } else {
      els.iconVolOn.style.display = 'block';
      els.iconVolOff.style.display = 'none';
    }
  }

  function resetOverlayIdleTimer(customDelay) {
    els.videoContainer.classList.remove('idle');
    clearTimeout(overlayTimer);
    if (!els.video.paused) {
      const delay = typeof customDelay === 'number' ? customDelay : 1600;
      overlayTimer = setTimeout(() => {
        els.videoContainer.classList.add('idle');
      }, delay);
    }
  }

  function exportFavorites() {
    if (!state.favorites.size) {
      showToast('No favorites saved yet', 'ℹ️');
      return;
    }
    const favChannels = state.allChannels.filter(c => state.favorites.has(c.id));
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(favChannels, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = 'nova_iptv_favorites.json';
    a.click();
    showToast('Favorites exported to JSON', '💾');
  }

  // --- Cast & AirPlay Integration ---
  function initCastFramework() {
    if (window.cast && window.cast.framework) {
      try {
        cast.framework.CastContext.getInstance().setOptions({
          receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
          autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
        });
        const context = cast.framework.CastContext.getInstance();
        context.addEventListener(
          cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
          (event) => {
            if (event.sessionState === cast.framework.SessionState.SESSION_STARTED) {
              loadMediaOnCastSession();
              updateCastButtons(true);
            } else if (event.sessionState === cast.framework.SessionState.SESSION_ENDED) {
              updateCastButtons(false);
            }
          }
        );
      } catch (e) {
        console.warn('Cast init:', e);
      }
    }
  }
  window.initGoogleCast = initCastFramework;

  function updateCastButtons(isCasting) {
    [els.fsCastBtn, els.ctrlCastBtn, els.vTopCastBtn].forEach(btn => {
      if (btn) btn.classList.toggle('casting', !!isCasting);
    });
  }

  function loadMediaOnCastSession() {
    if (!state.currentChannel) return;
    if (!window.cast || !window.cast.framework) return;
    const session = cast.framework.CastContext.getInstance().getCurrentSession();
    if (!session) return;

    const streamUrl = state.currentChannel.url;

    try {
      const mediaInfo = new chrome.cast.media.MediaInfo(streamUrl, 'application/x-mpegURL');
      mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();
      mediaInfo.metadata.title = state.currentChannel.name;
      mediaInfo.metadata.subtitle = `${state.currentChannel.flag || '🌐'} ${state.currentChannel.country_name || 'Global'} • ${state.currentChannel.group || 'Live'}`;
      mediaInfo.streamType = chrome.cast.media.StreamType.LIVE;

      const request = new chrome.cast.media.LoadRequest(mediaInfo);
      request.autoplay = true;

      session.loadMedia(request).then(
        () => showToast(`Casting "${state.currentChannel.name}" to TV`, '📺'),
        (err) => console.warn('Error loading media to Cast:', err)
      );
    } catch (err) {
      console.warn('Cast load error:', err);
    }
  }

  function triggerAirPlay() {
    if (els.video && typeof els.video.webkitShowPlaybackTargetPicker === 'function') {
      try {
        els.video.webkitShowPlaybackTargetPicker();
        showToast('Opening AirPlay device picker...', '📡');
        return true;
      } catch (e) {
        console.warn('AirPlay prompt error:', e);
      }
    }
    return false;
  }

  function triggerGoogleCast() {
    if (window.cast && window.cast.framework) {
      try {
        const context = cast.framework.CastContext.getInstance();
        const session = context.getCurrentSession();
        if (session) {
          loadMediaOnCastSession();
          if (els.castModal) els.castModal.style.display = 'none';
          return true;
        } else {
          context.requestSession().then(
            () => {
              loadMediaOnCastSession();
              if (els.castModal) els.castModal.style.display = 'none';
            },
            (err) => {
              if (err !== 'cancel') openCastModal();
            }
          );
          return true;
        }
      } catch (e) {
        console.warn('Cast requestSession error:', e);
      }
    }
    return false;
  }

  function openCastModal() {
    if (!state.currentChannel) {
      showToast('Select a channel first to cast', '⚠️');
      return;
    }

    const ch = state.currentChannel;
    if (els.castPreviewFlag) els.castPreviewFlag.textContent = ch.flag || '🌐';
    if (els.castPreviewName) els.castPreviewName.textContent = ch.name;
    if (els.castPreviewMeta) els.castPreviewMeta.textContent = `${ch.country_name || 'Global'} • ${ch.group || 'Live'} • ${ch.quality || 'HD'}`;
    if (els.castStreamUrlInput) els.castStreamUrlInput.value = ch.url;

    const isHttps = ch.url.startsWith('https://');
    const compatEl = document.getElementById('cast-compat-status');
    if (compatEl) {
      if (isHttps) {
        compatEl.innerHTML = '<span style="color: #4ade80;">🟢 Secure HTTPS Stream</span> • Compatible with Chromecast & AirPlay';
      } else {
        compatEl.innerHTML = '<span style="color: #fbbf24;">⚠️ Plain HTTP Stream</span> • Smart TVs block HTTP on secure receivers. Use VLC on TV';
      }
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    const googleCard = document.getElementById('card-google-cast');
    const airplayCard = document.getElementById('card-airplay');

    if (googleCard && airplayCard) {
      googleCard.style.borderColor = isChrome ? 'var(--accent-primary)' : '';
      airplayCard.style.borderColor = isSafari ? 'var(--accent-primary)' : '';
    }

    if (els.castModal) els.castModal.style.display = 'flex';
  }

  function closeCastModal() {
    if (els.castModal) els.castModal.style.display = 'none';
  }

  function startCasting() {
    if (!state.currentChannel) {
      showToast('Select a channel first to cast', '⚠️');
      return;
    }
    openCastModal();
  }

  // --- Setup Event Listeners ---
  function setupEventListeners() {
    // Tabs
    els.tabAllBtn.addEventListener('click', () => {
      state.activeTab = 'all';
      els.tabAllBtn.classList.add('active');
      els.tabFavBtn.classList.remove('active');
      els.tabRecentBtn.classList.remove('active');
      applyFiltersAndRender();
    });

    els.tabFavBtn.addEventListener('click', () => {
      state.activeTab = 'favorites';
      els.tabFavBtn.classList.add('active');
      els.tabAllBtn.classList.remove('active');
      els.tabRecentBtn.classList.remove('active');
      applyFiltersAndRender();
    });

    els.tabRecentBtn.addEventListener('click', () => {
      state.activeTab = 'history';
      els.tabRecentBtn.classList.add('active');
      els.tabAllBtn.classList.remove('active');
      els.tabFavBtn.classList.remove('active');
      applyFiltersAndRender();
    });

    // Search
    els.searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      els.clearSearchBtn.style.display = q ? 'block' : 'none';
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        state.filters.search = q;
        applyFiltersAndRender();
      }, 250);
    });

    els.searchInput.addEventListener('search', () => {
      if (!els.searchInput.value) {
        els.clearSearchBtn.style.display = 'none';
        state.filters.search = '';
        applyFiltersAndRender();
      }
    });

    els.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        els.searchInput.value = '';
        els.clearSearchBtn.style.display = 'none';
        state.filters.search = '';
        applyFiltersAndRender();
      }
    });

    els.clearSearchBtn.addEventListener('click', () => {
      els.searchInput.value = '';
      els.clearSearchBtn.style.display = 'none';
      state.filters.search = '';
      applyFiltersAndRender();
      els.searchInput.focus();
    });

    // Grouping
    els.groupBySelect.addEventListener('change', (e) => {
      state.groupBy = e.target.value;
      state.openGroups.clear();
      renderVerticalGroupedList();
    });

    // Filters
    els.countryFilter.addEventListener('change', (e) => {
      state.filters.country = e.target.value;
      state.openGroups.clear();
      populateGenreFilter(state.filters.country);
      applyFiltersAndRender();
    });

    if (els.genreFilter) {
      els.genreFilter.addEventListener('change', (e) => {
        state.filters.genre = e.target.value;
        state.openGroups.clear();
        applyFiltersAndRender();
      });
    }

    els.languageFilter.addEventListener('change', (e) => {
      state.filters.language = e.target.value;
      state.openGroups.clear();
      applyFiltersAndRender();
    });

    els.qualityFilter.addEventListener('change', (e) => {
      state.filters.quality = e.target.value;
      state.openGroups.clear();
      applyFiltersAndRender();
    });

    // Health Checker Controls
    if (els.checkHealthBtn) {
      els.checkHealthBtn.addEventListener('click', probeFilteredChannels);
    }

    if (els.statusFilterSelect) {
      els.statusFilterSelect.value = state.statusFilter || '';
      els.statusFilterSelect.addEventListener('change', (e) => {
        state.statusFilter = e.target.value;
        state.hideOffline = (state.statusFilter === 'live');
        localStorage.setItem('nova_status_filter', state.statusFilter);
        localStorage.setItem('nova_hide_offline', state.hideOffline);
        applyFiltersAndRender();
        const labels = {
          browser: 'Showing Browser-Playable channels only',
          live: 'Hiding dead/offline channels',
          offline: 'Showing dead/blocked channels only',
          '': 'Showing all streams'
        };
        showToast(labels[state.statusFilter] || 'Status filter updated', '⚡');
      });
    }

    if (els.hideOfflineCheckbox) {
      els.hideOfflineCheckbox.checked = state.hideOffline;
      els.channelGroupsContainer.classList.toggle('hide-offline-active', state.hideOffline);

      els.hideOfflineCheckbox.addEventListener('change', (e) => {
        state.hideOffline = e.target.checked;
        localStorage.setItem('nova_hide_offline', state.hideOffline);
        els.channelGroupsContainer.classList.toggle('hide-offline-active', state.hideOffline);
        applyFiltersAndRender();
        showToast(state.hideOffline ? 'Hiding dead channels' : 'Showing all channels', '👁️');
      });
    }

    // Expand / Collapse all
    els.expandAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.channel-group-block').forEach(b => {
        b.classList.add('open');
        const grpName = b.querySelector('.group-name')?.textContent;
        if (grpName) state.openGroups.add(grpName);
      });
    });

    els.collapseAllBtn.addEventListener('click', () => {
      state.openGroups.clear();
      document.querySelectorAll('.channel-group-block').forEach(b => b.classList.remove('open'));
    });

    els.resetAllFiltersBtn.addEventListener('click', () => {
      state.filters.search = '';
      state.filters.country = '';
      state.filters.genre = '';
      state.filters.language = '';
      state.filters.quality = '';
      state.statusFilter = '';
      state.hideOffline = false;
      state.activeTab = 'all';
      state.openGroups.clear();

      localStorage.removeItem('nova_status_filter');
      localStorage.removeItem('nova_hide_offline');
      localStorage.removeItem('nova_playlist_url');

      if (els.statusFilterSelect) els.statusFilterSelect.value = '';
      if (els.hideOfflineCheckbox) {
        els.hideOfflineCheckbox.checked = false;
        els.channelGroupsContainer.classList.remove('hide-offline-active');
      }

      els.searchInput.value = '';
      els.clearSearchBtn.style.display = 'none';
      els.countryFilter.value = '';
      if (els.genreFilter) els.genreFilter.value = '';
      els.languageFilter.value = '';
      els.qualityFilter.value = '';
      document.querySelectorAll('.sidebar-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      els.tabAllBtn.classList.add('active');

      // If channel list has shrunk below 500 (polluted by a single stream test), restore 12,869 channels!
      if (state.allChannels.length < 500) {
        showToast('Restoring 12,869 channels...', '🔄');
        loadPlaylist(DEFAULT_PLAYLIST_URL, true);
        return;
      }

      populateGenreFilter('');
      applyFiltersAndRender();
      showToast('Filters reset • Showing all 12,869 channels', '🔄');
    });

    // Filter Collapse / Expand Listeners
    if (els.filtersCollapseBtn) {
      els.filtersCollapseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFiltersCollapsed();
      });
    }

    if (els.filtersToggleBar) {
      els.filtersToggleBar.addEventListener('click', (e) => {
        if (e.target.closest('#mini-check-health-btn')) return;
        toggleFiltersCollapsed();
      });
    }

    if (els.miniCheckHealthBtn) {
      els.miniCheckHealthBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        probeFilteredChannels();
      });
    }

    // Restore collapsed filters state
    if (localStorage.getItem('nova_filters_collapsed') === 'true') {
      setFiltersCollapsed(true);
    } else {
      updateFilterChips();
    }

    // Mobile & Landscape Navigation Handlers
    if (els.scrollToChannelsBtn) {
      els.scrollToChannelsBtn.addEventListener('click', () => {
        els.sidebarPanel.scrollIntoView({ behavior: 'smooth' });
      });
    }

    if (els.scrollToPlayerBtn) {
      els.scrollToPlayerBtn.addEventListener('click', () => {
        els.playerStage.scrollIntoView({ behavior: 'smooth' });
      });
    }

    if (els.toggleSplitBtn) {
      // Restore previous landscape split state
      if (localStorage.getItem('nova_landscape_split') === 'true') {
        els.appContainer.classList.add('split-layout');
        if (els.toggleSplitText) els.toggleSplitText.textContent = '⇅ Full View';
      }

      els.toggleSplitBtn.addEventListener('click', () => {
        const isSplit = els.appContainer.classList.toggle('split-layout');
        localStorage.setItem('nova_landscape_split', isSplit.toString());
        if (els.toggleSplitText) {
          els.toggleSplitText.textContent = isSplit ? '⇅ Full View' : '⇄ Split View';
        }
        showToast(isSplit ? 'Split View enabled' : 'Stacked View enabled', '📱');
      });
    }

    // File Input Handlers (Load M3U)
    function handleFile(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        onPlaylistLoaded(e.target.result, file.name);
      };
      reader.readAsText(file);
    }

    els.fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));
    els.dropzoneFileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));

    // Drag and drop
    els.fileDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      els.fileDropzone.style.borderColor = 'var(--accent-primary)';
    });
    els.fileDropzone.addEventListener('dragleave', () => {
      els.fileDropzone.style.borderColor = '';
    });
    els.fileDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      els.fileDropzone.style.borderColor = '';
      if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
    });

    // URL Modal
    if (els.openUrlModalBtn) {
      els.openUrlModalBtn.addEventListener('click', () => {
        els.urlModal.style.display = 'flex';
        els.playlistUrlInput.value = localStorage.getItem('nova_playlist_url') || DEFAULT_PLAYLIST_URL;
      });
    }

    if (els.closeUrlModalBtn) {
      els.closeUrlModalBtn.addEventListener('click', () => {
        els.urlModal.style.display = 'none';
      });
    }

    if (els.urlModal) {
      els.urlModal.addEventListener('click', (e) => {
        if (e.target === els.urlModal) els.urlModal.style.display = 'none';
      });
    }

    // Cast Modal & Buttons
    [els.fsCastBtn, els.ctrlCastBtn, els.vTopCastBtn].forEach(btn => {
      if (btn) btn.addEventListener('click', startCasting);
    });

    // Subtitles CC Buttons
    [els.ctrlCcBtn, els.fsCcBtn].forEach(btn => {
      if (btn) btn.addEventListener('click', toggleSubtitles);
    });

    // Guard against duplicate captions added dynamically
    if (els.video && els.video.textTracks) {
      els.video.textTracks.onaddtrack = () => {
        applySubtitleState();
      };
    }

    if (els.closeCastModalBtn) {
      els.closeCastModalBtn.addEventListener('click', closeCastModal);
    }

    if (els.castModal) {
      els.castModal.addEventListener('click', (e) => {
        if (e.target === els.castModal) closeCastModal();
      });
    }

    if (els.modalChromecastBtn) {
      els.modalChromecastBtn.addEventListener('click', () => {
        if (!triggerGoogleCast()) {
          showToast('Use Google Chrome to cast to Chromecast devices', 'ℹ️');
        }
      });
    }

    if (els.modalAirplayBtn) {
      els.modalAirplayBtn.addEventListener('click', () => {
        if (!triggerAirPlay()) {
          showToast('Use Apple Safari to use native AirPlay', 'ℹ️');
        }
      });
    }

    if (els.modalCopyStreamBtn) {
      els.modalCopyStreamBtn.addEventListener('click', () => {
        if (els.castStreamUrlInput && els.castStreamUrlInput.value) {
          navigator.clipboard.writeText(els.castStreamUrlInput.value)
            .then(() => showToast('Stream URL copied to clipboard!', '📋'))
            .catch(() => showToast('Failed to copy URL', '⚠️'));
        }
      });
    }

    if (els.loadUrlSubmitBtn) {
      els.loadUrlSubmitBtn.addEventListener('click', () => {
        const url = els.playlistUrlInput.value.trim();
        if (url) {
          els.urlModal.style.display = 'none';
          // If the user entered a single stream URL (.m3u8, .mpd, .ts) rather than a playlist file:
          const isDirectStream = url.endsWith('.mpd') || (url.endsWith('.m3u8') && !url.includes('index.m3u') && !url.includes('playlist.m3u')) || url.endsWith('.ts');
          if (isDirectStream) {
            const streamName = 'Custom Stream: ' + url.split('/').filter(Boolean).pop().split('?')[0];
            const customCh = {
              id: 'custom_' + Date.now(),
              name: streamName,
              url: url,
              group: 'Custom Streams',
              country_code: 'int',
              country_name: 'Custom',
              flag: '🌐',
              quality: url.includes('1080') ? '1080p FHD' : (url.includes('720') ? '720p HD' : 'Auto')
            };
            state.allChannels.unshift(customCh);
            applyFiltersAndRender();
            playChannel(customCh);
            showToast(`Streaming "${streamName}"`, '▶️');
          } else {
            loadPlaylist(url);
          }
        }
      });
    }

    // Preset buttons in URL modal
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-url');
        if (url) {
          els.playlistUrlInput.value = url;
          els.urlModal.style.display = 'none';
          loadPlaylist(url);
        }
      });
    });

    // Pull Updated Channels Button (Syncs directly from live https://github.com/iptv-org/iptv repository)
    if (els.pullUpdatedBtn) {
      els.pullUpdatedBtn.addEventListener('click', async () => {
        showToast('Pulling live channels from https://github.com/iptv-org/iptv...', '🔄');
        els.pullUpdatedBtn.classList.add('rotating');
        try {
          const liveRepoUrl = `https://raw.githubusercontent.com/iptv-org/iptv/gh-pages/index.m3u?t=${Date.now()}`;
          await loadPlaylist(liveRepoUrl, true);
          showToast(`Synced from GitHub repo! ${state.allChannels.length.toLocaleString()} channels loaded.`, '✅');
        } catch (err) {
          console.warn('Live GitHub repository sync failed, checking fallback:', err);
          try {
            await loadPlaylist(`./playlist.m3u?t=${Date.now()}`, true);
            showToast(`Loaded ${state.allChannels.length.toLocaleString()} channels from local cache.`, '✅');
          } catch (e) {
            showToast('Could not reload channels', '⚠️');
          }
        } finally {
          els.pullUpdatedBtn.classList.remove('rotating');
        }
      });
    }

    // Pop-up & Action Buttons
    if (els.errorCloseBtn) {
      els.errorCloseBtn.addEventListener('click', () => {
        els.streamErrorCard.style.display = 'none';
      });
    }
    if (els.openPopupBtn) els.openPopupBtn.addEventListener('click', () => openCurrentInPopup());
    if (els.openVlcBtn && els.openVlcBtn !== els.openPopupBtn) els.openVlcBtn.addEventListener('click', () => openCurrentInPopup());
    if (els.errorPopupBtn) els.errorPopupBtn.addEventListener('click', () => openCurrentInPopup());
    if (els.errorVlcBtn && els.errorVlcBtn !== els.errorPopupBtn) els.errorVlcBtn.addEventListener('click', () => openCurrentInPopup());
    els.copyUrlBtn.addEventListener('click', copyCurrentUrl);
    els.errorCopyBtn.addEventListener('click', copyCurrentUrl);
    els.errorNextBtn.addEventListener('click', playNext);

    els.errorDesc.addEventListener('click', (e) => {
      const link = e.target.closest('.error-popup-link');
      if (link) {
        e.preventDefault();
        const url = link.getAttribute('href');
        openCurrentInPopup(url);
      }
    });

    els.headerFavBtn.addEventListener('click', () => {
      if (state.currentChannel) toggleFavorite(state.currentChannel.id);
    });

    els.exportFavsBtn.addEventListener('click', exportFavorites);

    // Player Controls
    els.ctrlPlayBtn.addEventListener('click', togglePlayPause);
    if (els.videoCenterPlayBtn) els.videoCenterPlayBtn.addEventListener('click', togglePlayPause);
    els.ctrlPrevBtn.addEventListener('click', playPrev);
    els.ctrlNextBtn.addEventListener('click', playNext);
    els.ctrlMuteBtn.addEventListener('click', () => toggleMute());
    els.volumeSlider.addEventListener('input', (e) => setVolume(parseFloat(e.target.value)));
    els.ctrlFullscreenBtn.addEventListener('click', toggleFullscreen);
    els.ctrlPipBtn.addEventListener('click', togglePip);

    // Fullscreen Tap & Exit Controls
    if (els.fsExitBtn) els.fsExitBtn.addEventListener('click', exitFullscreen);
    if (els.fsVlcBtn) els.fsVlcBtn.addEventListener('click', openCurrentInVlc);
    if (els.fsPrevBtn) els.fsPrevBtn.addEventListener('click', playPrev);
    if (els.fsPlayBtn) els.fsPlayBtn.addEventListener('click', togglePlayPause);
    if (els.fsNextBtn) els.fsNextBtn.addEventListener('click', playNext);

    ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(evt => {
      document.addEventListener(evt, updateFullscreenUI);
    });

    // Video Events
    els.video.addEventListener('play', () => {
      els.iconPlay.style.display = 'none';
      els.iconPause.style.display = 'block';
      if (els.fsIconPlay) els.fsIconPlay.style.display = 'none';
      if (els.fsIconPause) els.fsIconPause.style.display = 'block';
      if (els.vCenterIconPlay) els.vCenterIconPlay.style.display = 'none';
      if (els.vCenterIconPause) els.vCenterIconPause.style.display = 'block';
      els.equalizerBars.classList.add('playing');
      els.bufferingSpinner.style.display = 'none';
      els.streamErrorCard.style.display = 'none';
    });

    els.video.addEventListener('pause', () => {
      els.iconPlay.style.display = 'block';
      els.iconPause.style.display = 'none';
      if (els.fsIconPlay) els.fsIconPlay.style.display = 'block';
      if (els.fsIconPause) els.fsIconPause.style.display = 'none';
      if (els.vCenterIconPlay) els.vCenterIconPlay.style.display = 'block';
      if (els.vCenterIconPause) els.vCenterIconPause.style.display = 'none';
      els.equalizerBars.classList.remove('playing');
    });

    els.video.addEventListener('waiting', () => {
      els.bufferingSpinner.style.display = 'flex';
    });

    els.video.addEventListener('playing', () => {
      els.bufferingSpinner.style.display = 'none';
      els.streamErrorCard.style.display = 'none';
    });

    // Video container tap/click to toggle controls with ghost-click protection
    let lastTapTimestamp = 0;

    function handleVideoTap(e) {
      if (e.target.closest('button') || e.target.closest('input') || e.target.closest('label') || e.target.closest('.stream-error-card') || e.target.closest('.fs-exit-btn')) {
        resetOverlayIdleTimer(1600);
        return;
      }

      const now = Date.now();
      if (now - lastTapTimestamp < 450) {
        return;
      }
      lastTapTimestamp = now;

      if (els.videoContainer.classList.contains('idle')) {
        resetOverlayIdleTimer(1600);
      } else {
        els.videoContainer.classList.add('idle');
      }
    }

    els.videoContainer.addEventListener('mousemove', () => resetOverlayIdleTimer(1600));
    els.videoContainer.addEventListener('click', handleVideoTap);
    els.videoContainer.addEventListener('touchend', handleVideoTap, { passive: true });

    // Global Shortcuts
    document.addEventListener('keydown', (e) => {
      const isInput = ['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName);
      if (e.key === '/' && !isInput) {
        e.preventDefault();
        els.searchInput.focus();
        return;
      }
      if (isInput) return;

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'KeyF':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'KeyM':
          e.preventDefault();
          toggleMute();
          break;
        case 'KeyP':
          e.preventDefault();
          togglePip();
          break;
        case 'ArrowUp':
        case 'KeyK':
          e.preventDefault();
          playPrev();
          break;
        case 'ArrowDown':
        case 'KeyJ':
          e.preventDefault();
          playNext();
          break;
        case 'KeyC':
          e.preventDefault();
          startCasting();
          break;
        case 'KeyS':
          e.preventDefault();
          toggleSubtitles();
          break;
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Progressive Web App (PWA) & Native Installation ---
  let deferredInstallPrompt = null;

  function initPwa() {
    // Register Service Worker for offline shell and instant boot
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then((reg) => console.log('ServiceWorker registered with scope:', reg.scope))
          .catch((err) => console.warn('ServiceWorker registration error:', err));
      });
    }

    const installBtn = document.getElementById('install-app-btn');
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

    if (isStandalone && installBtn) {
      installBtn.style.display = 'none';
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      if (installBtn && !isStandalone) {
        installBtn.style.display = 'inline-flex';
      }
    });

    if (installBtn) {
      installBtn.addEventListener('click', async () => {
        if (deferredInstallPrompt) {
          deferredInstallPrompt.prompt();
          const { outcome } = await deferredInstallPrompt.userChoice;
          if (outcome === 'accepted') {
            installBtn.style.display = 'none';
            showToast('Nova IPTV installed successfully!', '📲');
          }
          deferredInstallPrompt = null;
        } else {
          // Guided instructions for iOS Safari and Mac Safari
          const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
          const isMac = navigator.platform && navigator.platform.toUpperCase().indexOf('MAC') >= 0;
          if (isIOS) {
            showToast('On iPhone: Tap Share ⎋ -> "Add to Home Screen" to install app', '📲');
          } else if (isMac) {
            showToast('On Mac: In Safari, click File -> "Add to Dock..." to install app', '📲');
          } else {
            showToast('In browser menu: Click "Install Nova IPTV" or "Add to Home Screen"', '📲');
          }
        }
      });
    }
  }

  // --- Sidebar Resizer for Desktop ---
  function initSidebarResizer() {
    const resizer = document.getElementById('sidebar-resizer');
    const sidebar = document.getElementById('sidebar-panel');
    if (!resizer || !sidebar) return;

    // Restore saved width from localStorage
    const savedWidth = localStorage.getItem('nova_sidebar_width');
    if (savedWidth && window.innerWidth > 768) {
      const parsed = parseInt(savedWidth, 10);
      if (parsed >= 260 && parsed <= window.innerWidth * 0.65) {
        sidebar.style.width = `${parsed}px`;
      }
    }

    let isDragging = false;
    let startX = 0;
    let startWidth = 0;

    function onPointerDown(e) {
      if (window.innerWidth <= 768) return;
      isDragging = true;
      startX = e.clientX;
      startWidth = sidebar.getBoundingClientRect().width;
      resizer.classList.add('resizing');
      document.body.classList.add('is-resizing');
      e.preventDefault();
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      const minW = 260;
      const maxW = Math.floor(window.innerWidth * 0.65);
      const newWidth = Math.min(Math.max(startWidth + deltaX, minW), maxW);
      sidebar.style.width = `${newWidth}px`;
    }

    function onPointerUp() {
      if (!isDragging) return;
      isDragging = false;
      resizer.classList.remove('resizing');
      document.body.classList.remove('is-resizing');
      const finalWidth = Math.round(sidebar.getBoundingClientRect().width);
      localStorage.setItem('nova_sidebar_width', finalWidth);
    }

    // Double click to reset to default (380px)
    resizer.addEventListener('dblclick', () => {
      sidebar.style.width = '380px';
      localStorage.setItem('nova_sidebar_width', 380);
      showToast('Sidebar reset to default width (380px)', '📐');
    });

    resizer.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    // Touch dragging on touch-enabled laptops / tablets
    resizer.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        onPointerDown(e.touches[0]);
      }
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length === 1) {
        onPointerMove(e.touches[0]);
      }
    }, { passive: true });

    window.addEventListener('touchend', onPointerUp);
  }

  // --- Init ---
  function init() {
    loadStoredData();
    setVolume(state.volume);
    initCastFramework();
    initPwa();
    initSidebarResizer();
    applySubtitleState();
    setupEventListeners();
    loadPlaylist();
  }

  document.addEventListener('DOMContentLoaded', init);

})();
