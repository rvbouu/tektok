module.exports = {

  get_joke: () => {
    const jokes = ['Why did the edge server go bankrupt? Because it ran out of cache.', `Why did the JavaScript developer quit his job? Because he didn't get arrays.`, `Why do most Java programmers wear glasses? Because they don't see sharp.`, `Who do programmers love dark mode? Because light attracts bugs.`, `How many programmers does it take to screw in a light bulb? None. It's a hardware problem.`]
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    // Return a random joke from jokes array
    return `<p>${randomJoke}</p>`
  },
};
