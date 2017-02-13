console.log('Hello, Matt');

/* close navUI on click & scroll to page section */
$('a[href^="#"').on('click', function(event) {
document.getElementById('sidebarToggle').checked = false;
	var target = $(this.getAttribute('href'));
	if(target.length) {
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top
		}, 750);
	}
	
});

$(document).ready(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
var newHeight = $("html").height() + "px";
$(".header").css("height", newHeight);
$(".content").css("top", newHeight);
}
