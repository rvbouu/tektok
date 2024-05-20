const submitBtn = document.querySelector('.submitBtn')
const errorMessage = document.getElementById('errorMessage');

submitBtn.addEventListener('click', async function (e) { // add a new post/query to queries sections
  e.preventDefault();
  try {
    let queries = document.getElementById('queries').value;

    if (queries.trim() === '') {
      errorMessage.textContent = 'Please enter some content before submitting.'; // must have content entered before submitting.  Prompts users to submit content.  will prevent an empty comment
      errorMessage.style.display = 'block';
      return; // Stop further execution
    }

    errorMessage.style.display = 'none'; // Hide the error message if content is not empty


    console.log("click")
    console.log(queries);

    const postData = {
      content: queries
    };

    // Make a POST request using fetch.  if content is present allows post 
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

   document.location.reload();  //reloads the page after submit button was clicked

  } catch (err) {
    console.error(err);
  }
});


