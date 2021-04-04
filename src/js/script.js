let sliderHome = function () {
    if ($(".home-slider__wrap").length === 0) {
        return false
    }

    $(".home-slider__wrap").slick({
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
}

let selectOptionCustom = function () {
    $('.form-select').addClass('no-select')
    $('.form-select').change(function () {
        console.log($(this).val());
        let value = $(this).val()
        if (value == '' || value == 0) {
            $(this).addClass('no-select')
        } else {
            $(this).removeClass('no-select')
        }
    })
}

let MenuToggleMB = function () {
    $('.header-menu__mb').click(function () {
        $(this).toggleClass('active')
        $('.header-menu__nav').toggleClass('active')
    })
}

$(window).on("load", function () {
    selectOptionCustom()
    MenuToggleMB()
    sliderHome()
});

$(window).on("resize", function () {
    if (window.innerWidth > 1024) {
        $('.header-menu__mb').removeClass('active')
        $('.header-menu__nav').removeClass('active')
    }
});

