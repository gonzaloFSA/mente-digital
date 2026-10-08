// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// Año automático del footer
document.getElementById("year").textContent = new Date().getFullYear();

// Animación simple al aparecer las tarjetas
const animatedElements = document.querySelectorAll(".course-card, .service, .offer-box, .contact-box");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

animatedElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .6s ease, transform .6s ease";
    observer.observe(element);
});
