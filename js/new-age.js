(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })
	$('#slides').superslides({
      animation: 'fade'
    });
	$('#layananproduk').DataTable();
		//google map
		var map;
		  function initialize() {
			var myLatLng = {lat: -6.299274, lng: 106.831804};
			var map = new google.maps.Map(document.getElementById('map_canvas'), {
			  zoom: 16,
			  center: myLatLng
			});

			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map
			});
		  }

		  google.maps.event.addDomListener(window, 'load', initialize);


})(jQuery); // End of use strict
