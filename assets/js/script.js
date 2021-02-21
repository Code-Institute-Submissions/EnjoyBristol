/**************************** Navbar on click function ***********************************/

$(document).ready(function () {
    $(".nav-link").on("click", function () {
        $("a.nav-link").removeClass("active");
        $(this).addClass("active");
    });
});

/**************************** Function for fixed header scrolling of Parallax ***********************************/

$(window).scroll(function () {
    var scrolledY = $(window).scrollTop();
    $("#container").css("background-position", "left " + scrolledY + "px");
});

/**************************** Function to close dropdown menu after selecting section ***********************************/

window.onclick = function () {
    let dropDown = document.getElementById("navbarNavDropdown");
    if (dropDown.classList.contains("show")) {
        dropDown.classList.remove("show");
    }
};

