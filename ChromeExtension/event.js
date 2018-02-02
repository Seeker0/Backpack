function getPageDetails(callback) {
  // Inject the content script into the current page

  chrome.tabs.executeScript(null, { file: "content.js" });
  // Perform the callback when a message is received from the content script
  chrome.runtime.onMessage.addListener(function(message) {
    // Call the callback function
    callback(message);
  });
}

chrome.runtime.onInstalled.addListener(function() {
  var context = "link";
  var title = "Save this to your pouch!";
  var id = chrome.contextMenus.create({
    title: title,
    contexts: [context],
    id: "context" + context
  });
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  // Replace any instances of the URLEncoded space char with +
  var link = info.linkUrl;
  var params = "link=" + link;
  params = params.replace(/%20/g, "+");
  console.log(link);
  var postUrl = "http://localhost:3001/items";

  // Set up an asynchronous AJAX POST request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", postUrl, true);

  // Prepare the data to be POSTed by URLEncoding each field's contents

  //var url = encodeURIComponent(document.getElementById("url").value);

  // Set correct header for form data
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  // Handle request state change events
  xhr.onreadystatechange = function() {
    // If the request completed
    if (xhr.readyState == 4) {
      statusDisplay.innerHTML = "";
      if (xhr.status == 200) {
        statusDisplay.innerHTML = "Saved!";
        window.setTimeout(window.close, 1000);
      } else {
        statusDisplay.innerHTML = "Error saving: " + xhr.statusText;
      }
    }
  };

  // Send the request and set status
  xhr.send(params);
  //statusDisplay.innerHTML = "Saving...";
}
