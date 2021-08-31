
function off() {
  document.getElementById("overlay").style.height= "0%";
  document.getElementById("underlay").style.display = "block";
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation1").style.top = "0";
    document.getElementById("openbtn").style.display = "none";
  } else {
    document.getElementById("navigation1").style.top = "-80px";
    document.getElementById("openbtn").style.display = "block";

  }
  prevScrollpos = currentScrollPos;
}



function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
