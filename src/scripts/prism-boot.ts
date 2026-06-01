function bootCodeExamples(): void {
    if (!document.querySelector('[data-code-example]')) {
        return;
    }

    void import('./prism-code-examples');
}

function bootCliCommands(): void {
    if (!document.querySelector('[data-cli-command]')) {
        return;
    }

    void import('./cli-command');
}

function bootSectionNav(): void {
    if (!document.querySelector('.section-nav')) {
        return;
    }

    void import('./section-nav');
}

bootCodeExamples();
bootCliCommands();
bootSectionNav();
