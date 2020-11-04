// Hittad funktion nedan, "Fade-in-vid-scroll-animation"

$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadeIn').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ 'opacity': '1' }, 500);
            }
        });
    });
});

function onLinkClick(clickedId) {
    document.getElementsByClassName('mainSections')[clickedId].scrollIntoView();
}