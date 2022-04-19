function r(f) { /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f() }
// use like
r(function() {
    // showSlides(1, 1);
    showSlides(1, 2);
    showSlides(1, 3);
    showSlides(1, 4);
});
let slideIndex = [1, 1, 1, 1];

// Next/previous controls
function plusSlides(n, sender) {
    showSlides(slideIndex[sender - 1] += n, sender);
}

// Thumbnail image controls
function currentSlide(n, sender) {
    showSlides(slideIndex[sender - 1] = n, sender);
}

function showSlides(n, sender) {
    let i;
    let slides = document.getElementsByClassName("mySlides" + sender);
    let dots = document.getElementsByClassName("dot" + sender);
    if (n > slides.length) { slideIndex[sender - 1] = 1 }
    if (n < 1) { slideIndex[sender - 1] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[sender - 1] - 1].style.display = "block";
    dots[slideIndex[sender - 1] - 1].className += " active";
}