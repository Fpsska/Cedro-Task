document.addEventListener("DOMContentLoaded", () => {
    $('.slider').owlCarousel({                          // Источник: https://owlcarousel2.github.io/OwlCarousel2/
        items: 4.2,
        loop: true,
        responsive: {
            1280: {
                margin: 10,
            }
        },
    });

    // /.slider

    let phoneINP = document.querySelector('input[name=tel]'); // Источник:  https://github.com/RobinHerbots/Inputmask
    let inputMaskTel = new Inputmask('+7 (999) 999-99-99');
    inputMaskTel.mask(phoneINP);

    let emailINP = document.querySelector('input[name=email]');
    Inputmask("email").mask(emailINP);

    // /.inputmask

    let sliderICO = document.querySelectorAll(".slider__icon");

    sliderICO.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        })
    })

    // /.slider icon active
});

(function () {
    'use strict';
    window.addEventListener('load', function () {
        var form = document.getElementById('needs-validation');
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();
// /.validation