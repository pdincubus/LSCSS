const blocks = document.querySelectorAll('pre');

blocks.forEach((block) => {
    const button = document.createElement('button');

    button.className = 'copy-button';
    button.type = 'button';
    button.textContent = 'Copy';

    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(block.innerText);

            button.textContent = 'Copied';

            setTimeout(() => {
                button.textContent = 'Copy';
            }, 1500);
        } catch {
            button.textContent = 'Failed';
        }
    });

    block.before(button);
});
