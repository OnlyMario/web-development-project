// Form validation with sound and confetti effect on successful form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
        playSuccessSound();
        triggerConfetti();
    }
});

// Play a sound when the form is successfully submitted
function playSuccessSound() {
    let audio = new Audio('success-sound.mp3');  // Ensure you have a sound file in your project
    audio.play();
}

// Trigger confetti effect
function triggerConfetti() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js';
    script.onload = function() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };
    document.body.appendChild(script);
}
