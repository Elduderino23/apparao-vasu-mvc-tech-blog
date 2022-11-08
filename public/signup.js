const router = require('express').Router();

const signUp = document.querySelector('#signUpBtn')

const signUpValid = async (event) => {
    event.preventDefault();

    const emailOrUser = document.querySelector('user_or_email-signup').value.trim();
    const passwordMaker = document.querySelector('#password-signup').value.trim()

    if (emailOrUser && passwordMaker) {
        const response = await router.get('/')
    }
}

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

signUp.addEventListener(signUpValid)

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);

module.export = signUpValid;