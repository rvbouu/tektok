module.exports = {
  
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },

  get_joke: () => {
    const randomNum = Math.random();
    // Return a random emoji
    if (randomNum > 0.7) {
      return `<p>Why did the edge server go bankrupt? Because it ran out of cache.</p>`;
    } else if (randomNum > 0.4) {
      return `<p>Why did the JavaScript developer quit his job? Because he didn't get arrays.</p>`;
    } else {
      return `<p>Why do most Java programmers wear glasses? Because they don't see sharp.</p>`;
    }
  },
};
