// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbarMenu');

hamburger?.addEventListener('click', () => {
    const navLinks = navbarMenu.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = navbarMenu.querySelector('.nav-links');
        navLinks.classList.remove('active');
    });
});

// Scroll to Top Button
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

scrollTop?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// WhatsApp Function
function openWhatsApp() {
    const phoneNumber = '918800000000';
    const message = 'Hi! I would like to know more about your digital marketing and branding services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Form Submission Handler
function handleFormSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Phone validation (basic)
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        alert('Please enter a valid phone number');
        return;
    }

    // Prepare email message
    const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

    // Send email via mailto (client-side)
    const mailtoLink = `mailto:hello@cliptabagency.in?subject=New Lead from Cliptabagency.in&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    // Also open WhatsApp with the message
    const whatsappMessage = `Hello! I'm ${name}. I'm interested in your services. Please contact me at ${email} or ${phone}.`;
    const whatsappUrl = `https://wa.me/918800000000?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    form.reset();
    alert('Thank you for reaching out! We will contact you soon.');
}

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active Navigation Link
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active class styling to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Form validation on input
document.getElementById('email')?.addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value && !emailRegex.test(this.value)) {
        this.style.borderColor = '#dc3545';
    } else {
        this.style.borderColor = '';
    }
});

document.getElementById('phone')?.addEventListener('blur', function() {
    const phoneRegex = /^\d{10,}$/;
    if (this.value && !phoneRegex.test(this.value.replace(/\D/g, ''))) {
        this.style.borderColor = '#dc3545';
    } else {
        this.style.borderColor = '';
    }
});

// Lazy Loading for Images (if you add images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

console.log('Cliptabagency.in Website Loaded Successfully');