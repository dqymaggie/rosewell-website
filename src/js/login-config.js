import '../css/login.css';
import '../css/footer.css';

import { 
  btnLogin
} from './login'

import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth';

// import { getFirestore} from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBobHXt_J2kNDxSHoLKKC8YP9Unuj7mCvA",
    authDomain: "rosewell-website.firebaseapp.com",
    projectId: "rosewell-website",
    storageBucket: "rosewell-website.firebasestorage.app",
    messagingSenderId: "37800874810",
    appId: "1:37800874810:web:0ffdb95d077b0f546eb603"
  });
   
const auth = getAuth(firebaseApp);

// Login using email/password
const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value
  const loginPassword = txtPassword.value

  // add error handling
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    window.location.href = 'dashboard.html';
  }
  catch(error) {
    const lblLoginErrorMessage = document.getElementById('lblLoginErrorMessage');
    lblLoginErrorMessage.style.display = 'block';
    
    // Map error codes to user-friendly messages
    const errorMessages = {
      'auth/invalid-email': 'Invalid email address. Please check and try again.',
      'auth/user-disabled': 'This account has been disabled. Please contact support.',
      'auth/user-not-found': 'No account found with this email. Please sign up.',
      'auth/wrong-password': 'Incorrect password. Please try again.',
    };

    // Display the user-friendly message or a default message
    lblLoginErrorMessage.innerHTML = errorMessages[error.code] || 'An unexpected error occurred. Please try again.';
  }
}

// Send Password Reset Email
const resetPassword = async () => {
  const email = txtEmail.value
  const forgotPasswordError = document.getElementById('forgot-password-error');
  try {
    await sendPasswordResetEmail(auth, email)
    forgotPasswordError.style.display = 'block';
    forgotPasswordError.style.color = 'green';
    forgotPasswordError.innerHTML = 'Password reset email sent!';
  }
  catch(error) {
    // console.log(error)
    forgotPasswordError.style.display = 'block';
    const errorMessages = {
      'auth/invalid-email': 'Invalid email address. Please check and try again.',
      'auth/missing-email': 'Please enter an email address.',
      'auth/user-disabled': 'This account has been disabled. Please contact support.',
      'auth/user-not-found': 'No account found with this email. Please sign up.',
    };

    // Display the user-friendly message or a default message
    forgotPasswordError.innerHTML = errorMessages[error.code] || 'Error. Please contact support.';
  }
}

btnLogin.addEventListener("click", loginEmailPassword) 

const forgotPasswordLink = document.getElementById('forgot-password');
forgotPasswordLink.addEventListener('click', resetPassword);