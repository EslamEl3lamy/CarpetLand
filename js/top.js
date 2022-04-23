//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $("html,body").animate({ scrollTop: '0' }, 1000);
}
// Slider
$(document).ready(function() {
  $('#slider ,#slider1 ,#slider2').nivoSlider();
});
document.body.insertBefore("eslam","docum")