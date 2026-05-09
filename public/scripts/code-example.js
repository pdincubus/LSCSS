const examples = document.querySelectorAll('[data-code-example]');

examples.forEach((example) => {
    const button = example.querySelector('[data-copy-code]');
    const code = example.querySelector('code');
    const status = example.querySelector('[data-copy-status]');

    if (!button || !code || !status) {
        return;
    }

    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(code.textContent || '');
            status.textContent = 'Copied to clipboard';
            button.textContent = 'Copied';

            window.setTimeout(() => {
                status.textContent = '';
                button.textContent = 'Copy';
            }, 2000);
        } catch {
            status.textContent = 'Copy failed';
        }
    });
});
