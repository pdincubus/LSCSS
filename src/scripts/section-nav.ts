/**
 * Smooth in-page jumps for section-nav chips only (not global scroll-behavior).
 * Skips entirely when reduced motion is requested so hash links use native jumps.
 * Ignores modified / non-primary clicks.
 */
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (document.querySelector('.section-nav')) {
        document.addEventListener(
            'click',
            (e) => {
                if (e.defaultPrevented) {
                    return;
                }
                if (e.button !== 0) {
                    return;
                }
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
                    return;
                }

                const a = (e.target as Element).closest('.section-nav a[href^="#"]');
                if (!a) {
                    return;
                }
                if (a instanceof HTMLAnchorElement && a.target === '_blank') {
                    return;
                }

                const href = a.getAttribute('href');
                if (!href || href === '#') {
                    return;
                }

                const id = decodeURIComponent(href.slice(1));
                if (!id) {
                    return;
                }

                const el = document.getElementById(id);
                if (!el) {
                    return;
                }

                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, '', href);
            },
            false
        );
    }
}
