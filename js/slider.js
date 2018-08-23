'use strict';

(function () {
  function sliderSelect() {
    var control = document.querySelectorAll(".control");
    var slides = document.querySelectorAll(".promo__item");

    for (var i = 0; i < control.length; i++) {
      control[i].addEventListener("click", function (evt) {
        evt.preventDefault();

        for (var j = 0; j < control.length; j++) {
          control[j].classList.remove("control--active");
          evt.currentTarget.classList.add("control--active");
          slides[j].classList.remove("promo__item--active");

          if (evt.currentTarget === control[j]) {
            slides[j].classList.add("promo__item--active");
          }
        }
      });
    }
  }
  sliderSelect();
})();
