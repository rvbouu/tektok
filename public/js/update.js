const updateBtn = document.querySelector('.update-btn')

//updating email, password and readme on profile page
updateBtn.addEventListener('click', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email-update').value.trim();
  const pw = document.getElementById('password-update').value.trim();
  const readme = document.getElementById('readme-update').value.trim();
  const user = e.target.getAttribute('id')
  console.log("click")
  console.log(user);

  const emailError = document.getElementById('email-error');
  const pwError = document.getElementById('pw-error');
  const msg = document.getElementById('update-msg')

  const res = await fetch(`/api/update/${user}`, {
    method: 'PUT',
    body: JSON.stringify({ email, pw, readme }),
    headers: { 'Content-Type': 'application/json' }
  });

  pwError.innerHTML = '';
  emailError.innerHTML = '';
  
  //setting password to being 8 or more characters
  if (pw.length < 8) {
    pwError.innerHTML = `<p class="text-danger">Password must be 8 or more characters.</p>`;
    return;
  } else {
    emailError.innerHTML = `<p class="text-danger">There is an error with your email.</p>`
  }
  if (res.ok) {
    emailError.innerHTML = '';
    msg.innerHTML = `<p class="text-info">Updated Successfully!</p>`;
    document.location.reload();
    return;
  };
  
});