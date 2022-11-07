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

signUp.addEventListener(signUpValid())

module.export = signUpValid;