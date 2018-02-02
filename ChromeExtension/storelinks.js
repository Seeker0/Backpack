function onPageDetailsReceived(pageDetails) {
  document.getElementById("name").value = pageDetails.name;
  document.getElementById("link").value = pageDetails.link;
  document.getElementById("summary").innerText = pageDetails.summary;
}

// Global reference to the status display SPAN
var statusDisplay = null;

// POST the data to the server using XMLHttpRequest
function addBookmark() {
  // Cancel the form submit
  event.preventDefault();

  var postUrl = "http://localhost:3001/items";

  // Set up an asynchronous AJAX POST request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", postUrl, true);

  // Prepare the data to be POSTed by URLEncoding each field's contents
  var name = encodeURIComponent(document.getElementById("name").value);
  var link = encodeURIComponent(document.getElementById("link").value);
  var summary = encodeURIComponent(document.getElementById("summary").value);
  var tags = encodeURIComponent(document.getElementById("tags").value);

  var params =
    "name=" + name + "&link=" + link + "&summary=" + summary + "&tags=" + tags;

  // Replace any instances of the URLEncoded space char with +
  params = params.replace(/%20/g, "+");

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
  statusDisplay.innerHTML = "Saving...";
}

// When the popup HTML has loaded
window.addEventListener("load", function(evt) {
  // Cache a reference to the status display SPAN
  statusDisplay = document.getElementById("status-display");
  // Handle the bookmark form submit event with our addBookmark function
  document
    .getElementById("addbookmark")
    .addEventListener("submit", addBookmark);
  // Get the event page
  chrome.runtime.getBackgroundPage(function(eventPage) {
    // Call the getPageInfo function in the event page, passing in
    // our onPageDetailsReceived function as the callback. This injects
    // content.js into the current tab's HTML
    eventPage.getPageDetails(onPageDetailsReceived);
  });
});
