const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Event listener for menu button
menuBtn.addEventListener("click", () => {
    // Toggle the open class on the navigation links
    navLinks.classList.toggle("open");
    // Update the menu button icon based on whether the menu is open
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Event listener for navigation links
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        // When a link is clicked, remove the open class from the navigation links
        navLinks.classList.remove('open');
        // Reset the menu button icon to the menu line icon
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
});

// ScrollReveal options
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// ScrollReveal animations
ScrollReveal().reveal(".container-left h1", scrollRevealOption);
ScrollReveal().reveal(".container-left .container-btn", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".container-right h4", {
    ...scrollRevealOption,
    delay: 2000,
});
ScrollReveal().reveal(".container-right h2", {
    ...scrollRevealOption,
    delay: 2500,
});
ScrollReveal().reveal(".container-right h3", {
    ...scrollRevealOption,
    delay: 3000,
});
ScrollReveal().reveal(".container-right p", {
    ...scrollRevealOption,
    delay: 3500,
});

ScrollReveal().reveal(".container-right .tent-1", {
    duration: 1000,
    delay: 4000,
});
ScrollReveal().reveal(".container-right .tent-2", {
    duration: 1000,
    delay: 4500,
});

ScrollReveal().reveal(".location", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});
ScrollReveal().reveal(".socials span", {
    ...scrollRevealOption,
    origin: "top",
    delay: 5500,
    interval: 500,
});
