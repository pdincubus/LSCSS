import Prism from './prism-setup';

function highlightCodeBlocks(): void {
    document.querySelectorAll('pre code[class*="language-"]').forEach((codeBlock) => {
        Prism.highlightElement(codeBlock);
    });
}

highlightCodeBlocks();

const examples = document.querySelectorAll('[data-code-example]');

examples.forEach((example) => {
    const button = example.querySelector('[data-copy-code]');
    const code = example.querySelector('code');
    const status = example.querySelector('[data-copy-status]');

    if (!button || !code || !status) {
        return;
    }

    const clearStatus = () => {
        status.textContent = '';
        status.classList.remove('copy-status--success', 'copy-status--error');
    };

    const showStatus = (message: string, type: 'success' | 'error') => {
        status.textContent = message;
        status.classList.remove('copy-status--success', 'copy-status--error');
        status.classList.add(type === 'success' ? 'copy-status--success' : 'copy-status--error');
    };

    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(code.textContent || '');
            showStatus('Copied to clipboard', 'success');
            button.textContent = 'Copied';

            window.setTimeout(() => {
                clearStatus();
                button.textContent = 'Copy';
            }, 2000);
        } catch {
            showStatus('Copy failed', 'error');
        }
    });
});
