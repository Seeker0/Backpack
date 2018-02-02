chrome.runtime.sendMessage({
  name: document.title,
  link: window.location.href,
  summary: window.getSelection().toString()
});
