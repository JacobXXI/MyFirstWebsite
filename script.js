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

    // Check for success message in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') === 'success') {
        alert('Thank you for your feedback!');
        // Remove the success parameter from URL
        window.history.replaceState({}, '', 'feedback.html');
    }

    // Function to sanitize input
    function sanitizeInput(input) {
        return input
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/\//g, '&#x2F;');
    }

    // Handle form submission
    const form = document.getElementById('feedbackForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            try {
                // Get and sanitize form data
                const formData = new FormData(form);
                const sanitizedData = new FormData();
                
                for (let [key, value] of formData.entries()) {
                    // Sanitize each field value
                    sanitizedData.append(key, sanitizeInput(value));
                }
                
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: sanitizedData,
                    headers: {
                        'Accept': 'application/json'
                    },
                    mode: 'cors'
                });
                
                if (response.ok) {
                    alert('Thank you for your feedback!');
                    form.reset();
                } else {
                    console.error('Form submission failed:', await response.text());
                    alert('Oops! There was a problem submitting your feedback.');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                alert('Oops! There was a problem submitting your feedback.');
            }
        });
    }
});
