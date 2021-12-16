const input = document.getElementById('js-template');
const form = document.getElementById('js-form');
const message = document.getElementById('js-message');

form.addEventListener('submit', saveSearchTemplate);

async function saveSearchTemplate(event) {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) return;

    try {
        // Save the search template to storage
        chrome.storage.sync.set({ search_template: value }, () => {
            message.setAttribute('class', 'success');
            message.textContent = 'Search template saved successfully!';
        });
    } catch (err) {
        message.setAttribute('class', 'error');
        message.textContent = err;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve search template from the storage (if present)
    // and set it as the default value of the input
    const defaultURL = 'https://www.google.com/search?q="${SUBJECT}"';

    chrome.storage.sync.get(['search_template'], (result) => {
        let search_template = result.search_template;
        if (!search_template) {
            search_template = defaultURL;
            chrome.storage.sync.set({ search_template: search_template });
        }
        input.value = search_template;
    });
});
