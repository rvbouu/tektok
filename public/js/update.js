const updateBtn = document.querySelector('.update-btn')

updateBtn.addEventListener('click', async function(e){
  e.preventDefault();

  const email = document.getElementById('email-update').value.trim();
  const pw = document.getElementById('password-update').value.trim();
  const readme = document.getElementById('readme-update').value.trim();
  const user = e.target.getAttribute('id')
  console.log("click")
  console.log(user);
  
  const msg = document.getElementById('update-msg')

  const res = await fetch(`/api/update/${user}`, {
    method: 'PUT',
    body: JSON.stringify({email, pw, readme}),
    headers: {'Content-Type': 'application/json'}
  });

  if(res.ok){
    msg.innerHTML = `<p>Updated Successfully!</p>`
  }else{
    msg.innerHTML = `<p>There was an error updating your account.</p>`
  };
});