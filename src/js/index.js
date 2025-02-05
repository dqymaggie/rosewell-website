import '../css/index.css';
import '../css/header.css';
import '../css/footer.css';

import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  onAuthStateChanged, 
  updateProfile,
  updateEmail,
  updatePassword,
  signOut,
  connectAuthEmulator
} from 'firebase/auth';

import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBobHXt_J2kNDxSHoLKKC8YP9Unuj7mCvA",
    authDomain: "rosewell-website.firebaseapp.com",
    projectId: "rosewell-website",
    storageBucket: "rosewell-website.firebasestorage.app",
    messagingSenderId: "37800874810",
    appId: "1:37800874810:web:0ffdb95d077b0f546eb603"
  });
   
const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

const monitorUserIcon = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        window.location.href = '/dashboard.html'
      }
      else {
        window.location.href = '/login.html'
      }
    })
}

const iconUser = document.querySelector('#user-icon')
iconUser.addEventListener("click", monitorUserIcon)


// Attach the function to the window object to make it globally accessible
window.switchToSignIn = function() {
    document.getElementById('createAccountModal').classList.remove('active');
    document.getElementById('signInModal').classList.add('active');
};

// Function to close all modals
export function closeModal() {
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

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector('.book-now').addEventListener('click', function(event) {
            event.preventDefault();
            console.log('book now clicked');
            window.location.href = 'pages/login.html';
        });
    });    
};
console.log("index.js is loaded!");
