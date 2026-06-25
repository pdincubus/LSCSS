import Prism from './prism-setup';

import type { PackageManager } from '../data/cliCommands';

function getCommandForManager(root: Element, manager: PackageManager): string {
    return root.getAttribute(`data-command-${manager}`) ?? '';
}

function highlightPanel(root: Element): void {
    const code = root.querySelector('.cli-command > pre code');

    if (code) {
        Prism.highlightElement(code);
    }
}

function getActiveCommandText(root: Element): string {
    const code = root.querySelector('.cli-command > pre code');

    return code?.textContent?.trim() ?? '';
}

function setActiveTab(root: Element, manager: PackageManager, commandId: string): void {
    const commandText = getCommandForManager(root, manager);
    const code = root.querySelector('.cli-command > pre code');
    const panel = root.querySelector('.cli-command > pre');

    root.querySelectorAll('[data-cli-tab]').forEach((tab) => {
        const pm = tab.getAttribute('data-cli-tab') as PackageManager;
        const isActive = pm === manager;

        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    if (code) {
        code.textContent = commandText;
    }

    if (panel) {
        panel.setAttribute('aria-labelledby', `cli-tab-${commandId}-${manager}`);
    }

    highlightPanel(root);
}

function initCliCommand(root: Element): void {
    const copyButton = root.querySelector('[data-cli-copy]');
    const status = root.querySelector('[data-cli-copy-status]');
    const panel = root.querySelector('.cli-command > pre');

    if (!copyButton || !status || !panel) {
        return;
    }

    const commandId = panel.id.replace(/^cli-panel-/, '');
    const defaultPm =
        (root.getAttribute('data-default-pm') as PackageManager | null) ?? 'pnpm';

    setActiveTab(root, defaultPm, commandId);

    root.querySelectorAll('[data-cli-tab]').forEach((tab) => {
        tab.addEventListener('click', () => {
            const pm = tab.getAttribute('data-cli-tab') as PackageManager;

            setActiveTab(root, pm, commandId);
        });
    });

    const clearStatus = () => {
        status.textContent = '';
        status.classList.remove('copy-status--success', 'copy-status--error');
    };

    const showStatus = (message: string, type: 'success' | 'error') => {
        status.textContent = message;
        status.classList.remove('copy-status--success', 'copy-status--error');
        status.classList.add(type === 'success' ? 'copy-status--success' : 'copy-status--error');
    };

    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(getActiveCommandText(root));
            showStatus('Copied to clipboard', 'success');
            copyButton.textContent = 'Copied';

            window.setTimeout(() => {
                clearStatus();
                copyButton.textContent = 'Copy';
            }, 2000);
        } catch {
            showStatus('Copy failed', 'error');
        }
    });
}

document.querySelectorAll('[data-cli-command]').forEach((root) => {
    initCliCommand(root);
});
