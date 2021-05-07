$(document).ready(function () {
    $('#header_menu_button, #mobile_menu_close_button').on('click', function (event) {
        console.log("click");
        if ($('#mobile_menu').hasClass('closed')) {
            $('#mobile_menu').removeClass('closed');
            $('#splash').animate( { display: "block" }, 250);
            $('#mobile_menu').animate({left: '0px'}, 250);
            $("#header, #footer, #app").addClass("blured");
        }
        else {
            $('#mobile_menu').addClass('closed');
            $('#splash').animate( { display: "none" }, 250);
            $('#mobile_menu').animate({left: '-300px'}, 250);
            $("#header, #footer, #app").removeClass("blured");
        }
    });
});