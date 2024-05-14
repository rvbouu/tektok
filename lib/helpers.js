module.exports = {
  
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  get_joke: () => {
    const randomNum = Math.random();
    // Return a random emoji
    if (randomNum > 0.9) {
      return `<p>Why did the edge server go bankrupt? Because it ran out of cache.</p>`;
    } else if (randomNum > 0.7) {
      return `<p>Why did the JavaScript developer quit his job? Because he didn't get arrays.</p>`;
    } else if (randomNum > 0.5) {
      return `<p>Why do most Java programmers wear glasses? Because they don't see sharp.</p>`;
    } else if (randomNum > 0.3) {
      return `<p>Who do programmers love dark mode? Because light attracts bugs.</p>`;
    }else{
      return `<p>How many programmers does it take to screw in a light bulb?
      None. It's a hardware problem.</p>`
    }
  },
};
