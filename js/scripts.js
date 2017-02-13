console.log('Hello, Matt');

$('#sidebarToggle').on('click', function(){
	$('#content-cover').toggleClass('cover-active');
});

$('#content-cover').on('click', function(){
	$('#content-cover').toggleClass('cover-active');
	document.getElementById('sidebarToggle').checked = false;
});


/* close navUI on click & scroll to page section */
$('a[href^="#"').on('click', function(event) {
	var target = $(this.getAttribute('href'));
	if(target.length) {
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top
		}, 550);
	}

	document.getElementById('sidebarToggle').checked = false;
	$('#content-cover').toggleClass('cover-active');	
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
