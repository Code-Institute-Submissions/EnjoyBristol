/**************************** Navbar on click function ***********************************/

$(document).ready(function () {
    $(".nav-link").on("click", function () {
        $("a.nav-link").removeClass("active");
        $(this).addClass("active");
    });
});

/**************************** Function for scrolling of Parallax ***********************************/

$(window).scroll(function () {
    var scrolledY = $(window).scrollTop();
    $('#container').css('background-position', 'left ' + ((scrolledY)) + 'px');
});
