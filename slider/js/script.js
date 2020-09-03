'use strict';

const slides = document.querySelectorAll('.slide'),
      prev = document.querySelector('#prev'),
      next = document.querySelector('#next');

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block';
}

function plusSlide(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
    plusSlide(-1);
});

next.addEventListener('click', () => {
    plusSlide(1);
});