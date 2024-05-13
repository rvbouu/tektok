const followBtn = document.querySelectorAll('.follow')

for(let i = 0; i < followBtn.length; i++){
  followBtn[i].addEventListener('click', async function(e) {
    console.log("follow")
    const followUser = e.target.getAttribute('id');
    console.log(followUser)

    const res = await fetch('/api/following', {
      method: 'POST',
      body: JSON.stringify({followed_users: followUser}),
      headers: { 'Content-Type': 'application/json' }
    })

    if(res.ok){
      document.location.replace('/')
    }
  })
}