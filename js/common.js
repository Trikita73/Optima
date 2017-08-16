$(document).ready(function() {
  function heightDetect() {
  	$(".main_head").css("height", $(window).height());
  };
  heightDetect();
  $(window).resize(function() {
  	heightDetect();
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

	
});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});



