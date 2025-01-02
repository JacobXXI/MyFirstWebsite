document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded!");
    
    // Add smooth scroll behavior to navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href');
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
