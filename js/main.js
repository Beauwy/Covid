var x;
function control(dt){
	x = dt;

	$("body").load("country.html");
}

(function ($) {
 "use strict";

	/*----------------------------
	 jQuery MeanMenu
	------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	/*----------------------------
	 jQuery myTab
	------------------------------ */
	$('#myTab a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		});
		$('#myTab3 a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		});
		$('#myTab4 a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		});

	  $('#single-product-tab a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		});
	
	$('[data-toggle="tooltip"]').tooltip(); 
	
	$('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                     
                 });
		// Collapse ibox function
			$('#sidebar ul li').on('click', function () {
				var button = $(this).find('i.fa.indicator-mn');
				button.toggleClass('fa-plus').toggleClass('fa-minus');
				
			});
	/*-----------------------------
			Menu Stick
		---------------------------------*/
		$(".sicker-menu").sticky({topSpacing:0});
			
		$('#sidebarCollapse').on('click', function () {
			$("body").toggleClass("mini-navbar");
			SmoothlyMenu();
		});
		$(document).on('click', '.header-right-menu .dropdown-menu', function (e) {
			  e.stopPropagation();
			});
 
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 owl active
------------------------------ */  
  $("#owl-demo").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });

/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
//---------------------------++++++++++++++++++++++++
$.getJSON('https://covid19.th-stat.com/api/open/today', function (data) {

var co = data;
console.log(co);
$("#num1").append("<strong>" + co.Confirmed + "</strong>");
$("#num2").append("<strong>" + co.Hospitalized + "</strong>");
$("#num3").append("<strong>" + co.Recovered + "</strong>");
$("#num4").append("<strong>" + co.Deaths + "</strong>");



});

var w_data;

    $.getJSON('https://corona.lmao.ninja/v2/countries?sort=country', function (data) {

		w_data = data;
		
		console.log(w_data);

        for (var i = 0; i < w_data.length; i++) {

            $("#country_world").append(`<tr  onclick="control(${i})"><th>${i + 1}</th><td>${w_data[i].country}</td></tr>`);

        };



	});
	
	var w_data2;

    $.getJSON('https://corona.lmao.ninja/v2/countries?sort=country', function (data) {

		w_data2 = data;
		
		console.log(w_data2);

		$("#di1").append("<strong>" + w_data2[x].cases + "</strong>");
        $("#di2").append("<strong>" + w_data2[x].recovered + "</strong>");
        $("#di3").append("<strong>" + w_data2[x].active + "</strong>");
        $("#di4").append("<strong>" + w_data2[x].deaths + "</strong>");


        /*for (var i = 0; i < w_data.length; i++) {

            $("#country_world").append(`<tr  onclick="control(${i})"><th>${i + 1}</th><td>${w_data[i].country}</td></tr>`);

        };*/



    });

})(jQuery); 