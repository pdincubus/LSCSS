function bootCodeExamples(): void {
    if (!document.querySelector('[data-code-example]')) {
        return;
    }

    void import('./prism-code-examples');
}

function bootSectionNav(): void {
    if (!document.querySelector('.section-nav')) {
        return;
    }

    void import('./section-nav');
}

bootCodeExamples();
bootSectionNav();
