$(document).ready(function() {
  function heightDetect() {
  	$(".main_head").css("height", $(window).height());
  };
  heightDetect();
  $(window).resize(function() {
  	heightDetect();
  });

  $(".mnu_menu_fon li a").click(function() {
  	$(".mnu_menu_fon").fadeOut(600);
  	$(".mnu_menu_button").toggleClass("active");
  });

  $(".mnu_menu_button").click(function() {
		if ($(".mnu_menu_fon").is(":visible")) {
			$(".mnu_menu_fon").fadeOut(600);
			$(".mnu_menu_fon li a").removeClass("fadeInUp animated");
		} else {
			$(".mnu_menu_fon").fadeIn(600);
			$(".mnu_menu_fon li a").addClass("fadeInUp animated");
		};
	});

	$("input, select, textarea").jqBootstrapValidation();

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$('#top').hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#top').fadeIn();
			} else {
				$('#top').fadeOut();
			}
		});

		$("#top").click(function () {
			$("body, html").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	});	

	//Якорь
	$("#mnu_menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем индефикатор блока с атрибута href
		var id =$(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);	
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".title_head").animated("flipInY", "fadeOutDown");
	$(".min_title_head").animated("flipInY", "fadeInRight");
	$(".button_head").animated("flipInY", "fadeInRight");



});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});



