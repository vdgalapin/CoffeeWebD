const slides = document.querySelector(".slides");
let index = 0;

function nextSlide() {
    index++;
    if (index >= slides.children.length) {
        index = 0; // Reset to first slide
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 3000); // Change every 3 seconds