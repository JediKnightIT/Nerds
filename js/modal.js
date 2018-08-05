'use strict';

var write = document.querySelector(".button__modal");
var modal = document.querySelector(".feedback");
var close = document.querySelector(".feedback__close");
var focus = modal.querySelector("[name=user-name]");

// открытие модального окна
write.addEventListener("click", function(e) {
  e.preventDefault();
  modal.classList.add("feedback__show");
  // Устанавливаем фокус в поле
  focus.focus();
});

// закрытие модального окна
close.addEventListener("click", function(e) {
  e.preventDefault();
  modal.classList.remove("feedback__show");
});
