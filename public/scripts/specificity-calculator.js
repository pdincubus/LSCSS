const form = document.querySelector('[data-specificity-form]');
const input = document.querySelector('[data-specificity-input]');
const output = document.querySelector('[data-specificity-output]');

function stripWhere(selector) {
    return selector.replace(/:where\([^)]*\)/g, '');
}

function countMatches(value, pattern) {
    return (value.match(pattern) || []).length;
}

function calculateSpecificity(selector) {
    const cleanedSelector = stripWhere(selector);

    const ids = countMatches(cleanedSelector, /#[\w-]+/g);
    const classes = countMatches(cleanedSelector, /\.[\w-]+/g);
    const attributes = countMatches(cleanedSelector, /\[[^\]]+\]/g);
    const pseudoClasses = countMatches(cleanedSelector, /:(?!:)[\w-]+(?:\([^)]*\))?/g);
    const pseudoElements = countMatches(cleanedSelector, /::[\w-]+/g);
    const elements = countMatches(
        cleanedSelector.replace(/#[\w-]+|\.[\w-]+|\[[^\]]+\]|:{1,2}[\w-]+(?:\([^)]*\))?/g, ' '),
        /\b[a-z][\w-]*\b/gi
    );

    return {
        ids,
        classes: classes + attributes + pseudoClasses,
        elements: elements + pseudoElements
    };
}

function updateOutput(selector) {
    const result = calculateSpecificity(selector);

    output.textContent = `${result.ids}, ${result.classes}, ${result.elements}`;
}

if (form && input && output) {
    updateOutput(input.value);

    input.addEventListener('input', () => {
        updateOutput(input.value);
    });
}
