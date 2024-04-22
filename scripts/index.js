// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template");

// @todo: DOM узлы
const placeList = document.querySelector(".places__list");

// @todo: Функция удаления карточки
function deleteCard(event) {
  const card = event.target.closest(".card");
  card.remove();
}

// @todo: Функция создания карточки
function addCard(item, onDeleteCard) {
  const newCard = cardTemplate.content.cloneNode(true);
  const title = newCard.querySelector(".card__title");
  title.innerText = item.name;
  const photo = newCard.querySelector(".card__image");
  photo.setAttribute("src", item.link);
  photo.setAttribute("alt", item.name);

  // Находим кнопку удаления и добавляем обработчик событий
  const deleteButton = newCard.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", onDeleteCard);

  return newCard;
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const card = addCard(item, deleteCard);
  placeList.appendChild(card);
});
