$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button-next",
      prevEl: ".reviews-slider__button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("привет");
    document
      .querySelector(".navbar-menu")
      .classList.toggle("navbar-menu_visited");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        closeModal(event);
      }
    });
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Enter your name",
          minlength: "Name must contain more than 2 characters",
        },
        email: {
          required: "Enter your email",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Enter your phone",
          minlength: "The number must contain at least 10 characters",
        },
      },
    });
  });
  $(".form").ready(function () {
    $("#phone").mask("+7 (999) 999-99-99");
    $("#tel").mask("+7 (999) 999-99-99");
  });
  AOS.init();
});
