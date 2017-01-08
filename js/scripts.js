
var carouselList = $("#carousel ul");

$(function(){	
	setInterval(changeSlide, 3000);
});

 function changeSlide() {
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
};

function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem)
	carouselList.css({marginLeft:0});
};

var left = document.getElementById('.left');
var right = document.getElementById('.right');


	
	left.addEventListener('click', function() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	});

	right.addEventListener('click', function() {
		carouselList.animate({'marginLeft':400}, 500, moveFirstSlide);
	});
