const submitBtn = document.querySelector('.submitBtn')

submitBtn.addEventListener('click', async function (e) {
  e.preventDefault();

  const queries = document.getElementById('queries').value;

  console.log("click")
  console.log(queries);

  const postData = {
    content: queries
  };

  // Make a POST request using fetch
  console.log(postData)
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData)

  }
  )

  document.location.reload();



  //throw new Error('Network response was not ok.');
}
)


