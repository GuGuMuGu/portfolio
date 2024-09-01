// script.js

document.addEventListener('DOMContentLoaded', function() {
    const aboutText = document.querySelector('.about-content h2');
    const text = 'About Me';
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            aboutText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }

    typeEffect();
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animate skills when they enter the viewport
    function animateSkills() {
        skillCards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('in-view');
            } else {
                card.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', animateSkills);
    animateSkills();
});


document.querySelector('.contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
        return false;
    }
    
    // Email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        return false;
    }

    // Successful validation
    alert('Your message has been sent successfully!');
    return true;
});


