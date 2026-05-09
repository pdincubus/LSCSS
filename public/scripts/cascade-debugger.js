const selectorInput = document.querySelector('[data-debug-selector]');
const layerInput = document.querySelector('[data-debug-layer]');
const output = document.querySelector('[data-cascade-output]');
const layerItems = document.querySelectorAll('[data-layer]');

const layerOrder = [
    'legacy',
    'settings',
    'base',
    'utilities',
    'layout',
    'components',
    'theme',
    'hacks'
];

function count(pattern, value) {
    return (value.match(pattern) || []).length;
}

function specificity(selector) {
    return {
        ids: count(/#[\w-]+/g, selector),
        classes: count(/\.[\w-]+/g, selector),
        elements: count(/\b[a-z]+\b/gi, selector)
    };
}

function update() {
    const selector = selectorInput.value;
    const layer = layerInput.value;

    const result = specificity(selector);

    output.textContent = `Specificity ${result.ids}, ${result.classes}, ${result.elements}. Layer priority: ${layerOrder.indexOf(layer) + 1}`;

    layerItems.forEach((item) => {
        item.classList.toggle('is_active', item.dataset.layer === layer);
    });
}

if (selectorInput && layerInput && output) {
    update();

    selectorInput.addEventListener('input', update);
    layerInput.addEventListener('change', update);
}
