$(document).ready(function() {
	var carousel = $("#carousel").featureCarousel({
	});
	$("#but_prev").click(function () {
		carousel.prev();
	});
	$("#but_pause").click(function () {
		carousel.pause();
	});
	$("#but_start").click(function () {
		carousel.start();
	});
	$("#but_next").click(function () {
		carousel.next();
	});
});

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $(".vidalei").animate({left: '250px'});
});