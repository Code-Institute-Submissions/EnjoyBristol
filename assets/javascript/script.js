$(document).ready(function () {
        $(".nav-link").on("click", function () {
        $("a.nav-link").removeClass("active");
        $(this).addClass("active");
        });
    });

    $(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('#container').css('background-position', 'left ' + ((scrolledY)) + 'px');
});
