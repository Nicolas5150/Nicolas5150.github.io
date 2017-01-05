window.addEventListener('load',start,false);
function start() {
  var windowTimer;
  // Check if device desktop, else all images will show.
  if(window.innerWidth > 780) {
    // Remove all other images on home page, they will show one at a time - fading.
    // This solves the issue if no js, all images will just appear.
    var i, j=0, id, elementName;
    home_imgs = document.getElementsByClassName('other');

    for (i = 0; i < home_imgs.length; i ++) {
      home_imgs[i].style.display = 'none';
    }

    // Cycle through all images for home page.
    // Set array to now include first img as it cycles through.
    home_imgs = document.getElementsByClassName('home_imgs');
    var cycle = setInterval(function() {
        // Grab the needed element.
        id = home_imgs[j].id;
        elementName = document.getElementById(id);
        $(elementName).fadeOut(3000, function() {
          // fadeIn the needed img, check to see if image will reset the cycle.
          j++;
          if (j == home_imgs.length) {
            j = 0;
            id = home_imgs[j].id;
            elementName = document.getElementById(id);
            $(elementName).fadeIn(3000);
          }
          else {
            id = home_imgs[j].id;
            elementName = document.getElementById(id);
            $(elementName).fadeIn(3000);
          }
        });
    }, 6001);
  }
  // Mobile device is more than likely being used (or small screen size).
  else {
    windowCheck();
  }

  // See if window is at desktop size or smaller.
  // If at mobile, remove regular nav and image cycling.
  function windowCheck(){
    regular_nav = document.getElementById('regular_nav');
    stationary_bar = document.getElementById('stationary_bar');
    moving_bar = document.getElementById('moving_bar');
    if(window.innerWidth < 780) {
      clearInterval(cycle);
      regular_nav.style.display = 'none';
      stationary_bar.style.display = 'block';

      home_imgs = document.getElementsByClassName('home_imgs');
      for (i = 0; i < home_imgs.length; i ++) {
        home_imgs[i].style.display = 'block';
      }
    }
    // The screen has returned to a desktop like size.
    else {
      clearInterval(cycle);
      start();

      regular_nav.style.display = 'block';
      stationary_bar.style.display = 'none';
      moving_bar.style.display = 'none';
    }
  }

  // Check on size of window 100 miliseconds after its been resized.
  window.onresize = function(){
    clearTimeout(windowTimer);
    windowTimer = setTimeout(windowCheck, 10);
  };
}
