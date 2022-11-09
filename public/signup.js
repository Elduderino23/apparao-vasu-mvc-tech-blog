const router = require('express').Router();

const signUp = document.querySelector('#sign-up-btn')

const signUpValid = async (event) => {
    event.preventDefault();

    const emailOrUser = document.querySelector('#user-name-input').value.trim();
    const passwordMaker = document.querySelector('#password-input').value.trim()

    if (emailOrUser && passwordMaker) {
        const response = await router.get('/')
    }
}

const signupFormHandler = async (event) => {
    event.preventDefault();
  console.log("sign up click")
    const username = document.querySelector('#user-name-input').value.trim();
    // const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-input').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

signUp.addEventListener(signupFormHandler)

// document
// .querySelector('.signup-form')
// .addEventListener('submit', signupFormHandler);

module.export = signupFormHandler;