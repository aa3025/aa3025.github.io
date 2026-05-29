const categories = [
  { name: 'CE', problems: 5, durationMinutes: 60 },
  { name: 'CM', problems: 8, durationMinutes: 90 },
  { name: 'C1', problems: 11, durationMinutes: 120 },
  { name: 'C2', problems: 14, durationMinutes: 180 },
  { name: 'L1', problems: 16, durationMinutes: 180 },
  { name: 'L2', problems: 18, durationMinutes: 180 },
  { name: 'GP', problems: 16, durationMinutes: 180 },
  { name: 'HC', problems: 18, durationMinutes: 180 },
];

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const overrideBtn = document.getElementById('overrideBtn');
const testAlertBtn = document.getElementById('testAlertBtn');
const langToggleBtn = document.getElementById('langToggleBtn');
const applyElapsedBtn = document.getElementById('applyElapsedBtn');
const elapsedControl = document.querySelector('.elapsed-control');
const elapsedTimeDisplay = document.getElementById('elapsedTime');
const elapsedInput = document.getElementById('elapsedInput');
const pageTitle = document.getElementById('pageTitle');
const pageSubtitle = document.getElementById('pageSubtitle');
const focusLabel = document.getElementById('focusLabel');
const elapsedLabel = document.getElementById('elapsedLabel');
const categoryList = document.getElementById('categoryList');
const focusCategories = document.getElementById('focusCategories');
const focusTime = document.getElementById('focusTime');
const alertText = document.getElementById('alertText');

let timerInterval = null;
let soundInterval = null;
let audioContext = null;
let isRunning = false;
let isAlertActive = false;
let activeAlertNames = [];
let alertedCategories = new Set();
let elapsedSeconds = 0;
let currentLang = 'en';

const translations = {
  en: {
    pageTitle: 'Maths and Logic Games Timer',
    pageSubtitle: 'All categories run together. The next ending category appears in the centre.',
    start: 'Start',
    stop: 'Stop',
    reset: 'Reset',
    override: 'Override',
    cancelOverride: 'Cancel Override',
    testAlert: 'Test Alert',
    focusLabel: 'Next Category Ending',
    elapsedLabel: 'Elapsed Since Start',
    categoryStatus: 'Category Status',
    alertReady: 'Timer reset. Press Start when ready.',
    alertStopped: 'Timer stopped. You can restart or reset.',
    alertAllDone: 'All categories complete.',
    alertSetElapsed: 'Elapsed time set to {time}.',
    alertInvalidElapsed: 'Enter elapsed time as hh:mm:ss or mm:ss.',
    alertStopConfirm: 'Stop the timer? This will pause all countdowns.',
    alertResetConfirm: 'Reset all timers to their original start values?',
    statusFinished: 'Finished',
    statusRunning: 'Running',
    statusStopped: 'Stopped',
    statusReady: 'Ready',
    categoriesMeta: '{count} categories · 180 min',
    problemsMeta: '{count} problems · {duration} min',
    alertSoundTest: 'Alert sound test playing...',
    alertComplete: 'Alert test complete.',
    alertPlaying: 'Playing alert for {names}...',
    alertUnavailable: 'Unable to play alert sound for {names}.',
    alertDuring: 'Time up for {names}! Alert will sound for 10 seconds.',
    alertContinue: 'Alert complete. Continuing to next category.',
    alertLabel: 'Alert!',
    langButton: 'FR',
  },
  fr: {
    pageTitle: 'Championnat de jeux mathématiques',
    pageSubtitle: 'Toutes les catégories fonctionnent ensemble. La catégorie qui se termine bientôt apparaît au centre.',
    start: 'Démarrer',
    stop: 'Arrêter',
    reset: 'Réinitialiser',
    override: 'Forcer',
    cancelOverride: 'Annuler',
    testAlert: 'Test Alerte',
    focusLabel: 'Catégorie suivante',
    elapsedLabel: 'Temps écoulé',
    categoryStatus: 'Statut des catégories',
    alertReady: 'Minuteur réinitialisé. Appuyez sur démarrer.',
    alertStopped: 'Minuteur arrêté. Vous pouvez redémarrer ou réinitialiser.',
    alertAllDone: 'Toutes les catégories sont terminées.',
    alertSetElapsed: 'Temps écoulé défini sur {time}.',
    alertInvalidElapsed: 'Entrez le temps écoulé au format hh:mm:ss ou mm:ss.',
    alertStopConfirm: 'Arrêter le minuteur ? Cela mettra en pause tous les compteurs.',
    alertResetConfirm: 'Réinitialiser tous les minuteurs à leurs valeurs de départ ?',
    statusFinished: 'Terminé',
    statusRunning: 'En cours',
    statusStopped: 'Arrêté',
    statusReady: 'Prêt',
    categoriesMeta: '{count} catégories · 180 min',
    problemsMeta: '{count} problèmes · {duration} min',
    alertSoundTest: 'Test du son d’alerte en cours...',
    alertComplete: 'Test d’alerte terminé.',
    alertPlaying: 'Lecture de l’alerte...',
    alertDuring: 'Temps écoulé pour {names} ! Une alerte sonnera pendant 10 secondes.',
    alertContinue: 'Alerte terminée. Passage à la catégorie suivante.',
    langButton: 'EN',
  },
};

function t(key, vars = {}) {
  const template = translations[currentLang][key] || key;
  return Object.keys(vars).reduce(
    (text, varName) => text.replace(new RegExp(`\{${varName}\}`, 'g'), vars[varName]),
    template
  );
}

function applyTranslations() {
  document.title = t('pageTitle');
  pageTitle.textContent = t('pageTitle');
  pageSubtitle.textContent = t('pageSubtitle');
  startBtn.textContent = t('start');
  stopBtn.textContent = t('stop');
  resetBtn.textContent = t('reset');
  overrideBtn.textContent = elapsedControl.classList.contains('active') ? t('cancelOverride') : t('override');
  testAlertBtn.textContent = t('testAlert');
  langToggleBtn.textContent = t('langButton');
  focusLabel.textContent = t('focusLabel');
  elapsedLabel.textContent = t('elapsedLabel');
  document.querySelector('section.list-panel h2').textContent = t('categoryStatus');
}

const originalData = categories.map((category) => ({
  ...category,
  remainingSeconds: category.durationMinutes * 60,
  finished: false,
}));

let state = originalData.map((item) => ({ ...item }));

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return [hours, minutes, secs]
    .map((value) => String(value).padStart(2, '0'))
    .join(':');
}

function updateElapsedDisplay() {
  elapsedTimeDisplay.textContent = formatTime(elapsedSeconds);
}

function updateStateFromElapsed() {
  state.forEach((category) => {
    category.remainingSeconds = Math.max(0, category.durationMinutes * 60 - elapsedSeconds);
  });
}

function parseElapsedInput(value) {
  const parts = value.trim().split(':').map((segment) => segment.trim());
  if (!parts.length || parts.some((part) => part === '')) return null;

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (parts.length === 1) {
    seconds = Number(parts[0]);
  } else if (parts.length === 2) {
    minutes = Number(parts[0]);
    seconds = Number(parts[1]);
  } else if (parts.length === 3) {
    hours = Number(parts[0]);
    minutes = Number(parts[1]);
    seconds = Number(parts[2]);
  } else {
    return null;
  }

  if (
    Number.isNaN(hours) ||
    Number.isNaN(minutes) ||
    Number.isNaN(seconds) ||
    hours < 0 ||
    minutes < 0 ||
    seconds < 0 ||
    minutes >= 60 ||
    seconds >= 60
  ) {
    return null;
  }

  return hours * 3600 + minutes * 60 + seconds;
}

function applyElapsedOverride() {
  const overrideValue = parseElapsedInput(elapsedInput.value);
  if (overrideValue === null) {
    alertText.textContent = t('alertInvalidElapsed');
    return;
  }

  if (!confirm(t('alertSetElapsed', { time: formatTime(overrideValue) }) + ' ' + t('alertResetConfirm'))) {
    return;
  }

  elapsedSeconds = overrideValue;
  updateElapsedDisplay();
  updateStateFromElapsed();
  evaluateFinishedCategories({ silent: true });
  renderCategoryCards();
  renderFocusPanel();
  elapsedControl.classList.remove('active');
  overrideBtn.textContent = t('override');

  if (state.every((category) => category.finished) && !isAlertActive) {
    stopTimer();
    alertText.textContent = t('alertAllDone');
  } else if (!isAlertActive) {
    alertText.textContent = t('alertSetElapsed', { time: formatTime(elapsedSeconds) });
  }
}

function renderCategoryCards() {
  categoryList.innerHTML = '';

  const grouped180 = state.filter((category) => category.durationMinutes === 180);
  const individualCategories = state
    .filter((category) => category.durationMinutes !== 180)
    .sort((a, b) => a.remainingSeconds - b.remainingSeconds);

  individualCategories.forEach((category) => {
    const card = document.createElement('div');
    card.className = `category-card${category.finished ? ' finished' : ''}`;

    const details = document.createElement('div');
    details.className = 'category-details';

    const name = document.createElement('p');
    name.className = 'category-name';
    name.textContent = category.name;

    const meta = document.createElement('p');
    meta.className = 'category-meta';
    meta.textContent = t('problemsMeta', { count: category.problems, duration: category.durationMinutes });

    details.appendChild(name);
    details.appendChild(meta);

    const info = document.createElement('div');
    info.style.textAlign = 'right';

    const time = document.createElement('p');
    time.className = 'category-time';
    time.textContent = formatTime(category.remainingSeconds);

    const status = document.createElement('p');
    status.className = 'category-status';
    if (category.finished) {
      status.textContent = t('statusFinished');
    } else if (isRunning) {
      status.textContent = t('statusRunning');
    } else if (category.remainingSeconds < category.durationMinutes * 60) {
      status.textContent = t('statusStopped');
    } else {
      status.textContent = t('statusReady');
    }

    info.appendChild(time);
    info.appendChild(status);

    card.appendChild(details);
    card.appendChild(info);
    categoryList.appendChild(card);
  });

  if (grouped180.length) {
    const groupFinished = grouped180.every((category) => category.finished);
    const groupRemaining = grouped180[0].remainingSeconds;
    const card = document.createElement('div');
    card.className = `category-card${groupFinished ? ' finished' : ''}`;

    const details = document.createElement('div');
    details.className = 'category-details';

    const name = document.createElement('p');
    name.className = 'category-name';
    name.textContent = grouped180.map((category) => category.name).join(' • ');

    const meta = document.createElement('p');
    meta.className = 'category-meta';
    meta.textContent = t('categoriesMeta', { count: grouped180.length });

    details.appendChild(name);
    details.appendChild(meta);

    const info = document.createElement('div');
    info.style.textAlign = 'right';

    const time = document.createElement('p');
    time.className = 'category-time';
    time.textContent = formatTime(groupRemaining);

    const status = document.createElement('p');
    status.className = 'category-status';
    if (groupFinished) {
      status.textContent = t('statusFinished');
    } else if (isRunning) {
      status.textContent = t('statusRunning');
    } else if (elapsedSeconds > 0) {
      status.textContent = t('statusStopped');
    } else {
      status.textContent = t('statusReady');
    }

    info.appendChild(time);
    info.appendChild(status);

    card.appendChild(details);
    card.appendChild(info);
    categoryList.appendChild(card);
  }
}

function getNextEndingCategories() {
  const activeCategories = state.filter((category) => !category.finished);
  if (!activeCategories.length) return [];
  const minTime = Math.min(...activeCategories.map((category) => category.remainingSeconds));
  return activeCategories.filter((category) => category.remainingSeconds === minTime);
}

function renderFocusPanel() {
  const next = getNextEndingCategories();

  if (isAlertActive) {
    focusCategories.textContent = activeAlertNames.join(' • ') + ' finished!';
    focusTime.textContent = '00:00:00';
    return;
  }

  if (!next.length) {
    focusCategories.textContent = t('alertAllDone');
    focusTime.textContent = '00:00:00';
    alertText.textContent = '';
    return;
  }

  focusCategories.textContent = next.map((category) => category.name).join(' • ');
  focusTime.textContent = formatTime(next[0].remainingSeconds);
}

function evaluateFinishedCategories({ silent = false } = {}) {
  const newlyFinished = state.filter(
    (category) => !category.finished && category.remainingSeconds <= 0
  );

  if (newlyFinished.length > 0) {
    newlyFinished.forEach((category) => {
      category.finished = true;
      category.remainingSeconds = 0;
    });

    if (!silent && !isAlertActive) {
      newlyFinished.forEach((category) => alertedCategories.add(category.name));
      startAlert(newlyFinished.map((category) => category.name));
    }
  }
}

async function startAlert(categoryNames) {
  isAlertActive = true;
  activeAlertNames = categoryNames;
  alertText.textContent = t('alertPlaying', { names: categoryNames.join(', ') });

  // Kick off resume synchronously (no await) so it runs before the async gap,
  // then await the actual playback which needs the context running.
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume().catch(() => {});
  }

  const soundStarted = await playAlertSound();
  if (!soundStarted) {
    alertText.textContent = t('alertUnavailable', { names: categoryNames.join(', ') });
  }

  setTimeout(() => {
    stopAlertSound();
    isAlertActive = false;
    activeAlertNames = [];
    alertText.textContent = t('alertContinue');
    renderFocusPanel();
  }, 10000);
}

function getAudioContext() {
  if (!window.AudioContext && !window.webkitAudioContext) {
    return null;
  }

  // Only create the AudioContext lazily, right before sound is needed,
  // so it is always created within a user-gesture call stack or resumed properly.
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  return audioContext;
}

async function ensureAudioContext() {
  const ctx = getAudioContext();
  if (!ctx) {
    return null;
  }

  if (ctx.state === 'suspended') {
    try {
      await ctx.resume();
    } catch (err) {
      console.warn('Audio resume failed', err);
    }
    // Do NOT return null if still suspended — the resume may complete
    // asynchronously. Return the context and let playback attempt proceed.
  }

  return ctx;
}

async function playAlertSound() {
  const ctx = await ensureAudioContext();
  if (!ctx) {
    return false;
  }

  let oscillator = null;

  function playTone() {
    oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.frequency.value = 880;
    gain.gain.value = 0.12;
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.15);
  }

  if (soundInterval) {
    clearInterval(soundInterval);
    soundInterval = null;
  }

  playTone();
  soundInterval = setInterval(playTone, 400);

  setTimeout(() => {
    stopAlertSound();
  }, 10000);

  return true;
}

function stopAlertSound() {
  if (soundInterval) {
    clearInterval(soundInterval);
    soundInterval = null;
  }
}

function testAlertSound() {
  if (isAlertActive || !window.AudioContext && !window.webkitAudioContext) {
    return;
  }
  alertText.textContent = t('alertSoundTest');
  playAlertSound().catch(() => {});
  setTimeout(() => {
    stopAlertSound();
    alertText.textContent = t('alertComplete');
  }, 1000);
}

function tick() {
  elapsedSeconds += 1;
  updateElapsedDisplay();
  updateStateFromElapsed();

  evaluateFinishedCategories();
  renderCategoryCards();
  renderFocusPanel();

  if (state.every((category) => category.finished)) {
    stopTimer();
    alertText.textContent = 'All categories are complete.';
  }
}

async function startTimer() {
  if (isRunning) return;
  if (state.every((category) => category.finished)) {
    resetState();
  }
  // Prime the AudioContext from within this user-gesture handler so it
  // starts in a running state and is ready when the first alert fires.
  await ensureAudioContext();
  isRunning = true;
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
  alertText.textContent = '';

  timerInterval = setInterval(tick, 1000);
  renderFocusPanel();
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  isRunning = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  if (soundInterval) {
    stopAlertSound();
  }
  isAlertActive = false;
  alertText.textContent = t('alertStopped');
  renderFocusPanel();
}

function resetState() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  if (soundInterval) {
    stopAlertSound();
  }
  isRunning = false;
  isAlertActive = false;
  elapsedSeconds = 0;
  alertedCategories.clear();
  state = originalData.map((item) => ({ ...item }));
  updateStateFromElapsed();
  updateElapsedDisplay();
  elapsedControl.classList.remove('active');
  overrideBtn.textContent = t('override');
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  alertText.textContent = t('alertReady');
  applyTranslations();
  renderCategoryCards();
  renderFocusPanel();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', () => {
  if (!isRunning) return;
  if (confirm(t('alertStopConfirm'))) {
    stopTimer();
  }
});
resetBtn.addEventListener('click', () => {
  if (confirm(t('alertResetConfirm'))) {
    resetState();
  }
});
overrideBtn.addEventListener('click', () => {
  elapsedControl.classList.toggle('active');
  overrideBtn.textContent = elapsedControl.classList.contains('active') ? t('cancelOverride') : t('override');
  if (elapsedControl.classList.contains('active')) {
    elapsedInput.focus();
  }
});
applyElapsedBtn.addEventListener('click', applyElapsedOverride);
langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  applyTranslations();
});

testAlertBtn.addEventListener('click', testAlertSound);

resetState();
applyTranslations();
renderCategoryCards();
renderFocusPanel();
