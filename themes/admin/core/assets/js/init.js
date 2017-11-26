$(function(){

	$('.owl-carousel').owlCarousel({
	    loop: true,
	    margin: 2,
	    nav: false,
		lazyLoad: true,
		dots: true,
		navText:[
	      "<span class='prev-icon'>&#x2039;</span>",
	      "<span class='next-icon'>&#x203A;</span>"
	    ],
	    responsive:{
	        0:{
	            items: 1
	        },
	        600:{
	            items: 3
	        },
	        1000:{
	            items: 6
	        }
	    }
	})

});

$(document).ready(function(){

$('.menu li.active').addClass('open').children('ul').show();
	$('.menu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

});


var menuTrigger = document.getElementById('menu-trigger');

var leftMenu = document.getElementById('left-menu');

var sideMenu = document.getElementById('side-menu');

var dashboardArea = document.getElementById('dashboard-area');

menuTrigger.onclick = function () {
	// $('#side-menu').addClass('col-xs-1').removeClass('col-xs-2');
	// $('#dashboard-area').addClass('col-xs-11').removeClass('col-xs-10');
	$('#side-menu').toggleClass('col-xs-1 col-xs-2');
	$('#dashboard-area').toggleClass('col-xs-11 col-xs-10');
	// $('.col-xs-1').css('max-width', '3%');
	// $('.col-xs-11').css('max-width', '97%');
   // sideMenu.classList.toggle("col-xs-2");
   // sideMenu.classList.toggle("hide");
   // dashboardArea.classList.toggle("col-xs-12");
   // dashboardArea.classList.toggle("col-xs-10");
   menuTrigger.classList.toggle("active");
   if($(menuTrigger).hasClass('active') && $(sideMenu).hasClass('col-xs-2')){
	   $('#side-menu>#menu-trigger').css({'background':'#242424','border': '1px solid #242424'});
	   $('#left-menu .menu>ul>li>a').css({'visibility':'visible'});
	   $('.col-xs-2').css('max-width' , '16.66667%');
	   $('.col-xs-10').css('max-width' , '83.33333%');


   }else{
	   $('#side-menu>#menu-trigger').css({'background': '#646464', 'border': '1px solid #646464'});
	   $('#left-menu .menu>ul>li>a').css({'visibility':'hidden'});

	   $('.col-xs-1').css('max-width', '3%');
	   $('.col-xs-11').css('max-width', '97%');
   }

};




var firstLi = leftMenu.getElementsByTagName("li");

firstLi.onclick = function () {
	this.children.style.display = "block";
};
