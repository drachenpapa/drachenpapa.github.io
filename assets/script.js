document.addEventListener("DOMContentLoaded", () => {
    initializeMobileMenu();
    initializeTheme();

    if (window.lucide) {
        window.lucide.createIcons();
    }
});

function initializeMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => navMenu.classList.toggle("hidden"));
}

function initializeTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    const iconSun = document.getElementById("icon-sun");
    const iconMoon = document.getElementById("icon-moon");

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    function updateTheme(isDark) {
        document.documentElement.classList.toggle("dark", isDark);
        iconSun.classList.toggle('hidden', !isDark);
        iconMoon.classList.toggle('hidden', isDark);
    }

    updateTheme(prefersDark);

    themeToggle.addEventListener("click", () => {
        const isDark = document.documentElement.classList.contains("dark");
        updateTheme(!isDark);
    });
}
