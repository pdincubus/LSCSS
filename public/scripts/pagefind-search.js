async function initSearch() {
    const input = document.querySelector('#docs-search-input');
    const results = document.querySelector('#search-results');

    if (!input || !results) {
        return;
    }

    const pagefind = await import('/pagefind/pagefind.js');

    input.addEventListener('input', async (event) => {
        const term = event.target.value.trim();

        if (!term) {
            results.innerHTML = '';
            return;
        }

        const search = await pagefind.search(term);
        const items = await Promise.all(search.results.slice(0, 8).map((result) => result.data()));

        results.innerHTML = items.map((item) => `
            <article class="search-result">
                <a href="${item.url}">
                    <strong>${item.meta.title}</strong>
                </a>
                <p>${item.excerpt}</p>
            </article>
        `).join('');
    });
}

initSearch();
