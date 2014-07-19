head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	//click
	$(document).click(function() {
        $(".js-select-list").hide();
        $(".js-select").removeClass("is-active");
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
    });

});
	//scrollPane
	$('.scroll-pane').jScrollPane({
		hideFocus: true
	});