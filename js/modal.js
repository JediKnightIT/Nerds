'use strict';

(function () {
  var ESC_CODE = 27;

  var write = document.querySelector(".button__modal");
  var modal = document.querySelector(".feedback");
  var close = document.querySelector(".feedback__close");
  var focus = modal.querySelector("[name=user-name]");

  var escPressHandler = function (evt) {
    if (evt.keyCode === ESC_CODE) {
      modal.classList.remove("feedback__show");
    }
  }

  // открытие модального окна
  write.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("feedback__show");
    // Устанавливаем фокус в поле
    focus.focus();

    window.addEventListener('keydown', escPressHandler);
  });

  // закрытие модального окна
  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("feedback__show");
  });
})();
