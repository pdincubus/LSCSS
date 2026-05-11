const textarea = document.querySelector('[data-live-css]');

const storageKey = 'lscss-playground';

if (textarea) {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
        textarea.value = saved;
    }

    textarea.addEventListener('input', () => {
        localStorage.setItem(storageKey, textarea.value);
    });
}
