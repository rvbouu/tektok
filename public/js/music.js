// // yourscript.js
// document.addEventListener('DOMContentLoaded', function() {
//    // Get the audio element
//    const audio = document.getElementById('myAudio');
 
//    // Function to play the audio
//    function playAudio() {
//      audio.play();
//    }
 
//    // Function to pause the audio
//    function pauseAudio() {
//      audio.pause();
//    }
//  });

// yourscript.js
document.addEventListener('DOMContentLoaded', function() {
   // Get the audio element
   const audio = document.getElementById('myAudio');
   
   // Get the play and pause buttons
   const playButton = document.getElementById('playButton');
   const pauseButton = document.getElementById('pauseButton');
 
   // Add event listeners to the buttons
   playButton.addEventListener('click', playAudio);
   pauseButton.addEventListener('click', pauseAudio);
 
   // Function to play the audio
   function playAudio() {
     audio.play();
   }
 
   // Function to pause the audio
   function pauseAudio() {
     audio.pause();
   }
 });

