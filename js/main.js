$( document ).ready(function() {
    window.onmousemove = function (e) {
        showcase_popup(e)
    };

    // Horizontal scroll - Showcase
    $(window).scroll(function(e){
        if ($(window).width() > 1024) {
            var relative_scroll = ($(window).scrollTop() - $(".showcase-gallery-section").offset().top + $(".showcase-gallery-section").height()) * 0.1
            $(".animate-row-1").css({
                transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0," + relative_scroll + ", 0, 0, 1)"
            })
            $(".animate-row-2").css({
                transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0," + (relative_scroll * -1) + ", 0, 0, 1)"
            })
        }
    })

    function showcase_popup(e){
        e.stopPropagation();
        var showcase_highlight = document.getElementById('showcase-highlight');
        var showcase_offset = $(".project-showcase").offset();
        var relative_top = showcase_offset.top - $(window).scrollTop();
        var relative_left = showcase_offset.left;
        var relative_bottom = relative_top + $(".project-showcase").outerHeight();
        var relative_right = relative_left + $(".project-showcase").width();
        var x = e.clientX,
        y = e.clientY;
        if(x > relative_left && y > relative_top && x < relative_right && y < relative_bottom){
            $(".showcase-highlight").css({
                transform: "scale(1) translate(-50%, -50%)"
            })
            showcase_highlight.style.top = (y) + 'px';
            showcase_highlight.style.left = (x) + 'px';
            // Handle Mouse in out
            $(".project-item").each(function(){
                let selected = $(this).attr("data-showcase");
                var showcase_relative_offset = $(this).offset();
                var showcase_top = showcase_relative_offset.top - $(window).scrollTop();
                var showcase_bottom = showcase_top + $(this).outerHeight();
                if(y > showcase_top && y < showcase_bottom){
                    $(this).addClass("active")
                    $("." + selected).css({
                        display: "block"
                    })
                    $('.view-overlay .circle-btn').css({
                        display: "flex"
                    })
                }else{
                    $(this).removeClass("active")
                    $("." + selected).css({
                        display: "none"
                    })
                }
    
            })
        }else{
            $(".project-item").removeClass("active")
            $(".showcase-img").css({
                display: "none"
            })
            $(".showcase-highlight").css({
                transform: "scale(0) translate(-50%, -50%)"
            })
        }
    }
});