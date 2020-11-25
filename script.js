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

function showLinks() {
    var x = document.getElementById('dropdownContent');
    if (x.style.display === "block")
    {
        x.style.display = "none";
    }
    else
    {
        x.style.display = "block";
    }
}

function clickScroll(clickedId) {
    document.getElementsByClassName('mainSections')[clickedId].scrollIntoView();
}