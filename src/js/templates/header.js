window.addEventListener('load', function (e) {
    if (document.querySelector('.js-arrow-btn')) {
        var arrowBtn = document.querySelector('.js-arrow-btn'),
            numbersPhone = document.querySelector('.numbers-phone');
        arrowBtn.addEventListener('click', function() {
            numbersPhone.classList.toggle('numbers-phone--open');
        });

        document.addEventListener('click', function(e) {
            if(!e.target.classList.contains('js-arrow-btn')) {
                numbersPhone.classList.remove('numbers-phone--open');
            }
        });
    }
});
