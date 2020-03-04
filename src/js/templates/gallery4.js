window.addEventListener('load', function (e) {
    if (document.querySelector('.carousel')) {
        var carouselTools = document.querySelector('.carousel-tools');
        if(carouselTools.scrollWidth > carouselTools.offsetWidth) {
            carouselTools.style.justifyContent = 'flex-start';
        };

        var slider2 = new Glide('.carousel', {
            type: 'carousel',
            perView: 3,
            focusAt: 'center',
            //peek: '50', // { before: 100, after: 50 } - peek 100px on the left side and 50px on
            breakpoints: {
                1000: {
                    perView: 2
                },
                640: {
                    perView: 1
                }
            }
        });

        slider2.on('build.after', function () {
            getSlides();
        });

        slider2.on('move.after', function () {
            getSlides();
        });

        slider2.on('run.after', function () {
            var activeToolIndex = +(document.querySelector('.glide__bullet--active').getAttribute('data-glide-dir').slice(1));
            console.log(activeToolIndex);
            var scrollVal = 134 * activeToolIndex;
            carouselTools.scrollLeft = scrollVal - (carouselTools.offsetWidth/2 - 67);
        });

        slider2.mount();

        function getSlides () {
            var activeSlide = document.querySelector('.carousel .glide__slide--active')
            var prev = activeSlide.previousElementSibling.querySelector('.carousel-item img');
            var center = activeSlide.querySelector('.carousel-item img');
            var next = activeSlide.nextElementSibling.querySelector('.carousel-item img');

            setImg(prev);
            setImg(center);
            setImg(next);
        };

        function setImg (slide) {
            var processed = slide.getAttribute('data-processed')
            if (processed === 'false') {
                slide.setAttribute('src', slide.getAttribute('data-src'))
                slide.setAttribute('data-processed', 'true')
            }
        };
    }
});
