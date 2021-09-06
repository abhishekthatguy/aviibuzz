// Sticky Header
$(window).scroll(function () {

    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('bg-secondary text-secondary');
        $('.nav-link').removeClass('text-white');
        $('#logoImg').attr('src','../img/logo.png');
    } else{
        $('.navbar').removeClass('bg-secondary text-secondary');
        $(".nav-link").addClass('text-white');
        $('#logoImg').attr('src','../img/logoavii.png');
    }
     if ($(window).scrollTop() > 1000) {
        $('header').addClass('invisible');
    } else{
        $('header').removeClass('invisible');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
    if ($('.header').hasClass('open-nav')) {
        $('.header').removeClass('open-nav');
    } else {
        $('.header').addClass('open-nav');
    }
});

$('.main_h li a').click(function () {
    if ($('.header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.header').removeClass('open-nav');
    }
});

// navigation scroll 
$('nav a').click(function (event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
