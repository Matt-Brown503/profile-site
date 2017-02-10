console.log('Hello, Matt');

/* navbar toggler */
var openNav = function() {
	var nav = document.getElementById('nav');
	if (nav.className === "navbar") {
		nav.className += " responsive";
	}else { 
		nav.className = "navbar";
	}
}

document.getElementById('navOpener').addEventListener('click', function(event){
	event.preventDefault();
});

$('a[href^="#"').on('click', function(event) {
	var target = $(this.getAttribute('href'));

	if(target.length) {
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top - $('#nav').height()
		}, 750);
	}
});