// when page is loaded
(function($) {
	// Play initial animations on page load.
	$(window).on('load', function() {
			window.setTimeout(function() {
				// do stuff after 1sec
				// $('body').removeClass('is-preload');
			}, 100);
		});

	// Add toggle button for sidebar
	// $('<div id="headerToggle">' + '<a href="#header" class="toggle"></a>' + '</div>').appendTo($('body'));
	// alternative method by me

	var toggle = '<div id="headerToggle" class="fixed">' + 
					'<input type="checkbox" id="main-navigation-toggle" class="btn btn--close" title="Toggle main navigation" />'+
					'<label for="main-navigation-toggle" class="text-center align-middle">'+
  						'<span id="top"></span>'+
					'</label>'+
				'</div>';

	// $('body').append($('<div id="headerToggle">' + '<a href="#header" class="toggle"></a>' + '</div>'));
	$('body').append(toggle);


	// $('#section1').load('pages/section1.html');
	// $('#section2').load('pages/section2.html');
	// $('#section3').load('pages/section3.html');
	// $('#section4').load('pages/section4.html');
	// $('#section5').load('pages/section5.html');

})(jQuery);

// load sections (pages)
$(document).ready(function () {
	$('#section0').load('pages/section0.html');
	$('#section1').load('pages/section1.html');
	$('#section2').load('pages/section2.html');
	$('#section3').load('pages/section3.html');
	$('#section4').load('pages/section4.html');
	$('#section5').load('pages/section5.html');
});

// Already hidden? Bail.
// if (body.hasClass('visible'))
//     return;

// toggle action listener
$(document).ready(function () {
	$('#headerToggle, .overlay, nav, #main-navigation-toggle').on('click', function () {
		// deactivate overlay
		if($('.overlay').hasClass("active")) {
			$('body').removeClass('header-visible');
			$('.overlay').removeClass('active');
			$('#main-navigation-toggle').prop("checked", false)
		} else {// activate overlay
			// $('overlay').toggleClass('visible');
			$('body').toggleClass('header-visible');
			$('.overlay').addClass('active');
			$('#main-navigation-toggle').prop("checked", true)
		}
	});
});


// todo: need constant listener
// toggle action listener
$('#headerToggle').on('change', function() {
	console.log("change");
		if ($('#headerToggle').attr("display")=="none") {
			// remove overlay
			$('.overlay').removeClass("active");

			// hidde sidebar 
			$('body'.removeClass("header-visible"));
		}
});



// after all elements have fully loaded 
$(window).on("load", function (e) {
    $("#headerToggle").click(function(){
		// $(this).toggleClass("open");
		// $("h1").addClass("fade");
    });
})


