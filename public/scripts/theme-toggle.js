const button = document.querySelector('[data-theme-toggle]');
const storageKey = 'lscss-theme';

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(storageKey, theme);
}

const savedTheme = localStorage.getItem(storageKey);

if (savedTheme) {
    setTheme(savedTheme);
}

if (button) {
    button.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme;
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

        setTheme(nextTheme);
    });
}
