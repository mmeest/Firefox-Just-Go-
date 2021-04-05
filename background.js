/* function onCreated(tab) {
console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
console.log(`Error: ${error}`);
} */

/* to run go to
1. about:debugging
2. This Firefox
3. Load Temporary Add-on */

browser.browserAction.onClicked.addListener(function() {

    navigator.clipboard.readText().then(
        clipText => browser.tabs.create({
            url:clipText
        })
    )

});