(function ($) {
	'use script';


	var $loader = $('#preloader');
	if ($loader.length > 0) {
		$(window).on('load', function (event) {
			$('#preloader').delay(500).fadeOut(500);
		});
	}

	// Scroll Area
	var $scroll = $('.scroll-area');
	if ($scroll.length > 0) {
		$(document).ready(function () {
			$('.scroll-area').click(function () {
				$('html').animate({
					'scrollTop': 0,
				}, 700);
				return false;
			});
			$(window).on('scroll', function () {
				var a = $(window).scrollTop();
				if (a > 400) {
					$('.scroll-area').slideDown(300);
				} else {
					$('.scroll-area').slideUp(200);
				}
			});
		});
	}



	//video
	var $video = $('.technology-video a');
	if ($video.length > 0) {
		$('.technology-video a').magnificPopup({
			type: 'iframe',
		});
	}

	//mixltup
	var $mix = $('.p-projects-full');
	if ($mix.length > 0) {
		$(document).ready(function () {
			var mixer = mixitup('.p-projects-full')

			var mixer = mixitup('.p-projects-full');
			var mixer = mixitup('.p-projects-full', {
				selectors: {
					target: '.blog-item'
				},
				animation: {
					duration: 300
				}
			});

		});
	}





	// Hero-Banner-Slider
	$('.hero-banner-slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	// testimonils-slider
	$('.testimonils-slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.prev-four'),
		nextArrow: $('.next-four'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	// Area-Practise
	$('.practise-slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
				breakpoint: 1401,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	// Our-Service
	$('.service-slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.prev-sr'),
		nextArrow: $('.next-sr'),
		responsive: [
			{
				breakpoint: 1401,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	// Clients-Slider
	$('.client-slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.prev-cli'),
		nextArrow: $('.next-cli'),
		responsive: [
			{
				breakpoint: 1401,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	// Our-Partners
	$('.partners-profile-slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.prev-one'),
		nextArrow: $('.next-one'),
	});
}(jQuery));

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}
// Read-More-Button
function myFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more <i class='fas fa-plus'></i>";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less <i class='fas fa-minus'></i>";
	  moreText.style.display = "inline";
	}
}
$('.gallery-image a').magnificPopup({
	type: 'image'
  });