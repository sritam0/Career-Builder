/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((n) => n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
}));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;
    Array.from(skillsContent).forEach((content) => {
        content.className = "skills__content skills__close";
    });
    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}
skillsHeader.forEach((el) => el.addEventListener("click", toggleSkills));

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => tabContent.classList.remove("qualification__active"));
        target.classList.add("qualification__active");
        tabs.forEach((t) => t.classList.remove("qualification__active"));
        tab.classList.add("qualification__active");
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

modalBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    modalViews[index].classList.add("active-modal");
}));
modalCloses.forEach((close) => close.addEventListener("click", () => {
    modalViews.forEach((modal) => modal.classList.remove("active-modal"));
}));



/*==================== SWIPER CONFIGURATION ====================*/
new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination", clickable: true },
});

new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
    breakpoints: { 568: { slidesPerView: 2 } },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");
        let link = document.querySelector(`.nav__menu a[href*='${sectionId}']`);
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            link?.classList.add("active-link");
        } else {
            link?.classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    nav.classList.toggle("scroll-header", window.scrollY >= 80);
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    scrollUp.classList.toggle("show-scroll", window.scrollY >= 560);
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

if (selectedTheme) {
    document.body.classList.toggle(darkTheme, selectedTheme === "dark");
    themeButton.classList.toggle(iconTheme, selectedIcon === "uil-moon");
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", document.body.classList.contains(darkTheme) ? "dark" : "light");
    localStorage.setItem("selected-icon", themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun");
});

