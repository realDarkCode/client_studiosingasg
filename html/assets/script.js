document.addEventListener('DOMContentLoaded', function () {
    // JavaScript for Menu Toggle 
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuOpenIcon = document.getElementById("menu-open-icon");
    const menuCloseIcon = document.getElementById("menu-close-icon");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden"); // Show/hide mobile menu
        menuOpenIcon.classList.toggle("hidden"); // Toggle open icon
        menuCloseIcon.classList.toggle("hidden"); // Toggle close icon
    });
});