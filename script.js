// L�nad funktion nedan, "Fade-in-vid-scroll-animation"

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
    var x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        x.style.transition = "0.6s";
        x.style.right = "0";
    }
}


// To do, g�m det engelska inneh�llet vid start och aktivera om knappen/l�nken trycks p�.
function switchLang() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function onLinkClick(clickedId) {
    document.getElementsByClassName('mainSections')[clickedId].scrollIntoView();
}