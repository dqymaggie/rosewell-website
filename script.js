// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button and modal elements
    const signInButton = document.querySelector('.sign-in');
    const modal = document.getElementById('signInModal');
    const closeButton = document.querySelector('.close-button');

    // Add click event listener to the sign in button
    signInButton.addEventListener('click', function() {
        console.log('Sign in button clicked'); // Debug log
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Add click event listener to the close button
    closeButton.addEventListener('click', function() {
        console.log('Close button clicked'); // Debug log
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Toggle password visibility
    const showPasswordButton = document.querySelector('.show-password');
    showPasswordButton.addEventListener('click', function() {
        const passwordInput = document.getElementById('signInPassword');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            this.textContent = 'HIDE';
        } else {
            passwordInput.type = 'password';
            this.textContent = 'SHOW';
        }
    });
});