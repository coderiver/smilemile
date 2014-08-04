head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	//click
	$(document).click(function() {
        $(".js-select-list").hide();
        $(".js-select").removeClass("is-active");
        $(".js-popup").slideUp();
        $(".js-log-in-form").slideUp();
        $(".js-log").removeClass("is-active");
    });

    //selectList
    function selectList() {
        var select = $(".js-select");
        var select_list = $(".js-select-list");
        $("body").on("click", ".js-select", function(event){
            if ($(this).hasClass("is-active")) {
                select.removeClass("is-active");
                select_list.hide();
            }
            else {
                select.removeClass("is-active");
                select_list.hide();
                $(this).find(".js-select-list").show();
                $(this).addClass("is-active");
            }
            event.stopPropagation();
        });
        $("body").on("click", ".js-select-list li", function(event){
            var id = $(this).attr("data-id");
            var text = $(this).text();
            $(this).parents(".js-select").find(".js-select-text").text(text);
            $(this).parents(".js-select").find(".js-select-input").val(id);
            $(this).parent().hide();
            $(this).parents(".js-select").removeClass("is-active");
            event.stopPropagation();
        });
    }  
    selectList();
    $("body").on("click", ".js-select", function(event){
        event.stopPropagation();
    });

    $('.js-log').click(function(){
    	var js_form = $('.js-log-in-form');
    	if ($(this).hasClass("is-active")) {
    	    $(this).removeClass("is-active");
    	    js_form.slideUp();
    	}
    	else {
    	    $(this).removeClass("is-active");
    	    js_form.slideUp();
    	    js_form.slideDown();
    	    $(this).addClass("is-active");
    	}
        return false;
    });

    //datepicker
    $( "#datepicker, #datepicker2" ).datepicker({
        showOn: "both",
        buttonImage: "img/calendar.png",
        buttonImageOnly: false,
        dateFormat: "mm.dd.yy"
    });

    $(".js-add, .js-close").click(function(){
        $(".js-popup").slideToggle();
        return false;
    })
    $("body").on("click", ".js-popup, .js-log-in-form", function(event){
        event.stopPropagation();
    });

    $('.js-form').on('click', '.js-close-row', function(){
        $(this).parent().remove();
        return false;
    });

    $('.js-addrow').on("click", function(){
        var template = $('.js-template-row').html();
        $(this).before(template);
        return false;
    });

    $( ".google-map__window" ).parent().css( "position", "relative" );

});
	//scrollPane
	$('.scroll-pane').jScrollPane({
		hideFocus: true
	});

        function initialize() {
            var mapOptions = {
                zoom: 12,
                center: new google.maps.LatLng(41.804444, 12.250833),
                disableDefaultUI: true,
                scrollwheel: false,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.DEFAULT,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP,

            }
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            var image = 'img/icons/marker.png';
            var myLatLng1 = new google.maps.LatLng(50.345001, 30.894722);
            var myLatLng2 = new google.maps.LatLng(41.804444, 12.250833);
            var marker1 = new google.maps.Marker({
                  position: myLatLng1,
                  map: map,
                  title: 'Аэропорт Киев Борисполь”', 
                  icon: image
            });
            var marker2 = new google.maps.Marker({
                  position: myLatLng2,
                  map: map,
                  title: 'Leonardo Da Vinci International Airport (FCO)”', 
                  icon: image
            });
            var contentString1 =    '<div class="google-map__window">'
                    +'<div class="google-map__block"><i></i><p>Аэропорт Киев Борисполь</p></div>';

            var contentString2 =    '<div class="google-map__window">'
                    +'<div class="google-map__block"><i></i><p>Leonardo Da Vinci International Airport (FCO)</p></div>';

            var infowindow1 = new google.maps.InfoWindow({
                content: contentString1
            });
            var infowindow2 = new google.maps.InfoWindow({
                content: contentString2
            });
                //infowindow1.open(map,marker1);
            infowindow2.open(map,marker2);

        }
        // Asynchronous Loading
        function loadScript() {
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&language=ru&' +
              'callback=initialize';
          document.body.appendChild(script);
        }
        window.onload = loadScript;