const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("left-0");
    mobileNav.classList.toggle("left-[-100%]");
});

function closeMenu() {
    mobileNav.classList.add("left-[-100%]");
    mobileNav.classList.remove("left-0");
}

document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
        closeMenu();
    }
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    closeMenu();  // Close menu after clicking a link
}