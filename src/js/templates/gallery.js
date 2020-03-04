window.addEventListener('load', function(e) {
    if(document.querySelector('.carousel')) {

        var slider = tns({
            "container": ".carousel",
            "items": 3,
            "slideBy": 1,
            "center": true,
            "mouseDrag": false,
            "lazyload": true,
            "lazyloadSelector": ".carousel-item-lazy",
            "controlsPosition": "bottom",
            "navContainer": ".carousel-tools",
            "navAsThumbnails": true,
            "preventActionWhenRunning": true
        });

        var info = slider.getInfo(),
        indexCurrent = info.index;

        slideActivation(indexCurrent);

        function slideActivation(current, status) {
            if(status) {
                document.querySelector('.active-slide').classList.remove('active-slide');
            }

            var slideCurrent = info.slideItems[current];

            slideCurrent.classList.add('active-slide');

        };

        var carouselTools = document.querySelector('.carousel-tools'),
            itemsTools = document.querySelectorAll('.carousel-tools-item').length;

        // console.log(carouselTools.scrollWidth);
        // console.log(carouselTools.offsetWidth);

        slider.events.on('indexChanged', function(e) {
            slideActivation(e.index, true);

            // console.log(document.querySelector('.tns-nav-active').clientLeft);
            // console.log(e.index);

            var activeToolIndex = +(document.querySelector('.tns-nav-active').getAttribute('data-nav'));
            // console.log(activeToolIndex);
            // console.log(carouselTools.scrollLeft);
            //
            // console.log('widthBefore - ', 134 * activeToolIndex);

            var scrollVal = 134 * activeToolIndex;
            carouselTools.scrollLeft = scrollVal - (carouselTools.offsetWidth/2 - 67);

        });

    ////////////////////////////


        // console.log(carouselTools.offsetWidth);
        if(carouselTools.scrollWidth > carouselTools.offsetWidth) {
            carouselTools.style.justifyContent = 'flex-start';


        }
        // document.querySelector('.left-scrl').addEventListener('click', function () {
        //     carouselTools.scrollLeft -= 134;
        // });
        //
        // document.querySelector('.right-scrl').addEventListener('click', function () {
        //     carouselTools.scrollLeft += 134;
        // });



    }
});