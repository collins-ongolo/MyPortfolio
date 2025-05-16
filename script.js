document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Website Loaded!");
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu-visible");
        navToggle.classList.toggle("bx-x"); // changes menu icon to 'x'
    });
});
