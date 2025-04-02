document.addEventListener("DOMContentLoaded", () => {
    initNavMenu();
    initializeTheme();
    initSlider();
    lucide.createIcons();
});

function initNavMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("hidden");
        navMenu.classList.toggle("flex");
    });
}

function initializeTheme() {
    document.documentElement.classList.toggle("dark", document.getElementById("toggle").checked);
    document.getElementById("toggle").checked = document.documentElement.classList.contains("dark");
}

function initSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    const dots = [];

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');

        dot.addEventListener('click', () => moveToSlide(index));
        dotsContainer.appendChild(dot);
        dots.push(dot);
    });

    function moveToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleTheme() {
    document.documentElement.classList.toggle("dark");
}
