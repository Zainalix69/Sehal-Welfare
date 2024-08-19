let currentSlide = 0;
const slideInterval = 3000; // Interval for automatic slide change (in milliseconds)
const slides = document.querySelectorAll('.carousel-image');
const totalSlides = slides.length;

// Names corresponding to the images
const names = [
    "Captain (Retired) Ch Khalil Ahmed",
    "Emad ud din Muhammad Finance secretary"
    // Add more names here if you have more images
];

const titles = [
    "President Statement",
    "Finance Secretary Statement"
];

function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    updateText();
}

function updateText() {
    const nameElement = document.querySelector('.president-name');
    const titleElement = document.querySelector('.president-title');

    nameElement.textContent = names[currentSlide];
    titleElement.textContent = titles[currentSlide];
}

function startCarousel() {
    setInterval(() => moveSlide(1), slideInterval);
}

startCarousel();
