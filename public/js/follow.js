const followBtn = document.querySelectorAll('.follow')

//listening for a click to follow a new user
for (let i = 0; i < followBtn.length; i++) {
  followBtn[i].addEventListener('click', async function (e) {
    console.log("follow")
    const follow = e.target.getAttribute('id');
    console.log(follow)
    if (followBtn[i].textContent === 'Follow') {
      const res = await fetch('/api/relations', {
        method: 'POST',
        body: JSON.stringify({
          following: follow,
          // follower: req.session.user_id
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      //unfollowing a user
      if (res) {
        followBtn[i].textContent = 'Unfollow'
        followBtn[i].classList.add('bg-info')
        followBtn[i].classList.remove('bg-warning')
      }
    } else {
      const res = await fetch(`/api/relations/${follow}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      if (res) {
        followBtn[i].textContent = 'Follow'
        followBtn[i].classList.add('bg-warning')
        followBtn[i].classList.remove('bg-info')
      }
    }
  })
}
