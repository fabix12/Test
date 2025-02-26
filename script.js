// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Service Details
function toggleDetails(serviceId) {
    const details = document.getElementById(serviceId);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

// Contact Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageBox = document.getElementById('form-message');

    if (name && email && message) {
        messageBox.innerHTML = 'Your message has been sent successfully!';
        messageBox.style.color = 'green';
        return true;
    } else {
        messageBox.innerHTML = 'Please fill out all fields.';
        messageBox.style.color = 'red';
        return false;
    }
}
