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
$scene.parallax();

});








// var myForm= document;
// $(myForm).ready(function(){
		
// 		var validName = false;
// 		var validEmail = false;
// 		var validPhone = false;

// 		$("#myForm").submit(function(event){
// 			event.preventDefault();

// 			var name = $("#fio").val();
// 			var email = $("#email").val();
// 			var phone = $("#phone").val();
// 			var regFIO =/^([а-яё]+ [а-яё]+ [а-яё]+)|([a-z']+ [a-z']+ [a-z']+)$/ig ; //([a-z0-9_-]+\.)*[a-z0-9_-]
// 			var regEmail = /^([a-z]+)$/ig;//+([@yandex.ru])|([@yandex.ua])|(@yandex.by)|(ya.ru)|(@yandex.kz)|(@yandex.com)
// 			if(name == ""|| name==" " ||(regFIO.test(name))==false) {  
// 				$("#fio").parent().removeClass("has-success").addClass("has-error");	
// 				$(".nameBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
// 				$(".nameBlock .glyphicon-ok").remove();
// 				validName = false;
				
// 			} else  {
// 				$("#fio").parent().removeClass("has-error").addClass("has-success");	
// 				$(".nameBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
// 				$(".nameBlock .glyphicon-remove").remove();
// 				validName = true;
// 			}
// 			// console.log(regFIO.test(name), "regFIO-test");
// 			// console.log(validName, "validName");
// 			// console.log(name.search(regFIO));
// 			// console.log(name.match(regFIO));
		

// 			if(email =="" || email==" " ||(regEmail.test(email))==false) {
// 				$("#email").parent().removeClass("has-success").addClass("has-error");	
// 				$(".emailBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
// 				$(".emailBlock .glyphicon-ok").remove();
// 				validEmail = false;	
// 			} else {
// 				$("#email").parent().removeClass("has-error").addClass("has-success");	
// 				$(".emailBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
// 				$(".emailBlock .glyphicon-remove").remove();
// 				validEmail = true;	
// 			}
// 			console.log(regEmail.test(email), "regEmail-test");
// 			console.log(validEmail, "validEmail");
// 			console.log(email.search(regEmail));
// 			console.log(email.match(regEmail));







// 			if(phone == ""|| phone==" ") {
// 				$("#phone").parent().removeClass("has-success").addClass("has-error");	
// 				$(".phoneBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
// 				$(".phoneBlock .glyphicon-ok").remove();
// 				validPhone = false;	
// 			} else {
// 				$("#phone").parent().removeClass("has-error").addClass("has-success");	
// 				$(".phoneBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
// 				$(".phoneBlock .glyphicon-remove").remove();
// 				validPhone = true;	
// 			}


// 			if(validName == true && validEmail == true && validPhone == true) {
// 				$("form").unbind('submit').submit(); //при нажатии кнопка только разбиндится, нужно еще и отправить
// 				alert("отправил");
// 			} else { 
// 				alert("не отправил");
// 			}

// 		});

// 	});















/*_____________________________________________________________________________________________*/
/*
$(document).ready(function() {
	var validFIO = false;
		validEmail = false;
		validPhone = false;

	$("form").submit(function(event){
		event.preventDefault();

		var FIO = $("#fio").val();
		var	Email = $("#email").val();
		var	Phone = $("#phone").val();
			
			failFIO = ("введи фио");
			failEmail = ("email, мать твою, это ж так просто");
			failPhone = ("цифры блядь! цифры вводи! ты что, сука, тупой?!");
			tryAgainYouStupidBitch = ("вдохни, выдохни, успокойся и попробуй еще разок");


		if (FIO == "" || FIO==" ") {
			// $("#fio").parent().removeClass("hasSuccess").addClass("hasError");
			//$(".nameBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
			//$(".glyphicon-ok").remove();
			alert(failFIO);	
			validFIO = false;		
		}
		else if (FIO == "123"){
			alert(failFIO);
			validFIO=false;
		}
		else {
			// $("#fio").parent().addClass("hasSuccess").removeClass("hasError");
			// $(".nameBlock .glyphicon-remove").remove();
			// $(".nameBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
			
			validFIO = true;
		}


			if (email == "" || email==" ") {
				alert(failEmail);
				validEmail = false;			
			}
			else if (email == "123"){
				alert(failEmail);
				validEmail = false;
			}
			else {
				
				validEmail = true;
				
			}


				if (phone == "" || phone==" ") {
					alert(failPhone);
					validPhone = false;			
				}
				else if (phone == "123"){
					alert(failPhone);
					validPhone = false;
				}
				else {
					
					validPhone = true;
					
				}
		

if (validFIO ==true && validEmail == true && validPhone == true){
	$("form").unbind('submit').submit();
	alert("ААААЛИЛУЯ! ААААЛИЛУЯ! алилуя алилуя алилуя алилуя алилуя алилуя алилуя алилуя");
}
else alert(tryAgainYouStupidBitch);

	});
});
*/
/*_____________________________________________________________________________________________*/

// function validate(form){ //рабочая вещь
// 	// var fio = form.fio.value;
// 		email = form.email.value;
// 		phone = form.phone.value;
// 	if(fio == ""|| fio==" ") //здесь можно вставить регулярку на поиск пробелов, цифр и символов
// 		fail = "вы не ввели имя";
// 	if(fail) {
// 		alert(fail);
// 		return false;
// 	}
// 	else{
// 		return true;
		
// 	}

// }


// var MyForm = {}
// MyForm.validate = function valid(form){
// 	var fio = form.fio.value;
// 	if(fio == ""|| fio==" ") //здесь можно вставить регулярку на поиск пробелов, цифр и символов
// 		fail = "вы не ввели имя";
// 	if(fail) {
// 		alert(fail);
// 		return false;
// 	}
// 	else{
// 		return true;
		
// 	}

// }








// var forms = document.getElementsByTagName('form');
// for(var i=0; i< forms.length; i++){
// 	forms[i].addEventListener('submit', validator);
// }
// var rules = {
// 	//email: /^\w{1,}@\w{1,}\w{2,}$/,
// 	required: function(el){
// 		if(el.value !=''){
// 			return true;
// 		}
// 			return false;
// 	},
// 	email: function(el){
// 		var reg = /^\w{1,}@\w{1,}\.\w{2,}$/;
// 		return reg.test(el.value);
// 	}
// }
// function showErrors(arr){
// 	console.log(arr);

// }
// function validator(){
// 	e.preventDefault();
// 	var errors = [];
// 	var inputs = this.elements;
// 	for(var i=0; i< inputs.length; i++){
// 		var rulesList = inputs[i].dataset.rule;
// 		rulesList = rulesList.split(' ');
// 			for(var j=0; j<rulesList.length; j++){
// 				if(rulesList[j] in rules){
// 					if(!rules[rulesList[j]](inputs[i])){
// 						errors.push({
// 							name: inputs[i].name,
// 							error: rulesList[j]
// 						})
// 					}
// 			}
// 		}
// 	}
// 	if(errors.length > 0){
// 		e.preventDefault();
// 		showErrors(errors);
// 	}
// }


// $(document).ready(function() {
// 	var validFIO = false;
// 		validEmail = false;
// 		validPhone = false;

// 	$("form").submit(function(event)){
// 		event.preventDefault();

// 		var userFIO = $("#FIO").val();
// 			userEmail = $("#email").val();
// 			userPhone = $("#phone").val();
// 		if (userFIO == "") {
			
// 		}
// 		else {
// 			validFIO = true;
// 		}

// 		if (userEmail == "") {
			
// 		}
// 		else {
// 			validEmail = true;
// 		}

// 		if (userPhone == "") {
			
// 		}
// 		else {
// 			validPhone = true;
// 		}
	

// if (validFIO ==true && validEmail == true && validPhone == true){
// 	$("form").unbind('submit').submit();
// }

// 	});



// });
