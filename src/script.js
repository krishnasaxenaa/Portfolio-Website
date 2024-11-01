document.querySelectorAll('.services a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelector('.btn').addEventListener('click', function () {
    document.querySelector('.project-section').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Simple validation
    if (!name || !email || !message) {
        alert("All fields are required!");
        e.preventDefault();
        return;
    }
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        e.preventDefault();
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
