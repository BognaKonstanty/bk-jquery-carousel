
var carouselList = $("#carousel ul");

	//$(function(){	
	//setInterval(changeSlide, 3000);
//});

var myVar = setInterval(function(){ changeSlide()}, 3000);

 function changeSlide() {
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
};
	
	var slide1 = document.getElementById('slide0');
	var slide2 = document.getElementById('slide1');
	var slide3 = document.getElementById('slide2');
	var slide4 = document.getElementById('slide3');
	var slide5 = document.getElementById('slide4');

function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var secondItem = carouselList.find("ul li:nth-child(2)");
	var thirdItem = carouselList.find("ul li:nth-child(3)");
	var fourthItem = carouselList.find("ul li:nth-child(4)");
	var lastItem = carouselList.find("li:last");
	
	lastItem.after(firstItem)
	carouselList.css({marginLeft:0});

	if (firstItem) {
		firstItem.after(secondItem)
		firstItem.addClass('active');
		//slide0.addClass('active');
		console.log('firstItem ma klase active')
	};
	if (secondItem) {
		secondItem.after(firstItem)
		secondItem.addClass('active');
		//slide1.addClass('active');	
		console.log('secondItem ma klase active')
	};
}

var left = document.getElementById('left');
var right = document.getElementById('right');


	
	left.addEventListener('click', function() { 
		stopInterval()
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		console.log('kliknięty lewy przycisk')
		});
		

	right.addEventListener('click', function() {
		stopInterval()
		carouselList.animate({'marginLeft':400}, 500, moveFirstSlide);
		console.log('kliknięty prawy przycisk')
	});


function stopInterval() {
  clearInterval(myVar);
}