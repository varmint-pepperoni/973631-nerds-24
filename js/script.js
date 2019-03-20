"use strict";

// Слайдер
(function () {
    var slider = document.querySelector(".slider");

    if (!slider) {
        return;
    }

    var slides = slider.querySelectorAll(".slider__main-item");
    var buttons = slider.querySelectorAll(".slider__switch-button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", handler);
    }

    function handler(event) {
        var index = getButtonIndex(event.currentTarget);

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("slider__switch-button_active");
            slides[i].classList.remove("slider__main-item_active");
        }

        event.currentTarget.classList.add("slider__switch-button_active");
        slides[index].classList.add("slider__main-item_active");
    }

    function getButtonIndex(button) {
        for (var i = 0; i < buttons.length; i++) {
            if (button === buttons[i]) {
                return i;
            }
        }
    }
})();

// Модальное окно
(function () {
    var modal = document.querySelector(".modal-feedback");
    var openButton = document.querySelector(".write-us__link");
    var closeButton = modal.querySelector(".modal-feedback__close");
    var fullname = modal.querySelector("[name=name]");
    var form = document.querySelector(".modal-feedback__form");
    var email = modal.querySelector("[name=email]");
    var text = modal.querySelector("[name=text]");

    openButton.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.add("modal-feedback_show");
        fullname.focus();
    });

    closeButton.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("modal-feedback_show");
        modal.classList.remove("modal-feedback_error");
        modal.classList.add("modal-feedback");
    });


    form.addEventListener("submit", function (event) {
        if (!fullname.value || !email.value || !text.value) {
            event.preventDefault();
            modal.classList.remove("modal-feedback_error");
            modal.offsetWidth;
            modal.classList.add("modal-feedback_error");
        }
        if (!fullname.value) {
            fullname.classList.add("modal-feedback_wrong");
        }
        if (!email.value) {
            email.classList.add("modal-feedback_wrong");
        }
        if (!text.value) {
            text.classList.add("modal-feedback_wrong");
        }
    });

    fullname.addEventListener("input", function () {
        fullname.classList.remove("modal-feedback_wrong");
    });

    email.addEventListener("input", function () {
        email.classList.remove("modal-feedback_wrong");
    });

    text.addEventListener("input", function () {
        text.classList.remove("modal-feedback_wrong");
    });

    window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
            event.preventDefault();

            if (modal.classList.contains("modal-feedback_show")) {
                modal.classList.remove("modal-feedback_show");
                modal.classList.remove("modal-feedback_error");
            }
        }
    });
})();

