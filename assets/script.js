document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    initSlider();
    initializeTheme();
});

function toggleTheme() {
    document.documentElement.classList.toggle("dark");
}

function initializeTheme() {
    document.documentElement.classList.toggle("dark", document.getElementById("toggle").checked);
    document.getElementById("toggle").checked = document.documentElement.classList.contains("dark");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function initSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');

    slides.forEach((_, index) => {
        const dot = createDot(index);
        dotsContainer.appendChild(dot);
    });

    function createDot(index) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => moveToSlide(index));
        return dot;
    }

    function moveToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        dotsContainer.children[index].classList.add('active');
    }
}
