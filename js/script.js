const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 10000);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval); 
        currentSlide = index;
        showSlide(currentSlide);
        startAutoSlide(); 
    });
});

startAutoSlide();