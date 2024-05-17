import "../pages/index.css";
import initialCards from "./cards.js";
import { addCard } from "../components/card.js";
import { activateLikeButton } from "../components/card.js";
import { deleteCard } from "../components/card.js";
import { openPopup } from "../components/modal.js";
import { closePopup } from "../components/modal.js";


//Переменные попапов
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popups = document.querySelectorAll(".popup");
const popupImage = document.querySelector(".popup_type_image");
const popupInnerImage = document.querySelector(".popup__image");
const imageText = document.querySelector(".popup__caption"); 

// @todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template");

// @todo: DOM узлы
const placeList = document.querySelector(".places__list");

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const card = addCard(item, deleteCard, openPopupForImage, activateLikeButton);
  placeList.appendChild(card);
});

function openPopupForImage(image) {
  openPopup(popupImage);
  popupInnerImage.setAttribute("src", image.src);
  popupInnerImage.setAttribute("alt", image.alt);
  imageText.textContent = image.alt;
}

//Переменные кнопок
const openButtonEdit = document.querySelector(".profile__edit-button");
const openButtonAdd = document.querySelector(".profile__add-button");
const closeButtons = document.querySelectorAll(".popup__close");


//Открываем попапы
openButtonEdit.addEventListener("click", () => {
  fillFormFromProfile();
  openPopup(popupEdit);
});
openButtonAdd.addEventListener("click", () => openPopup(popupNewCard));

// Закрываем попап по клику на оверлей
popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("popup") ||
      event.target.classList.contains("popup__close")
    ) {
      closePopup(popup);
    }
  });
});

//Закрываем по кнопке
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup_is-opened");
    closePopup(popup);
  });
});

//Переменные формы Edit
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

//Функция передачи данных в форму
const fillFormFromProfile = function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

fillFormFromProfile();

//Функция передачи данных в анкету
function handleFormSubmit(evt) {
  evt.preventDefault();

  const name = nameInput.value;
  const description = jobInput.value;

  profileName.textContent = name;
  profileDescription.textContent = description;

  const popup = popupEdit.closest(".popup_is-opened");
  closePopup(popup);
}

popupEdit.addEventListener("submit", handleFormSubmit);

//Переменные формы New Card
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardLinkInput = document.querySelector(".popup__input_type_url");

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const name = cardNameInput.value;
  const link = cardLinkInput.value;
  const card = addCard({ name, link }, deleteCard, openPopupForImage, activateLikeButton);

  placeList.prepend(card);

  const formElement = document.forms['new-place'];
  formElement.reset();

  const popup = popupNewCard.closest(".popup_is-opened");
  closePopup(popup);
}

popupNewCard.addEventListener("submit", handleAddCardFormSubmit);
