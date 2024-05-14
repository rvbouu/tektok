const followBtn = document.querySelectorAll('.follow')

for(let i = 0; i < followBtn.length; i++){
  followBtn[i].addEventListener('click', async function(e) {
    console.log("follow")
    const follow = e.target.getAttribute('id');
    console.log(follow)

    const res = await fetch('/api/relations', {
      method: 'POST',
      body: JSON.stringify({
        following: follow,
        // follower: req.session.user_id
      }),
      headers: { 'Content-Type': 'application/json' }
    })
  })
}