function escapeHtml(value) {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
}

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

function showUnavailable(results, input) {
    results.innerHTML = `
        <p class="search-unavailable" role="status">Search index is not available.</p>
        <p class="search-unavailable-hint">Run <code>npm run build</code> once so Pagefind output is copied to <code>public/pagefind</code>, then use <code>npm run dev</code> or <code>npm run preview</code>.</p>
    `;
    input.placeholder = 'Search unavailable…';
    input.disabled = true;
}

async function initSearch() {
    const input = document.querySelector('#docs-search-input');
    const results = document.querySelector('#search-results');

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
        const term = event.target.value.trim();

        if (!term) {
            results.innerHTML = '';
            return;
        }

        try {
            const search = await runSearch(term);
            const items = await Promise.all(
                search.results.slice(0, 8).map((result) => result.data()),
            );

            if (!items.length) {
                results.innerHTML = `<p class="search-empty" role="status">No results for “${escapeHtml(term)}”.</p>`;
                return;
            }

            results.innerHTML = items
                .map((item) => {
                    const href = sameOriginHref(item.url);
                    const title = escapeHtml(item.meta?.title ?? item.url);
                    const excerpt = escapeHtml(item.excerpt ?? '');
                    return `
            <article class="search-result">
                <a href="${escapeHtml(href)}">
                    <strong>${title}</strong>
                </a>
                <p>${excerpt}</p>
            </article>
        `;
                })
                .join('');
        } catch (err) {
            console.error('Pagefind search failed:', err);
            results.innerHTML =
                '<p class="search-error" role="alert">Search failed. Please try again.</p>';
        }
    });
}

initSearch();
