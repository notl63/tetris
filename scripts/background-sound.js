window.StartPlayingBackgroundMusic = function () {
	document.getElementById('background-music-audio').play();
}

window.StopPlayingBackgroundMusic = function () {
	// It's also possible to reset the time.
	document.getElementById('background-music-audio').pause();
}