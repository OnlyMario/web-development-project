// Form validation for the Contact page
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Check if all fields are filled out
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent the form from submitting if any field is empty
    } else {
        alert('Form submitted successfully!');
    }
});
