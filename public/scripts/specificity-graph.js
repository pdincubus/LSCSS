const input = document.querySelector('[data-specificity-selector]');

const idsBar = document.querySelector('[data-bar-ids]');
const classesBar = document.querySelector('[data-bar-classes]');
const elementsBar = document.querySelector('[data-bar-elements]');

function count(pattern, value) {
    return (value.match(pattern) || []).length;
}

function update() {
    const selector = input.value;

    const ids = count(/#[\w-]+/g, selector);
    const classes = count(/\.[\w-]+/g, selector);
    const elements = count(/\b[a-z]+\b/gi, selector);

    idsBar.style.inlineSize = `${ids * 20}%`;
    classesBar.style.inlineSize = `${classes * 12}%`;
    elementsBar.style.inlineSize = `${elements * 8}%`;
}

if (input) {
    update();

    input.addEventListener('input', update);
}
