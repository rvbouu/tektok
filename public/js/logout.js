//user side logging out of their profile
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = `Error: ${response.statusText}`;
    document.body.appendChild(errorMessage);
  }
};

document.querySelector('#logout').addEventListener('click', logout);
