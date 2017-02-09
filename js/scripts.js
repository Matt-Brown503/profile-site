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