var openButton = document.querySelector(".write");
var openPopup = document.querySelector(".popup-1");
var closeButton = openPopup.querySelector(".to-close");
var fillingForm = openPopup.querySelector(".form-to-fill");
var loginLogin = openPopup.querySelector(".upper-cell");
var mailBox = openPopup.querySelector(".upper");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

openButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  openPopup.classList.add("modal-show");

  if (storage) {
    loginLogin.value = storage;
    mailBox.focus();
  } else {
    loginLogin.focus();
  }
});

closeButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  openPopup.classList.remove("modal-show");
  openPopup.classList.remove("modal-error");
});

fillingForm.addEventListener("submit", function(evt) {
  if (!loginLogin.value || !mailBox.value) {
    evt.preventDefault();
    openPopup.classList.remove("modal-error");
    openPopup.offsetWidth = openPopup.offsetWidth;
    openPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (openPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      openPopup.classList.remove("modal-show");
      openPopup.classList.remove("modal-error");
    }
  }
});
