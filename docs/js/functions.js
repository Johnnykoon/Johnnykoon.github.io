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
