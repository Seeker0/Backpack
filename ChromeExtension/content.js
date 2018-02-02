chrome.runtime.sendMessage({
  name: document.title,
  link: "yahoo.com",
  summary: window.getSelection().toString()
});
