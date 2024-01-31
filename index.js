const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup__image");

// const galleryPic = document.querySelector(".gallery__pic");
const closeButton = document.querySelector(".popup__close-button");

function openPopup(galleryPic) {
  popup.classList.add("popup_open");
  popupImage.src = galleryPic.src;
}

// galleryPic.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_open");
}

closeButton.addEventListener("click", closePopup);
