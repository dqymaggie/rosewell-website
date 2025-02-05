import '../css/login.css';
import '../css/footer.css';

import {
  registerEmail,
  registerPassword,
  registerFirstName,
  registerLastName,
  btnRegister,
  // showLoginState
} from './register'

import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  onAuthStateChanged, 
  createUserWithEmailAndPassword,
  updateProfile,
  // sendEmailVerification,
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
// const db = getFirestore(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

// Create new account using email/password
const createAccount = async () => {
  const email = registerEmail.value;
  const password = registerPassword.value;
  const firstName = registerFirstName.value;
  const lastName = registerLastName.value;
  const lblLoginErrorMessage = document.getElementById('lblLoginErrorMessage');
  
  if (firstName === '' || lastName === '') {
    lblLoginErrorMessage.style.display = 'block';
    lblLoginErrorMessage.innerHTML = 'Please fill in first and last name.';
    // console.log('Please fill in all fields.');
    return;
  }

  const namePattern = /^[A-Za-z]+$/;
  if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
    lblLoginErrorMessage.style.display = 'block';
    lblLoginErrorMessage.innerHTML = 'Names must contain only English letters.';
    return;
  }

  // Check for valid password
  const passwordError = document.getElementById('password-error');
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.style.display = 'block';
    return;
  } else {
    passwordError.style.display = 'none';
      // Proceed with form submission or further processing
      console.log('Password is valid!');
      // alert('Password is valid!');
  }

  // create user account
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: `${firstName} ${lastName}`
    });

    // await setDoc(doc(db, "users", user.uid), {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   createdAt: new Date()
    // });

    // await sendEmailVerification(user, {
    //   url: 'https://rosewell-website.web.app/dashboard.html'
    // });

    console.log('Account created and user data stored successfully');

    // Redirect to dashboard after successful login
    window.location.href = 'dashboard.html';
  }
  catch(error) {
    console.log(`There was an error: ${error}`);
    console.log(error);
    const lblLoginErrorMessage = document.getElementById('lblLoginErrorMessage');
    lblLoginErrorMessage.style.display = 'block';
    
    // Map error codes to user-friendly messages
    const errorMessages = {
      'auth/missing-email': 'Please enter an email address.',
      'auth/missing-password': 'Please enter a password.',
      'auth/invalid-email': 'Invalid email address. Please check and try again.',
      'auth/user-disabled': 'This account has been disabled. Please contact support.',
      'auth/user-not-found': 'No account found with this email. Please sign up.',
      'auth/wrong-password': 'Incorrect password. Please try again.',
      // Add more error codes and messages as needed
    };

    // Display the user-friendly message or a default message
    lblLoginErrorMessage.innerHTML = errorMessages[error.code] || 'An unexpected error occurred. Please try again.';
  } 
}

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user)
      showLoginState(user)

      hideRegisterError()
    }
    else {
      // lblAuthState.innerHTML = `You're not logged in.`
    }
  })
}

btnRegister.addEventListener("click", createAccount)

monitorAuthState();