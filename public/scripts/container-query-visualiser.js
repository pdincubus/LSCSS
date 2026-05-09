const range = document.querySelector('[data-container-width]');
const wrap = document.querySelector('[data-container-demo-wrap]');
const output = document.querySelector('[data-container-output]');

function updateWidth() {
    const width = `${range.value}px`;

    wrap.style.inlineSize = width;
    output.textContent = width;
}

if (range && wrap && output) {
    updateWidth();

    range.addEventListener('input', updateWidth);
}
