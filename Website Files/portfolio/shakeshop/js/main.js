
// When the user scrolls down 200px from the top of the document, show the arrow button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("home_button").style.display = "block";
  } else {
    document.getElementById("home_button").style.display = "none";
  }
}

// On click, scroll to the top of the document
function arrow() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}