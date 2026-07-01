function sameOriginHref(raw) {
    try {
        const u = new URL(raw, window.location.origin);
        if (u.origin !== window.location.origin) {
            return '#';
        }
        return u.pathname + u.search + u.hash;
    } catch {
        return '#';
    }
}

function createMessage(className, role, text) {
    const message = document.createElement('p');
    message.className = className;
    message.textContent = text;

    if (role) {
        message.setAttribute('role', role);
    }

    return message;
}

function showUnavailable(results, input) {
    results.replaceChildren(
        createMessage('search-unavailable', 'status', 'Search index is not available.'),
        createMessage('search-help', '', 'Search is temporarily unavailable. Please try again later.'),
    );
    input.placeholder = 'Search unavailable…';
    input.disabled = true;
}

function appendSafeExcerptNodes(source, target) {
    source.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            target.append(node.textContent ?? '');
            return;
        }

        if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        const element = node;

        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
            return;
        }

        if (element.tagName === 'MARK') {
            const mark = document.createElement('mark');
            appendSafeExcerptNodes(element, mark);
            target.append(mark);
            return;
        }

        appendSafeExcerptNodes(element, target);
    });
}

function createExcerptFragment(value) {
    const template = document.createElement('template');
    const fragment = document.createDocumentFragment();
    template.innerHTML = String(value ?? '');
    appendSafeExcerptNodes(template.content, fragment);

    return fragment;
}

function createHit(item) {
    const article = document.createElement('article');
    const link = document.createElement('a');
    const title = document.createElement('strong');
    const excerpt = document.createElement('p');

    article.className = 'hit';
    link.href = sameOriginHref(item.url ?? '#');
    title.textContent = item.meta?.title ?? item.url ?? '';
    excerpt.append(createExcerptFragment(item.excerpt));

    link.append(title);
    article.append(link, excerpt);

    return article;
}

async function initSearch() {
    const input = document.querySelector('#site-search-query');
    const results = document.querySelector('#site-search-hits');

    if (!input || !results) {
        return;
    }

    let runSearch;
    try {
        const pagefind = await import('/pagefind/pagefind.js');
        runSearch = pagefind.search.bind(pagefind);
    } catch (err) {
        console.error('Pagefind could not load:', err);
        showUnavailable(results, input);
        return;
    }

    input.addEventListener('input', async (event) => {
        if (!(event.target instanceof HTMLInputElement)) {
            return;
        }

        const term = event.target.value.trim();

        if (!term) {
            results.replaceChildren();
            return;
        }

        try {
            const search = await runSearch(term);
            const items = await Promise.all(
                search.results.slice(0, 8).map((result) => result.data()),
            );

            if (!items.length) {
                results.replaceChildren(
                    createMessage('search-empty', 'status', `No results for “${term}”.`),
                );
                return;
            }

            results.replaceChildren(...items.map((item) => createHit(item)));
        } catch (err) {
            console.error('Pagefind search failed:', err);
            results.replaceChildren(
                createMessage('search-error', 'alert', 'Search failed. Please try again.'),
            );
        }
    });
}

initSearch();
