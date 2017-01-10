window.addEventListener('load',remove,false);

// Remove all but image galery from the page.
function remove() {
  contentRemove(1);
}

function contentRemove(value) {
  var contentSections = document.getElementsByClassName('content');
  for (i = value; i < contentSections.length; i ++) {
    contentSections[i].style.display = 'none';
  }

  return contentSections;
}

function changeSection (showID) {
  // Remove all items on screen.
  var home = document.getElementById("wrapper_home");
  home.style.display = "none";
  var contentSections = contentRemove(0);

  // Fade in new item
  $(contentSections[showID]).fadeIn(100);
}

// Mobile navbar dropdown.
function navbar() {
    $("#moving_bar").slideToggle("fast");
}
