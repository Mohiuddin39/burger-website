let humburger = document.getElementById("humburger");
let navMenu = document.getElementById("nav-menu");
let navClose = document.getElementById("nav-close");
let navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) =>
  link.addEventListener("click", function () {
    navMenu.classList.add("hidden");
  })
);

navClose.addEventListener("click", function () {
  navMenu.classList.add("hidden");
});

humburger.addEventListener("click", function () {
  navMenu.classList.remove("hidden");
});

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
let tabs = document.querySelectorAll(".tabs_wrap ul li");
let all = document.querySelectorAll(".item_wrap");
let food = document.querySelectorAll(".food");
let snack = document.querySelectorAll(".snack");
let beverage = document.querySelectorAll(".beverage");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    const tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (tabval == "food") {
      food.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "snack") {
      snack.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "beverage") {
      beverage.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollup = () => {
  const scrollBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollBtn.classList.remove("-bottom-1/2");
    scrollBtn.classList.add("bottom-4");
  } else {
    scrollBtn.classList.add("-bottom-1/2");
    scrollBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollup);
/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("border-b-[1px]", "border-secondaryColor");
  } else {
    header.classList.remove("border-b-[1px]", "border-secondaryColor");
  }
};
window.addEventListener("scroll", scrollHeader);

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav__link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-secondaryColor");
    if (item.href.includes(current)) {
      item.classList.add("text-secondaryColor");
    }
  });
};
window.addEventListener("scroll", activeLink);

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home__image");
sr.reveal(".home__content", { origin: "bottom" });
sr.reveal(".category__card"), { interval: 300 };

sr.reveal(".promo__card_1", { origin: "left" });
sr.reveal(".promo__card_2", { origin: "right" });

sr.reveal(".about__img", { origin: "bottom" });
sr.reveal(".about__content", { origin: "top" });

sr.reveal(".menu__items", { origin: "left" });

sr.reveal(".customer__review", { origin: "right" });

sr.reveal(".footer");
