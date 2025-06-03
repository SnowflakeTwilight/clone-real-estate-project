document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('.nav ul li');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = e.target.textContent.toLowerCase().replace(' ', '');
            const section = document.querySelector(`.page${targetSection === 'overview' ? '1' : 
                targetSection === 'paymentplan' ? '5' : 
                targetSection === 'gallery' ? '4' : 
                targetSection === 'floor' ? '3' : 
                'last-page'}`);
            
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation and submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = form.querySelector('input[name="Name"]').value;
            const mobile = form.querySelector('input[name="Mobile"]').value;
            const email = form.querySelector('input[name="Email"]').value;
            const preference = form.querySelector('select[name="Preference"]').value;

            // Basic validation
            if (!name || !mobile || !email) {
                alert('Please fill in all required fields');
                return;
            }

            if (!/^\d{10}$/.test(mobile)) {
                alert('Please enter a valid 10-digit mobile number');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Log form data (in a real application, this would be sent to a server)
            console.log('Form Submission:', {
                name,
                mobile,
                email,
                preference
            });

            alert('Thank you for your submission! Our team will contact you soon.');
            form.reset();
        });
    });

    // Button click animations
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Download brochure button (mock functionality)
    const downloadButtons = document.querySelectorAll('.download, .card button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Brochure download will start shortly...');
            // In a real application, this would trigger an actual file download
        });
    });
});