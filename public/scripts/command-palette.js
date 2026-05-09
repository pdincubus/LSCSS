const palette = document.querySelector('[data-command-palette]');

function togglePalette() {
    if (!palette) {
        return;
    }

    palette.hidden = !palette.hidden;
}

document.addEventListener('keydown', (event) => {
    const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';

    if (isShortcut) {
        event.preventDefault();
        togglePalette();
    }

    if (event.key === 'Escape' && palette && !palette.hidden) {
        palette.hidden = true;
    }
});
