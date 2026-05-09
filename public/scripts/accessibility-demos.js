const directionSelect = document.querySelector('[data-direction-select]');
const logicalDemo = document.querySelector('[data-logical-demo]');

if (directionSelect && logicalDemo) {
    directionSelect.addEventListener('change', () => {
        logicalDemo.dir = directionSelect.value;
    });
}
