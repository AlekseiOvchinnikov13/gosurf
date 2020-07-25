$(function(){

    $('.header-slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrow_left.svg" alt="arrow">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrow_right.svg" alt="arrow">',
        asNavFor: '.slider-dots-head'
    });
    $('.slider-dots-head').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header-slider'
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrow_left.svg" alt="arrow">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrow_right.svg" alt="arrow">',
        asNavFor: '.slider-map,.holder-slider'
    });
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider,.holder-slider',
        focusOnSelect: true
    });
    $('.holder-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrow_left.svg" alt="arrow">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrow_right.svg" alt="arrow">',
        asNavFor: '.slider-map,.surf-slider'
    });

    $('.shop-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrow_left.svg" alt="arrow">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrow_right.svg" alt="arrow">',
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
        var parents = $(this).parents('.holder-slider__info');
        var summ = $('.sum', parents).data('nights') * $('.nights', parents).val() + $('.sum', parents).data('guests') * $('.guests', parents).val() -1;
        $('.sum', parents).html('$' + summ);

        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    $('.quantity-button').on('click', function () {
        var parents = $(this).parents('.holder-slider-info');
        var summ = $('.sum', parents).data('nights') * $('.nights', parents).val() + $('.sum', parents).data('guests') * $('.guests', parents).val() - 1;
        $('.sum', parents).html('$' + summ);
    });

    var classSum = $('.sum');
    var sum = $('.nights').val() * classSum.data('nights') + $('.guests').val() * classSum.data('guests') - 1;
    classSum.html('$' + sum);

    $('.surfboard-box-circle').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.menu-btn').on('click', function () {
       $('.menu').toggleClass('active');
    });
});