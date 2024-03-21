const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');

let counter = 1;
const size = slides[0].clientWidth;

slider.style.transform = `translateX(${-size * counter}px)`;

setInterval(() => {
    counter++;

    if (counter >= slides.length) {
        counter = 0;
    }

    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${-size * counter}px)`;
}, 4000); // Change slide every 3 seconds
