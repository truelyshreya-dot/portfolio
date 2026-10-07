// =========================
// PORTFOLIO JAVASCRIPT
// =========================

// Show a message when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Shreya's Portfolio Loaded");
});


// =========================
// NAVIGATION ACTIVE LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + currentSection) {
            link.style.color = "#4da6ff";
        }
    });

});


// =========================
// SCROLL REVEAL
// =========================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .education-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Initial card state
cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});