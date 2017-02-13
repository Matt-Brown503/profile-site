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

