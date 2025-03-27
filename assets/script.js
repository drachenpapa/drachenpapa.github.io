document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    initSlider();
    const isDarkMode = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.getElementById("toggle").checked = isDarkMode;
});

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {
        console.warn("localStorage not available. Theme cannot be saved.");
    }
}


function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function initSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => moveToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function moveToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        dotsContainer.children[index].classList.add('active');
    }
}
