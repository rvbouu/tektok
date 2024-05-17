const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.getElementById('username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const errorMessageElement = document.querySelector('.errorMsgEl');

  if (!username || !password) {
    errorMessageElement.textContent = 'Please enter both username and password.';
    return; // Stop further execution if fields are empty
  }

  // Send a POST request to the API endpoint
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // If successful, redirect the browser to the homepage page
    document.location.replace('/');
  } else {
    errorMessageElement.textContent = 'An error occurred. Please try again.';
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstname = document.querySelector('#fname-signup').value.trim();
  const lastname = document.querySelector('#lname-signup').value.trim();
  const username = document.getElementById('username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (!firstname || !lastname || !username || !email || !password) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Please fill out all required fields.';
    document.body.appendChild(errorMessage);
    return;
}

try {
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ firstname, lastname, username, email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${response.statusText}`;
        document.body.appendChild(errorMessage);
    }
} catch (error) {
    console.error('Error:', error);
}
};
document.getElementById('signup-form').addEventListener('submit', signupFormHandler);

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
