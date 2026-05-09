const select = document.querySelector('[data-animation-mode]');
const box = document.querySelector('[data-render-demo-box]');
const output = document.querySelector('[data-render-output]');

function applyAnimation(mode) {
    box.classList.remove('is_transform', 'is_width');

    if (mode === 'width') {
        box.classList.add('is_width');

        output.textContent = 'Width animation often triggers layout recalculation and repaint work.';

        return;
    }

    box.classList.add('is_transform');

    output.textContent = 'Transform animation often stays in the compositing stage and reduces layout work.';
}

if (select && box && output) {
    applyAnimation(select.value);

    select.addEventListener('change', () => {
        applyAnimation(select.value);
    });
}
