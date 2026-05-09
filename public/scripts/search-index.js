const input = document.querySelector('[data-search-input]');
const results = document.querySelector('[data-search-results]');

async function loadIndex() {
    const response = await fetch('/search-index.json');

    return response.json();
}

function renderResults(items) {
    results.innerHTML = '';

    items.forEach((item) => {
        const li = document.createElement('li');
        const link = document.createElement('a');

        link.href = item.url;
        link.textContent = item.title;

        li.append(link);
        results.append(li);
    });
}

if (input && results) {
    let index = [];

    loadIndex().then((data) => {
        index = data;
    });

    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();

        const matches = index.filter((item) => {
            return (
                item.title.toLowerCase().includes(value)
                || item.keywords.join(' ').toLowerCase().includes(value)
            );
        });

        renderResults(matches.slice(0, 8));
    });
}
