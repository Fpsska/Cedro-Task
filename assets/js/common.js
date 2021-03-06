document.addEventListener("DOMContentLoaded", () => {
    $('.slider').owlCarousel({                          // Источник: https://owlcarousel2.github.io/OwlCarousel2/
        items: 4.2,
        loop: true,
        responsive: {
            320: {
                items: 1,
                margin: 0,
                center: true,
            },
            375: {
                items: 1.5,
                margin: 20,
            },
            540: {
                items: 2,
                margin: 20,
            },
            768: {
                items: 2.5,
                margin: 20,
            },
            992: {
                items: 3.5,
                margin: 20,
            },
            1280: {
                items: 4.5,
                margin: 100,
            },
            1920: {
                items: 6,
                margin: 50,
            },
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
    
    let burgerOpen = document.querySelector(".btn--open");
    let burgerClose = document.querySelector(".btn--close");
    let burgerMenu = document.querySelector(".burger");

    burgerOpen.addEventListener("click", () => {
        burgerOpen.classList.remove("visible");
        burgerClose.classList.add("visible");
        burgerMenu.classList.add("visible");
        document.body.style.overflowY = "hidden";
    })
    
    burgerClose.addEventListener("click", () => {
        burgerOpen.classList.add("visible");
        burgerClose.classList.remove("visible");
        burgerMenu.classList.remove("visible");
        document.body.style.overflowY = "auto";
    })

    // /.burger menu

    let validationFunction = () => {
        'use strict';
        window.addEventListener('load', () => {
            let form = document.getElementById('needs-validation');
            form.addEventListener('submit', (event) => {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        }, false);
    }

    validationFunction();

    // /.validation
});


