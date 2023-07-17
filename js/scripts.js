AOS.init({ disable: "mobile" });
$(".b-header__menu a").on("click", function () {
	let href = $(this).attr("href");
	$("html, body").animate(
		{
			scrollTop: $(href).offset().top,
		},
		{
			duration: 500,
			easing: "swing",
		}
	);
	if ($(".b-header__burger").hasClass("b-header__burger--close")) {
		$(".b-header__burger").removeClass("b-header__burger--close");
		$(".b-header__menu").slideUp();
	}
	return false;
});
$(".b-header__burger").on("click", function () {
	if ($(this).hasClass("b-header__burger--close")) {
		$(this).removeClass("b-header__burger--close");
		$(".b-header__menu").slideUp();
	} else {
		$(this).addClass("b-header__burger--close");
		$(".b-header__menu").slideDown();
	}
});
$(function () {
	$("#search").bind("change paste keyup", function () {
		let value = $(this).val();
		if (value.length > 3) {
			$(".b-winners__search-table .s-table__row").show();
			$(".b-winners__search-table .s-table__row").each(function (i, n) {
				if ($(n).find(".s-table__name").html() != "ФИО") {
					let search = $(n)
						.find(".s-table__name")
						.html()
						.toLowerCase()
						.indexOf(value.toLowerCase());
					if (search === -1) {
						$(n).hide();
					}
				}
			});
		} else {
			$(".b-winners__search-table .s-table__row").show();
		}
	});

	$(".popup-modal").magnificPopup({
		type: "inline",
		preloader: false,
	});

	$(".article8").on("click", function (e /*, params */) {
		setTimeout(function () {
			$(".mfp-wrap").animate(
				{ scrollTop: $("#article8").offset().top - 2200 },
				600
			);
		}, 500);
	});
	$(document).on("click", ".popup-modal-close", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});
