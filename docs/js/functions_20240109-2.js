/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	continue_next: false,
	
	"songs": [
		
		{
			"name": "in the equation",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/162.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "have a good feeling about",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/161.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "wafer-thin",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/160.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "name-drop",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/159.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "back-pedal",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/158.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		}
	]
});