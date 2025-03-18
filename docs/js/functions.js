let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for (var i = 0; i < bandcampLinks.length; i++) {
	bandcampLinks[i].addEventListener('click', function (e) {
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for (var i = 0; i < songElements.length; i++) {

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


	songElements[i].addEventListener('mouseout', function () {
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});


	songElements[i].addEventListener('click', function () {
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}


Amplitude.init({
	continue_next: false,

	"songs": [

		{
			"name": "cold shoulder",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/220-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "give someone the cold shoulder/<br>snow under",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/220-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "cold-eyed/<br>send a chill down someone's spines",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/220-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "snow under",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/220-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "chilling",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/220-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "chill",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/220-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "chill/know one's stuff",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/220-7.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "double-talk",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/219-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "upfront",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/219-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "straight talk/play dumb",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/219-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "upfront",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/219-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "up front",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/219-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "play the know-it-all",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/219-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "cookie-cutter",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/218-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "stick to/outdated",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/218-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "stuck in one's ways/flexible/<br>accommodating",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/218-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "can't cut it",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/218-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "stick to",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/218-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "stuck",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/218-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "flexible",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/218-7.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "accommodate",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/218-8.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "accommodating/pushover",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/218-9.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "highball",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/217-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "quote/way/market rate",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/217-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "lowball/ultimatum/stand by/<br>walkaway point",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/217-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "quote",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/217-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "way",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/217-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "stand by",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/217-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "walkaway point",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/217-7.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "scroll-stopper",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/216-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "scroll-stopper/delivery/dry",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/216-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "jargon-heavy/page-turner",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/216-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "scroll",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/216-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "delivery",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/216-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "math-heavy",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/216-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "jargon-light/reader-friendly",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/216-7.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "short and sweet",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/215-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "short and sweet/in-depth",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/215-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "drawn-out/rehash",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/215-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "depth",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/215-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "in depth",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/215-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "rehash",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/215-7.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "the party's over",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/214-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "the party's over/<br>beat the deadline",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/214-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "holiday hangover/banner year",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/214-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "get real",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/214-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "beat the deadline",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/214-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "hangover",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/214-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "banner year",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/214-7.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "play the blame game",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/213-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "shift responsibility/overrun/raise",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/213-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "pass the hot potato/grow a spine/own",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/213-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "overrun",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/213-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "raise",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/213-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "hot potato",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/213-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "own",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/213-7.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "horizon",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/212-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "trying/daylight",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/212-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "horizons/break through/<br>self-imposed",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/212-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "horizon",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/212-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "break through",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/212-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "impose",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/212-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "self-imposed",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/212-7.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "murky waters",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/211-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "knee-deep/mudslinging",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/211-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "get into hot water/dive in/<br>make a splash",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/211-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "knee-deep",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/211-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "mudslinger",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/211-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "make a splash",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/211-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "hit someone hard",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/210-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "truth bomb/process/collect oneself",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/210-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "bitter/hard to swallow/<br>fuel/drive",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/210-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "bombshell/departure",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/210-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "process/collect one's thoughts",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/210-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "driver",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/210-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "heavy hitter",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/209-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "corner the market/score big",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/209-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "take turns/heavy lifting/legwork",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/209-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "corner",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/209-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "take turns",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/209-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "legwork/not lift a finger",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/209-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "blow up",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/208-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "go live/buzz",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/208-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "call someone names/blow up",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/208-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "break",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/208-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "go live",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/208-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "buzz",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/208-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "name-calling",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/208-7.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "good sport",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/207-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "fall short/good loser/<br>come back",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/207-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "gracious winner/push/runaway",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/207-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "be after sth.",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/207-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "fall short",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/207-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "comeback",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/207-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "push",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/207-7.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "runaway",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/207-8.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "come out",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/206-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "go one's way",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/206-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "nail-biting",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/206-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "outcome/nail-biter",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/206-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "come out of one's shell/<br>won't bite",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/206-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "won't bite",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/206-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "whatnot",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/205-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "in good supply/count",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/205-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "haves and have-nots/deliver",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/205-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "in short supply",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/205-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "count",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/205-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "deliver on",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/205-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "deliver on",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/205-7.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "yes-person",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/204-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "take/straight shooter",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/204-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "naysayer/pick holes/shoot down",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/204-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "I take your point",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/204-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "pick holes",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/204-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "shoot down",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/204-6.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "fireworks",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/203-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "action plan/backfire",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/203-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "short-lived/ever-lasting",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/203-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "fence-sitter",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/203-4.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "ever-changing",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/203-5.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "fair-weather friend",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/202-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "fair-weather customer/<br>loyal-to-the-bone/<br>advocate",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/202-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "clam up/flow/<br>buddy-buddy/crew",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/202-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "educated guess",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/201-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "insight/big thing",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/201-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "learned/forward-thinking/figure",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/201-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "hard-and-fast",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/200-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "stick to/judicious",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/200-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "quick-and-dirty/fix/<br>work on/polished",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/200-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "have one's cake and eat it too",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/199-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "angle for/all-inclusive/<br>budget-friendly",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/199-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "healthy competition/<br>a slice of the cake/<br>make it big",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/199-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "free ride",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/198-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "value/free rider/dump on",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/198-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "hit/bumpy ride/workaround",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/198-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "money talks",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/197-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "throw money at sth./deep pockets",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/197-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "put one's money where one's mouth is/empty promise/big talk",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/197-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "ghost",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/196-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "on one's mind/reflect on/image",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/196-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "find fault/look right through sb./<br>conscience is clear",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/196-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "put up a good fight",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/195-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "uphill battle/hold one's head high",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/195-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "pick a fight/channel/ill feeling/<br>advance",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/195-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "titleholder",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/194-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "underdog/in a big way",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/194-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "entitled/mistreat/stand by",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/194-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "ping-pong",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/193-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "pick someone's brain/stick/<br>workable",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/193-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "catch/backhanded/<br>laugh something off",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/193-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "storm out",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/192-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "contain/heated",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/192-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "conflict/slip out/pop up",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/192-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "surefire",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/191-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "arm/golden opportunity/pioneer",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/191-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "misfire/pool/talent/winning",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/191-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "on someone’s head",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/190-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "work out/tight-knit/<br>have someone's back",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/190-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "break into/on someone's shoulders/<br>naysayer",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/190-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "feel the heat",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/189-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "drill into/meet/underdeliver/<br>isn't an option",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/189-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "argumentative/snap/<br>in the heat of the moment/cool off/<br>behind someone",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/189-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "passport to something",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/188-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "overlook/level up/<br>once-in-a-lifetime",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/188-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "upskill/ever-changing/lifelong",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/188-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "flip-flop",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/187-1.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "all set/go around in circles",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/187-2.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
		{
			"name": "flop/blank stares/<br>regroup/come back",
			"artist": "Johnnykoon",
			"album": "英文單字強",
			"url": "sub/audio/187-3.mp3",
			"cover_art_url": "sub/image/music-streaming.png"
		},
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
