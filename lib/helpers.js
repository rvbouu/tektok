const linkify = require("linkifyjs");
const linkifyHtml = require("linkify-html");
module.exports = {

  get_joke: () => {
    const randomJoke = Math.floor(Math.random() * 5);
    // Return a random joke from jokes array
    if(randomJoke === 1) {
      return `<p id="0" class="question"> Why did the edge server go bankrupt?</p>
      <button id="revealbtn"> Reveal Answer </button>`
      }
      else if(randomJoke === 2 ) {
        return `<p id="1" class="question"> Why did the JavaScript developer quit his job?</p>
        <button id="revealbtn"> Reveal Answer </button>`
      } 
      else if(randomJoke === 3 ) {
        return `<p id="2" class="question"> Who do programmers love dark mode?</p>
        <button id="revealbtn"> Reveal Answer </button>`
      } 
      else if(randomJoke === 4 ) {
        return `<p id="3" class="question"> How many programmers does it take to screw in a light bulb?</p>
        <button id="revealbtn"> Reveal Answer </button>`
      } 
      else {
        return `<p id="4" class="question"> Why do most Java programmers wear glasses?</p>
        <button id="revealbtn"> Reveal Answer </button> `
    
    }
  },
    // Linkify the content before posting (looks for https in post and linkify makes it a clickable link)
    linkify:(content) => {const linkifiedQueries = linkifyHtml(content, { defaultProtocol: "https" });
    return linkifyHtml( content,
    linkifiedQueries)}
    
    
}

