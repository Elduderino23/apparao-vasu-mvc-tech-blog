const signUp = document.querySelector('#signUpBtn')
const logIn = document.querySelector('#loginBtn')


const signupFormHandler = async (event) => {
    event.preventDefault();
  console.log("sign up click")
    const username = document.querySelector('#usernameInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user/signup', {
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

  const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("sign up click")
    const username = document.querySelector('#usernameInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };

signUp.addEventListener("click", signupFormHandler)
logIn.addEventListener('click', loginFormHandler);
