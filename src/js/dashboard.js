import '../css/dashboard.css';

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

const db = getFirestore(firebaseApp);

// Monitor auth state
const lblAuthState = document.querySelector('#lblAuthState')
const showLoginState = (user) => {
    lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `
  }

const userWelcome = document.querySelector('#user-welcome')
const userName = document.querySelector('#user-name')
const userEmail = document.querySelector('#user-email')
const userPassword = document.querySelector('#user-password')

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user)
        showLoginState(user)

        userWelcome.innerHTML = `Welcome, ${user.displayName}!`;
        userName.innerHTML = `${user.displayName}`;
        userEmail.innerHTML = `${user.email} `;
        // userPassword.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `;
  
        // hideLoginError()
        // hideLinkError()
      }
      else {
        console.log('no user')
      //   showLoginForm()
        lblAuthState.innerHTML = `You're not logged in.`
      }
    })
}

// Log out
const logout = async () => {
    await signOut(auth);
    console.log('logged out')
    window.location.href = '../index.html';
  }

const btnLogout = document.querySelector('#btnLogout')
btnLogout.addEventListener("click", logout)

console.log('dashboard.js loaded')

monitorAuthState();  

document.addEventListener('DOMContentLoaded', () => {
    const editLinks = document.querySelectorAll('.edit-link');
    const saveLinks = document.querySelectorAll('.save-link');
    const cancelLinks = document.querySelectorAll('.cancel-link');
  
    editLinks.forEach((editLink, index) => {
      editLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleEditMode(index, true);
      });
    });
  
    saveLinks.forEach((saveLink, index) => {
      saveLink.addEventListener('click', (e) => {
        e.preventDefault();
        saveChanges(index);
        toggleEditMode(index, false);
      });
    });
  
    cancelLinks.forEach((cancelLink, index) => {
      cancelLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleEditMode(index, false);
      });
    });
  
    function toggleEditMode(index, isEditing) {
      const infoGroup = document.querySelectorAll('.info-group')[index];
      const displayElements = infoGroup.querySelectorAll('span');
      const inputElements = infoGroup.querySelectorAll('input');
      const editLink = infoGroup.querySelector('.edit-link');
      const saveLink = infoGroup.querySelector('.save-link');
      const cancelLink = infoGroup.querySelector('.cancel-link');
  
      displayElements.forEach(el => el.style.display = isEditing ? 'none' : 'inline');
      inputElements.forEach(el => el.style.display = isEditing ? 'inline' : 'none');
      editLink.style.display = isEditing ? 'none' : 'inline';
      saveLink.style.display = isEditing ? 'inline' : 'none';
      cancelLink.style.display = isEditing ? 'inline' : 'none';
    }
  
    function saveChanges(index) {
      const infoGroup = document.querySelectorAll('.info-group')[index];
      const displayElements = infoGroup.querySelectorAll('span');
      const inputElements = infoGroup.querySelectorAll('input');
  
      displayElements.forEach((el, i) => {
        if (index === 2) {
            el.textContent = "********"; // Display dots instead of actual password
        } else {
            el.textContent = inputElements[i].value;
        }
      });

      console.log(index)
      if (index === 0) {
        updateProfile(auth.currentUser, {
          displayName: inputElements[0].value
        });
      }
      if (index === 1) {
        console.log(inputElements[0].value)
        updateEmail(auth.currentUser, inputElements[0].value)
      }
      if (index === 2) {
        updatePassword(auth.currentUser, inputElements[0].value)
      }
    }
  });