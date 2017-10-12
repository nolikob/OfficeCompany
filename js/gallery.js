modalActive = false;
function openModal() {
  document.getElementById('myModal').style.display = "block";
  $('.modal .modal-content').css('max-width', $(window).width() * 0.8); 
  $('.modal .modal-content').css('max-height', $(window).height() * 0.8);
  modalActive = true;
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  modalActive = false;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function fadeOut(el, duration) {
    var s = el.style, step = 25/(duration || 300);
    s.opacity = s.opacity || 1;
    (function fade() { (s.opacity -= step) < 0 ? s.display = "none" : setTimeout(fade, 25); })();
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].removeAttribute("id", "active");
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].setAttribute("id", "active");
  
}
document.onkeydown = function(e) {
  if (modalActive === true) {
      switch (e.keyCode) {
          case 37:
            plusSlides(-1);
            break;
          case 39:
            plusSlides(1);
            break;
      }
  }
}