"use scrict";

let slides = document.querySelectorAll("#slides .slider__item");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3800);
 
function nextSlide() {
    slides[currentSlide].className = "slider__item";
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = "slider__item slider__item--showing";
}