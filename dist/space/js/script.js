$(document).ready(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow_left" src="../img/icons/arrow-left.svg" alt="arrow-lefct">',
        nextArrow: '<img class="slider__arrow slider__arrow_right" src="../img/icons/arrow-right.svg" alt="arrow-right">'
    }); 
    $('.header__list-btn').on('click', function(){
        $('.header__list').toggleClass('active')
    });
});



