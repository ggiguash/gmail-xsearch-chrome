// Register the application ID at https://www.inboxsdk.com/register
const APP_ID = 'sdk_rhmailmanfinder_05fd2e88ac';

InboxSDK.load(2, APP_ID).then(function (sdk) {
    // Add a thread button
    sdk.Toolbars.registerThreadButton({
        title: "GMail External Search",
        iconUrl: chrome.runtime.getURL("icons/128.png"),
        positions: ["THREAD"],
        listSection: sdk.Toolbars.SectionNames.OTHER,
        onClick: (event) => runSearchQuery(event, sdk)
    });
});

function runSearchQuery(event, sdk) {
    // Get the thread view of the event
    const threadView = event.selectedThreadViews ? event.selectedThreadViews[0] : null;
    if (!threadView) {
        alert('No thread view for the selected event');
        return;
    }
    // Get the subject of the current view
    const strSubject = threadView.getSubject();
    if (!strSubject) {
        alert('No subject for the selected message thread');
        return;
    }
    // Send a message to the background page to run the search
    chrome.runtime.sendMessage({subject: strSubject});
}
