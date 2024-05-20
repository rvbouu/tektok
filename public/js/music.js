// Get the audio element by its id
const audio = document.getElementById('my_audio');
audio.volume = 0.25;

// Play the audio
function playAudio() {
    audio.play();
    audio.volume = 0.25;
}

// Pause the audio
function pauseAudio() {
    audio.pause();
    audio.volume = 0.25;
}



// Add event listeners to control the audio
audio.addEventListener('play', function() {
    console.log('Audio is playing');
});

audio.addEventListener('pause', function() {
    console.log('Audio is paused');
});

