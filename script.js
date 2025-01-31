// Function to open the create account modal
function openCreateAccountModal() {
    document.getElementById('signInModal').classList.remove('active');
    document.getElementById('createAccountModal').classList.add('active');
}

// Function to close the create account modal
function closeCreateAccountModal() {
    document.getElementById('createAccountModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Attach the function to the window object to make it globally accessible
window.switchToSignIn = function() {
    document.getElementById('createAccountModal').classList.remove('active');
    document.getElementById('signInModal').classList.add('active');
};

// Function to close all modals
function closeModal() {
    document.getElementById('signInModal').classList.remove('active');
    document.getElementById('createAccountModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize event listeners
function initializeEventListeners() {
    const signInButton = document.querySelector('.sign-in');
    const modal = document.getElementById('signInModal');
    const closeButton = document.querySelector('.close-button');
    const showPasswordButton = document.querySelector('.show-password');

    signInButton?.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeButton?.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    showPasswordButton?.addEventListener('click', function() {
        const passwordInput = document.getElementById('signInPassword');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            this.textContent = 'HIDE';
        } else {
            passwordInput.type = 'password';
            this.textContent = 'SHOW';
        }
    });

    document.querySelector(".sign-in-form")?.addEventListener("submit", async function(event) {
        event.preventDefault();
        const email = document.getElementById("signInEmail").value;
        const password = document.getElementById("signInPassword").value;

        try {
            await login(email, password);
            alert("Log in successfully!");
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        } catch (error) {
            console.error("Log in failed", error);
            alert(error.message);
        }
    });

    // Add event listeners for create account modal
    const createAccountCloseButton = document.querySelector('#createAccountModal .close-button');
    const signInLink = document.querySelector('#createAccountModal .sign-in-link');

    createAccountCloseButton?.addEventListener('click', () => {
        closeCreateAccountModal();
        document.body.style.overflow = 'auto';
    });

    signInLink?.addEventListener('click', (e) => {
        e.preventDefault();
        switchToSignIn();
    });
}

// Add this document.ready wrapper
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    
    // Update the existing "Create an account?" link click handler
    document.querySelector('.create-account a').addEventListener('click', function(e) {
        e.preventDefault();
        openCreateAccountModal();
    });
});

