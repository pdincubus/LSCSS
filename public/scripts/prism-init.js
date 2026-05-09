import Prism from 'prismjs';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';

function loadStylesheet(href) {
    if (document.querySelector(`link[href="${href}"]`)) {
        return;
    }

    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = href;

    document.head.append(link);
}

loadStylesheet('/styles/components/code-example.css');
loadStylesheet('/styles/vendor/prism.css');

Prism.highlightAll();
