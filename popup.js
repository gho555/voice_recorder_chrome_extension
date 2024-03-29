document.getElementById('startRecord').addEventListener('click', async (e) => 
  await chrome.tabs.create({ url: chrome.runtime.getURL("record.html"), active: true, index: 0, pinned: true,  }));