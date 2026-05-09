const input = document.querySelector('[data-live-css]');
const style = document.querySelector('[data-playground-style]');

if (input && style) {
    style.textContent = input.value;

    input.addEventListener('input', () => {
        style.textContent = input.value;
    });
}
