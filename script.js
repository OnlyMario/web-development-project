// Simple form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name === '' || email === '') {
        alert('Please fill in both fields');
        event.preventDefault(); // Stop form submission
    } else {
        alert('Form submitted successfully');
    }
});
