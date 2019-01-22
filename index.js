function executeEdit() {
  chrome.tabs.executeScript({code: "document.body.setAttribute('contenteditable', true)"}, function(){
    console.log('开始编辑')
  })
}
document.getElementById('stopEdit').addEventListener('click', function(){
  chrome.tabs.executeScript({code: "document.body.setAttribute('contenteditable', false)"}, function(){
    console.log('停止编辑')
    window.close();
  })
})
window.onload = function () {
  executeEdit()
}