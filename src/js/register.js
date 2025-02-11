export const registerEmail = document.querySelector('#txtEmail')
export const registerPassword = document.querySelector('#txtPassword')
export const registerFirstName = document.querySelector('#txtFirstName')
export const registerLastName = document.querySelector('#txtLastName')
export const btnRegister = document.querySelector('#btnRegister')


// password toggle
export function initializeTogglePassword() {
  const showPasswordButton = document.querySelector('#show-password');
  const hidePasswordButton = document.querySelector('#hide-password');
  const passwordField = document.querySelector('#txtPassword');

  showPasswordButton.addEventListener('click', function() {
    passwordField.type = 'text';
    showPasswordButton.style.display = 'none';
    hidePasswordButton.style.display = 'inline-flex';
  });

  hidePasswordButton.addEventListener('click', function() {
    passwordField.type = 'password';
    hidePasswordButton.style.display = 'none';
    showPasswordButton.style.display = 'inline-flex';
  });
}

initializeTogglePassword();