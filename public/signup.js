const signUp = document.querySelector('#signUpBtn')
const logIn = document.querySelector('#loginBtn')


const signupFormHandler = async (event) => {
    event.preventDefault();
  console.log("sign up click")
    const user_name = document.querySelector('#userNameInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
  
    if (user_name && password) {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up. Must have 8 character password');
      }
    }
  };

  const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("sign up click")
    const user_name = document.querySelector('#userNameInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
  
    if (user_name && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log("pass validation")
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in. Must have 8 character password');
      }
    }
  };

signUp.addEventListener("click", signupFormHandler)
logIn.addEventListener('click', loginFormHandler);
