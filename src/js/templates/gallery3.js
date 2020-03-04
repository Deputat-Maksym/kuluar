$(document).ready(function(){
    var carousel = $('.carousel').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        lazyLoad: 'ondemand',
        // asNavFor: '.carousel-tools'
    });


    carousel.on('init', function(slick){
        console.log(slick);
    });


    // $('.carousel-tools').slick({
    //     infinite: true,
    //     centerMode: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: false,
    //     arrows: false,
        // asNavFor: '.carousel',
        // focusOnSelect: true,
        // variableWidth: true
        // lazyLoad: 'ondemand'
    // });
});