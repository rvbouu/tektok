const submitBtn = document.querySelector('.submitBtn')

submitBtn.addEventListener('click', async function (e) {
  e.preventDefault();
  try {
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

    });

    if (response.ok) {
      const newPost = await response.json();
      console.log('New post created:', newPost);

    } else {
      throw new Error('Network response was not ok.');
    }

   document.location.reload();

  } catch (err) {
    console.error(err);
  }
});

//document.location.reload();
// }
// catch (err){
//   throw new Error('Network response was not ok.');
// }
// }
// )


