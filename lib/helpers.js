module.exports = {

  get_joke: () => {
    const jokes = ['Why did the edge server go bankrupt? Because it ran out of cache.', `Why did the JavaScript developer quit his job? Because he didn't get arrays.`, `Why do most Java programmers wear glasses? Because they don't see sharp.`, `Who do programmers love dark mode? Because light attracts bugs.`, `How many programmers does it take to screw in a light bulb? None. It's a hardware problem.`]
    const randomJoke = Math.floor(Math.random() * 5);
    // Return a random joke from jokes array
if(randomJoke == 1){
  return  `<p>Q 1</p>
  <button>Answer</button>
  <p>A1</p>`
}
else if(randomJoke == 2){
  return  `<p>Q 2</p>
  <button>Answer</button>
  <p>A1</p>`
}
else if(randomJoke == 3){
  return  `<p>Q 3</p>
  <button>Answer</button>
  <p>A1</p>`
}
else if(randomJoke == 4){
  return  `<p>Q 4</p>
  <button>Answer</button>
  <p>A1</p>`
}
else if(randomJoke == 5){
  return  `<p>Q 5</p>
  <button>Answer</button>
  <p>A1</p>`
}
else{
  return `you thought`
}

    // return `<p>${randomJoke}</p>`
  },
};
