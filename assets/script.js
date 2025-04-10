document.addEventListener("DOMContentLoaded", () => {
    initNavMenu();
    initializeTheme();
    initSlider();
    lucide.createIcons();
});

function initNavMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = navMenu.querySelectorAll("a");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("hidden");
        navMenu.classList.toggle("flex");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 768) {
                navMenu.classList.add("hidden");
                navMenu.classList.remove("flex");
            }
        });
    });
}

function initializeTheme() {
    const toggle = document.getElementById("toggle");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDark) {
        document.documentElement.classList.add("dark");
        toggle.checked = true;
    } else {
        document.documentElement.classList.remove("dark");
        toggle.checked = false;
    }

    toggle.addEventListener("change", () => {
        document.documentElement.classList.toggle("dark", toggle.checked);
    });
}

function initSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const dots = [];

    let currentIndex = 0;
    let startX = 0;

    function moveToSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        moveToSlide(currentIndex + 1);
    }

    function prevSlide() {
        moveToSlide(currentIndex - 1);
    }

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => moveToSlide(index));
        dotsContainer.appendChild(dot);
        dots.push(dot);
    });

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    slider.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }
    });

    moveToSlide(0);
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
