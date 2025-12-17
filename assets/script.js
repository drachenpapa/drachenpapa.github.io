document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
        navMenu.classList.toggle("flex");
    });

    initializeTheme();
    lucide.createIcons();
});

function initializeTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    const iconSun = document.getElementById("icon-sun");
    const iconMoon = document.getElementById("icon-moon");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    function updateThemeIcon(isDark) {
        iconSun.classList.toggle('hidden', !isDark);
        iconMoon.classList.toggle('hidden', isDark);
    }

    if (prefersDark) {
        document.documentElement.classList.add("dark");
    }
    updateThemeIcon(prefersDark);

    themeToggle.addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        updateThemeIcon(isDark);
    });
}
