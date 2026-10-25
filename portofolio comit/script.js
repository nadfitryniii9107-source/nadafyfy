document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".hero-text, .hero-image, .projects, .expertise, .contact"
    );

    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.15}s`;
    });
});