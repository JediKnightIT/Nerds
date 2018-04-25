var write = document.querySelector(".button__modal");
var modal = document.querySelector(".feedback");
var close = document.querySelector(".feedback__close");

// var formValidation = modal.querySelector(".hotel-search__form");
// var arrival = modal.querySelector("[name=arrival]");
// var departure = modal.querySelector("[name=departure]");
// var adults = modal.querySelector("[name=adults]");

// открытие формы поиска
  write.addEventListener("click", function(e) {
    e.preventDefault();

    modal.classList.add("feedback__show");
  });

  // закрытие формы поиска
  close.addEventListener("click", function(e) {
    e.preventDefault();

    modal.classList.remove("feedback__show");
  });

// // валидация формы
//   formValidation.addEventListener("submit", function(e) {

//     if (!arrival.value || !departure.value || !adults.value) {
//       e.preventDefault();

//       modal.classList.add("hotel__modal-error");
//     }
//   });
