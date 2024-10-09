document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        event.preventDefault();
    } else {
        alert('Thank you for contacting us!');
    }
});
