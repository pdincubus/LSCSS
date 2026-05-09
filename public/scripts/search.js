const searchInput = document.querySelector('[data-doc-search]');
const searchItems = document.querySelectorAll('[data-search-item]');

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const value = searchInput.value.toLowerCase();

        searchItems.forEach((item) => {
            const text = item.textContent.toLowerCase();

            item.hidden = !text.includes(value);
        });
    });
}
