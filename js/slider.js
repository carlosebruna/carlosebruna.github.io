var bgImageArray = ["background-one", "background-two", "background-three"],
base = "hero is-primary is-fullheight ",
secs = 6;


function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 

			document.getElementById('background').className = base + bgImageArray[k];

		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();