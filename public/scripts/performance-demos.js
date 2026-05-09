const slider = document.querySelector('[data-css-size]');
const output = document.querySelector('[data-css-output]');
const meter = document.querySelector('[data-performance-meter] span');

function updateMeter() {
    const value = Number(slider.value);

    output.textContent = `${value} KB`;

    const percentage = Math.min((value / 500) * 100, 100);

    meter.style.inlineSize = `${percentage}%`;

    if (value < 100) {
        meter.dataset.state = 'good';
    } else if (value < 250) {
        meter.dataset.state = 'warning';
    } else {
        meter.dataset.state = 'bad';
    }
}

if (slider && output && meter) {
    updateMeter();

    slider.addEventListener('input', updateMeter);
}
