console.log('Hello, Matt');


$('#navOpener').on('click', function(){

})


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

