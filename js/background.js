// Examples of search query templates:
//
// https://groups.google.com/search/conversations?inOrg=true&q=subject%3A"${SUBJECT}"
// https://www.google.com/search?q="${SUBJECT}"
//

function runSearchQuery(request/*, sender, sendResponse*/) {
    // Get the subject from the message
    const strSubject = request.subject;
    if (!strSubject) {
        return;
    }

    // Read the search template from the storage
    chrome.storage.sync.get(['search_template'], (result) => {
        const search_template = result.search_template;
        if (!search_template) {
            alert('Search query template is not defined');
            return;
        }
        // Replace the subject pattern in the query
        const newURL = search_template.replace('${SUBJECT}', strSubject);
        // Run the search query in a new tab
        chrome.tabs.create({ url: newURL });
    });
}

// Register message listener
chrome.runtime.onMessage.addListener(runSearchQuery);
