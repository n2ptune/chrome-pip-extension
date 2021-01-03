chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.executeScript({ file: './pip.js' })
})

chrome.commands.onCommand.addListener(command => {
  if (command === 'pip') {
    chrome.tabs.executeScript({ file: './pip.js' })
  }
})
