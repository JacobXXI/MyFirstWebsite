document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded!");
    
    // Add smooth scroll behavior only to hash (#) navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            // Only prevent default and use smooth scroll for hash links
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
