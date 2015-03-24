var master = {window: {el: null, width: null, height: null}};


function calc() {
    master.window.height = $(window).height();
    master.window.width = $(window).width();
    
}
function actions() {
    cheet('s h a k e s p e a r e', function () {
      alert('Doubt thou the stars are fire; \nDoubt that the sun doth move; \nDoubt truth to be a liar; \nBut never doubt I love. \n                                                        - William Shakespeare');
    });
    $('#taskTable li:odd').addClass('odd');
    $('#taskTable li').on('mousemove', function(e) {
        if($('#taskTable').hasClass('listagem')) {
            return false;
        } else {
            var offset = $(this).offset(),
                relativeX = (e.pageX) + 40,
                relativeY = (e.pageY),
                screen = relativeX + 360,
                title = $(this).data('title'),
                type = $(this).data('type'),
                points = $(this).data('points'),
                release = $(this).data('release'),
                status = $(this).data('status');

            if(status == 'active') {
                $('#contenidoBlock').removeClass('inactive');
                $('#contenidoBlock').addClass(status);
            } else if(status == 'inactive') {
                $('#contenidoBlock').removeClass('active');
                $('#contenidoBlock').addClass(status);
            }

            if (screen > master.window.width){
                relativeX = (e.pageX) - 390;
            } else {
                relativeX = (e.pageX) + 40;
            }

            $('#contenidoBlock').css({
                'top': relativeY,
                'left': relativeX
            })
            .fadeIn('fast');

            $('#contenidoBlock #title').text(title);
            $('#contenidoBlock #type').text(type);
            $('#contenidoBlock #points').text(points);
            $('#contenidoBlock #release').text(release);
        }
    });
    $('#taskTable').on('mouseleave', function(e) {
        $('#contenidoBlock').fadeOut('fast');
    });

    $("#owl-demo").owlCarousel({

        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        pagination: false

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
    var owl = $("#owl-demo").data('owlCarousel');

    $('#next').click(function() {
        owl.next()
    });
    $('#prev').click(function() {
        owl.prev()
    });

}
function afterLoaded() {
}



$(window).load(afterLoaded);
$(document).ready(actions);
$(window).resize(calc).trigger('resize');
