$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
}); 

$(document).ready(function(){
var $html = $('html'),
      $container = $('#container'),
      $prompt = $('#prompt'),
      $toggle = $('#toggle'),
      $about = $('#about'),
      $scene = $('#scene');
var v=true; // value changed rollback
var vv=true;
var vvv=true;
var arr=true;
var $slider = $('.slider2')
	.on('init', function(slick){
		console.log('shieeeeet!');
		$('.slider2').fadeIn(3000);

	});
$('#slider').hide();
$scene.parallax();
// var newElems = $("<!--<div id='VF' class='EXWrapper'>-->\
// 						<div class='ValidationBackground grid'>\
// 						<h3>Форма обратной связи</h3>\
// 								<form id='myForm'  action='' class='main_form' method='get' novalidate >\
// 									<div class='form-group has-feedback nameBlock'>\
// 										<label class='control-label' for='fio'>	\
// 											<input id='fio' type='text' name='fio' placeholder='Фамилия Имя Отчество' class='form-control' aria-describedby='inputSuccess2Status'/>\
// 										</label>\
// 									</div>\
// 									<div class='form-group has-feedback emailBlock'>\
// 										<label class='control-label' for='email'>\
// 											<input id='email' type='email' name='email' placeholder='E-mail' class='form-control' aria-describedby='inputSuccess2Status'/>\
// 										</label>\
// 									</div>\
// 									<div class='form-group has-feedback phoneBlock'>\
// 										<label class='control-label' for='phone'>\
// 											<input id='phone' type='text' name='phone' placeholder='Телефон +7(999)999-99-99' class='form-control' aria-describedby='inputSuccess2Status'/>\
// 										</label>\
// 									</div>\
// 									<div class='form-group has-feedback phoneBlock'>\
// 										<label class='control-label' for='phone'>\
// 											<input id='phone' type='text' name='phone' placeholder='Вид работы (Изготовление эскиза, изделие по Вашему эскизу и т.д.)' class='form-control' aria-describedby='inputSuccess2Status'/>\
// 										</label>\
// 									</div>\
// 									<div class='form-group has-feedback phoneBlock'>\
// 										<label class='control-label' for='phone'>\
// 											<input id='phone' type='text' name='phone' placeholder='Комментарии' class='form-control' aria-describedby='inputSuccess2Status'/>\
// 										</label>\
// 									</div>\
// 									<button id='submitButton' class='btn btn-success btn-lg' name='submit' type='submit' disabled>Отправить</button>\
// 									<div id='resultContainer' class='result'>\
// 									</div>\
// 								</form>\
// 						</div>\
// 					<!--</div>-->");


var optBTN=document.getElementById('options-btn');
var optBTN2=document.getElementById('btn2');
var optBTNAllItems=document.getElementById('AllItems');
var LeftArrowBTN=document.getElementById('leftAr');
var RightArrowBTN=document.getElementById('rightAr');

$('.list--item--nonactive').removeClass('list--item');
optBTNAllItems.onclick = function ItemsShow(){
	if (vvv==true){
		console.log('AllItems');
		$('.list--item--nonactive').addClass('list--item');
		$('.list--item').removeClass('list--item--nonactive');
		// $('.list--item').animate({ opacity : 1 }, 1500);
			// setTimeout(function(){
			// 	top()
			// }, 500);
		vvv=false;


	} else{
		$('.list--item').addClass('list--item--nonactive');
		$('.list--item--nonactive').removeClass('list--item');
		// $('.list--item--nonactive').animate({ opacity : 0 }, 1500);
		console.log('AllItems else');
		vvv=true;
	}
	
}

// $('.list--item--nonactive').removeClass('list--item');
optBTN.onclick = function OrderShow(){
	if (v==true){
		console.log('order');
		$('#options-btn').animate({ opacity : 0 }, 400);
		// $('#AB').append(newElems);
		setTimeout(function(){
			$('#options-btn').css('display', 'none');
			$('#bannerH2').css('display', 'none');
			$('#Recive').css('display', 'block');
			$('#Recive').animate({ opacity : 1 }, 400);
		}, 500);
	} else{
		console.log('else');
	}
	v=false;
}

//_____________Do as it was_________________
	$(this).on('mousewheel DOMMouseScroll', function(e){

		if (v==false) {
			setTimeout(function(){
				$('#options-btn').animate({ opacity : 1 }, 400);
				$('#options-btn').css('display', 'inherit');
					//$('#options-btn').css('display', 'none');
				}, 500);
			$('#Recive').css('display', 'none');
			$('#Recive').animate({ opacity : 0 }, 400);
		}
		v=true;
	});

	$('.side-nav li, .outer-nav li').click(function(){

		if (v==false) {
			setTimeout(function(){
				$('#options-btn').animate({ opacity : 1 }, 400);
				$('#options-btn').css('display', 'inherit');
					//$('#options-btn').css('display', 'none');
				}, 500);
				$('#Recive').css('display', 'none');
				$('#Recive').animate({ opacity : 0 }, 400);
		}
		v=true;
	});

	 $('.cta').click(function(){
		if (v==false) {
			setTimeout(function(){
				$('#options-btn').animate({ opacity : 1 }, 400);
				$('#options-btn').css('display', 'inherit');
					//$('#options-btn').css('display', 'none');
				}, 500);
				$('#Recive').css('display', 'none');
				$('#Recive').animate({ opacity : 0 }, 400);
		}
		v=true;
	 });


optBTN2.onclick = function OrderShow2(){
	if (vv==true){
		console.log('order2');
		$('#slider').show();
		$('.work').animate({ opacity : 0 }, 400);
		
		// $('#AB').append(newElems);
		$('.slider2').css('opacity', '0');
			setTimeout(function(){
				$('.slider2').animate({ opacity : 1 }, 1000);
		}, 1000);
		setTimeout(function(){
			$('.work').css('display', 'none');
			
			$('#Recive2').css('display', 'block');
			$('#Recive2').animate({ opacity : 1 }, 1000);
		}, 500);
	} else{
		console.log('else');
	}
	vv=false;

}
//_____________Do as it was2_________________
	$(this).on('mousewheel DOMMouseScroll', function(e){

		if (vv==false) {
			setTimeout(function(){
				$('.work').animate({ opacity : 1 }, 400);
				$('.work').css('display', 'flex');
					//$('#options-btn').css('display', 'none');
				}, 500);
			$('#Recive2').css('display', 'none');
			$('#Recive2').animate({ opacity : 0 }, 400);
			$('#slider').hide();
		}
		vv=true;
	});

	$('.side-nav li, .outer-nav li').click(function(){

		if (vv==false) {
			
			setTimeout(function(){
				$('.work').animate({ opacity : 1 }, 400);
				$('.work').css('display', 'flex');
					//$('#options-btn').css('display', 'none');
				}, 500);
				$('#Recive2').css('display', 'none');
				$('#Recive2').animate({ opacity : 0 }, 400);
				$('#slider').hide();
		}
		vv=true;
	});

	 $('.cta').click(function(){
		if (vv==false) {
			setTimeout(function(){
				$('.work').animate({ opacity : 1 }, 400);
				$('.work').css('display', 'flex');
					//$('#options-btn').css('display', 'none');
				}, 500);
				$('#Recive2').css('display', 'none');
				$('#Recive2').animate({ opacity : 0 }, 400);
				$('#slider').hide();
		}
		vv=true; 
	 });

// $(".slider2").load(function() {

// 	$(".slick-loading").fadeOut();
// 	$(".slick-list").delay(400).fadeOut("slow");
// }); 

// var $slider = $('.slide')
// 	.on('init', function(slick){
// 		console.log('shieeeeet!');
// 		$('.slide').fadeIn(3000);
// 	});
// $(".slide").slick({

// 		  // normal options...
// 		  infinite: true,
// 		  autoplay: false,
// 		  dots: false,
// 		  adaptiveHeight: true,
// 		  arrows: false,
// 		  // fade: true,
// 		  // //focusOnSelect: true,
// 		  // lazyLoad: 'ondemand',
// 		  // speed: 1000
		  
// 		});
// 

// var options = {
// 	horizontal: 1,
// 	itemNav: 'basic',
// 	speed: 300,
// 	mouseDragging: 1,
// 	touchDragging: 1
// };
// $('#sly').sly(options);





		$(".slider2").slick({

		  // normal options...
		  infinite: true,
		  autoplay: true,
		  dots: false,
		  adaptiveHeight: true,
		  arrows: false,
		  fade: true,
		  //focusOnSelect: true,
		  lazyLoad: 'ondemand',
		  speed: 1000
		  // the magic
		  // responsive: [{

		  //     breakpoint: 1024,
		  //     settings: {
		  //       slidesToShow: 3,
		  //       infinite: true
		  //     }

		  //   }, {

		  //     breakpoint: 600,
		  //     settings: {
		  //       slidesToShow: 2,
		  //       dots: true
		  //     }

		  //   }, {

		  //     breakpoint: 300,
		  //     settings: "unslick" // destroys slick

		  //   }]
		});

// $(".boxfather").slick({
// 	infinite: true,
// 	autoplay: true,
// 	lazyLoad: 'ondemand',
// 	arrows: true,
// 	speed: 1000
// });


// $("#owl").owlCarousel({

// 	singleitem : true,
// 	//itemsscaleup : true,

// 	// slideSpeed : 200,
// 	// paginationSpeed : 800,
// 	// rewindSpeed : 1000,

// 	autoplay : false,
// 	stopOnHover : false,

// 	navigation : true,
// 	navigationText : ["prev", "next"],
// 	rewindNav : true,
// 	scrollPerPage : false,

// 	pagination : true,
// 	paginationNumbers : true,

// 	responsive : true,
// 	//responsiveRefreshRate : 200,
// 	//responsiveBaseWidth : window,

// 	// baseclass : "boxfather",
// 	// theme : "box",

// 	lazyLoad : true,
// 	lazyFollow : true,
// 	lazyeffect : "fade",

// 	autoheight : true,

// 	jsonPath : false,
// 	jsonSuccess : false,

// 	dragBeforeAnimFinish : true,
// 	mouseDrag : true,
// 	touchDrag : true,

// 	addClassActive : true,
// 	transitionStyle : "fadeOut",

	
// 	// beforeUpdate : false,
// 	// afterUpdate : false,
// 	// beforeInit : false,
// 	// afterInit : false,
// 	// beforeMove : false,
// 	// afterMove : false,
// 	// afterAction : false,
// 	// startDragging : false,
// 	// afterLazyLoad: false


// }); 

LeftArrowBTN.onclick = function Left(){
	if (arr==true){
		console.log('left arrow clicked');
		// $('.list--item--nonactive').addClass('list--item');
		// $('.list--item').removeClass('list--item--nonactive');
		// $('slide1').hide();
		$('slide1').animate({ opacity : 0 }, 400);
		setTimeout(function(){
			$('.slide2').show();
			$('.slide2').animate({ opacity : 1 }, 400);
		}, 400);
		arr=false;
		console.log('arr=true, slide2=show')

	} else{
		console.log(' else left arrow clicked');
		// $('.slide2').hide();
		$('.slide2').animate({ opacity : 0 }, 400);
		setTimeout(function(){
			$('slide1').show();
			$('slide1').animate({ opacity : 1 }, 400);
		}, 400);
		arr=true;
		console.log('arr=false, slide1=show')
		
	}
	
}

RightArrowBTN.onclick = function Right(){
	if (arr==true){
		console.log(' right arrow clicked');
		// $('slide1').hide();
		$('slide1').animate({ opacity : 0 }, 400);
		setTimeout(function(){
			$('.slide2').show();
			$('.slide2').animate({ opacity : 1 }, 400);
		}, 400);
		arr=false;
		console.log('arr=false, slide2=show')
	} else{
		console.log(' else right arrow clicked');
		// $('.slide2').hide();
		$('.slide2').animate({ opacity : 0 }, 400);
		setTimeout(function(){
			$('slide1').show();
			$('slide1').animate({ opacity : 1 }, 400);
		}, 400);
		arr=true;
		console.log('arr=true, slide1=show')
		
		// $('.list--item--nonactive').addClass('list--item');
		// $('.list--item').removeClass('list--item--nonactive');
		
	}
	
}




















});






// $('.s3').onclick = function ClickedTrue(){
// console.log('yeah');
// $('#3s').addClass('section--is-active');
// $('#1s').removeClass('section--is-active');
// }


