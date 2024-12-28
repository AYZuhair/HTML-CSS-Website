// Placeholder form validation
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert('Message sent successfully!');
    e.target.reset();
    AOS.init({
    duration: 1200, // Animation duration in milliseconds
    });
});

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

