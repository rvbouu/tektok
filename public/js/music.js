// Get the audio element by its id
const audio = document.getElementById('my_audio');

// Play the audio
function playAudio() {
    audio.play();
}

// Pause the audio
function pauseAudio() {
    audio.pause();
}



// Add event listeners to control the audio
audio.addEventListener('play', function() {
    console.log('Audio is playing');
});

audio.addEventListener('pause', function() {
    console.log('Audio is paused');
});

