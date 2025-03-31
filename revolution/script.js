// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Language switching logic
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', function () {
    const lang = this.value;
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
    document.title = document.querySelector('title').getAttribute(`data-${lang}`);
});

// Set Spanish as default on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute('data-es');
    });
    document.title = document.querySelector('title').getAttribute('data-es');
});