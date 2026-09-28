(function () {
    "use strict";

    const nav = document.getElementById("mainNav");
    const menu = document.getElementById("navbarResponsive");

    // Solid navbar once the page is scrolled past the top
    const updateNavbar = function () {
        nav.classList.toggle("navbar-scrolled", window.scrollY > 100);
    };
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    // Close the mobile menu after a link is tapped
    document.querySelectorAll("#navbarResponsive .nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            if (menu.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });

    // Keep the copyright year current
    const year = document.getElementById("copyright-year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }
})();
