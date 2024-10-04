$(document).ready(function() {
    $(".project__btn a").click(function() {
        $(".project__btn a").removeClass('active')
        $(this).addClass('active')
        var ids = $(this).attr('href')
        $('.work__head').hide();
        $(ids).show();
        return false;
    });
    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'accordion'
    });



    $('.studySlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });





    $('#yearly').click(function() {
        $('.pricing__yearly').show();
        $('.pricing__monthly').hide();
    })
    $('#monthly').click(function() {
        $('.pricing__monthly').show();
        $('.pricing__yearly').hide();
    })
    $('[data-fancybox]').fancybox({
        buttons: [
            'close'
        ],
        wheel: false,
        transitionEffect: "",
        loop: false,
        toolbar: false,
        clickContent: false
    });

});


const header = document.querySelector(".site-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});

$('.counter').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$('.counter2').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});


$('.mobil__toggle').click(function() {
    $('.mobil__toggle').toggleClass("active");
    event.stopPropagation();
    $('.navbar').slideToggle();
    $('.header__action').slideToggle();

});