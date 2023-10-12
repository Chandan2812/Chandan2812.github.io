let menu = document.getElementById("menu-icon");
let navbar = document.getElementById("nav-menu"); 
let m = document.querySelector(".main-body");
let count = 0;

// Toggle function for the menu
function toggleMenu() {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
    count++;
    m.classList.toggle("m-t");
}

menu.addEventListener("click", (event) => {
    event.preventDefault(); 
    toggleMenu();
});

let btn1 = document.getElementById("resume-button-1");
let btn2 = document.getElementById("resume-button-2");

btn1.addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1ObsjKlgkj_aVacszJF95EDlxw_u5NG6t/view?usp=sharing");
});

btn2.addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1ObsjKlgkj_aVacszJF95EDlxw_u5NG6t/view?usp=sharing");
});

// Close the menu when a navigation link is clicked
let navLinks = navbar.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbar.classList.contains("open")) {
            toggleMenu();
        }
    });
});
