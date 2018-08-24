"use strict";
// подключаем карту
function initMap() {
  var uluru = {
    lat: 59.938861,
    lng: 30.323154
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

// взаимодействие с модальными окнами
var ESC_CODE = 27;

var write = document.querySelector(".button__modal");
var modal = document.querySelector(".feedback");
var close = document.querySelector(".feedback__close");
var focus = modal.querySelector("[name=user-name]");

var escPressHandler = function(evt) {
  if (evt.keyCode === ESC_CODE) {
    modal.classList.remove("feedback__show");
  }
};

// открытие модального окна
write.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("feedback__show");
  // Устанавливаем фокус в поле
  focus.focus();

  window.addEventListener("keydown", escPressHandler);
});

// закрытие модального окна
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("feedback__show");
});

// реализация слайдера
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
};

sliderSelect();
