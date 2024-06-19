/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for (var i = 0; i < bandcampLinks.length; i++) {
	bandcampLinks[i].addEventListener('click', function (e) {
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for (var i = 0; i < songElements.length; i++) {
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function () {
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if (!this.classList.contains('amplitude-active-song-container')) {
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function () {
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
	songElements[i].addEventListener('click', function () {
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
			"name": "put someone down",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/186-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "heavy-handed/call...on/<br>speak for itself",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/186-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "self-starter/on the lookout for/<br>better",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/186-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "overhead",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/185-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "hold the purse strings/review/<br>tighten up",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/185-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "runaround/go over someone's head/<br>a phone call away",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/185-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "give someone a pat on the back",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/184-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "make peace/do one's part",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/184-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "press/pat answer/<br>self-reliance/best friend",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/184-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "reservation",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/183-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "practice/forthcoming/source",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/183-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "misgiving/rush into/<br>put on hold/perfect",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/183-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "in office",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/182-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "outgoing/introduce/<br>compensation/shake up",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/182-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "in company/overload/touch",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/182-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "run something by someone",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/181-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "go it alone/run by/loop someone in",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/181-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "run by/on someone's part/mix-up",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/181-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "loving",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/180-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "powerhouse/professionalism/loving",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/180-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "draw/caring/good nature",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/180-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "push",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/179.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "hardball",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/178.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "feel at home",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/177.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "sweeping",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/176.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "safe and sound",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/175.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "underhanded",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/174.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "make or break",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/173.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "put something behind someone",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/172.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "play second fiddle",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/171.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "do a 180",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/170.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "take shape",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/169.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "have the final word",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/168.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "quantum leap",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/167.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "big heart",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/166.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "zero in on",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/165.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "drag sb.'s name through the mud",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/164.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "go a long way",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/163.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
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
		},
		{
			"name": "pick and choose",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/157.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "fill someone in",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/156.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "deal-breaker",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/155.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "up-and-coming",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/154.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "spell out",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/153.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "bricks-and-mortar store",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/152.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "unsung hero",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/151.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "Monday-morning quarterback",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/150.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "touch on",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/149.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "A-game",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/148.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},

	]
});
