const select = document.querySelector('[data-inspector-rule]');
const output = document.querySelector('[data-inspector-output]');
const layer = document.querySelector('[data-inspector-layer]');
const specificity = document.querySelector('[data-inspector-specificity]');
const scope = document.querySelector('[data-inspector-scope]');

const layoutStage = document.querySelector('[data-stage="layout"]');
const paintStage = document.querySelector('[data-stage="paint"]');
const compositeStage = document.querySelector('[data-stage="composite"]');

function resetStages() {
    layoutStage.classList.remove('is_active');
    paintStage.classList.remove('is_active');
    compositeStage.classList.remove('is_active');
}

function update(value) {
    resetStages();

    if (value === 'layer') {
        layer.textContent = 'theme';
        specificity.textContent = '0, 1, 0';
        scope.textContent = '.card';
        output.textContent = 'Layers help avoid specificity escalation.';
    }

    if (value === 'specificity') {
        layer.textContent = 'components';
        specificity.textContent = '1, 4, 2';
        scope.textContent = '.product-card';
        output.textContent = 'Deep selectors increase specificity cost.';
    }

    if (value === 'scope') {
        layer.textContent = 'components';
        specificity.textContent = '0, 1, 0';
        scope.textContent = '@scope(.product-card)';
        output.textContent = 'Scope boundaries reduce leakage.';
    }

    if (value === 'layout') {
        layoutStage.classList.add('is_active');
        paintStage.classList.add('is_active');
        compositeStage.classList.add('is_active');
        output.textContent = 'Layout-triggering properties are more expensive.';
    }

    if (value === 'paint') {
        paintStage.classList.add('is_active');
        compositeStage.classList.add('is_active');
        output.textContent = 'Paint work affects rendering cost.';
    }

    if (value === 'composite') {
        compositeStage.classList.add('is_active');
        output.textContent = 'Composite-friendly changes are often cheaper.';
    }
}

if (select) {
    update(select.value);

    select.addEventListener('change', () => {
        update(select.value);
    });
}
