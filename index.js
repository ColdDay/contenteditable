function sendMessage() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  	selectedId = tabs[0].id;
  	chrome.tabs.executeScript(selectedId, {file: "main.js"});
  });
}
sendMessage();