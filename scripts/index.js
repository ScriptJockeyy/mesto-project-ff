// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template");

// @todo: DOM узлы

const placeList = document.querySelector(".places__list");
console.log(placeList);
// @todo: Функция создания карточки
function addCard(item) {
  const newCard = cardTemplate.content.cloneNode(true);
  const title = newCard.querySelector(".card__title");
  title.innerText = item.name;
  const photo = newCard.querySelector(".card__image");
  photo.setAttribute("src", item.link);
  return newCard;
}

initialCards.forEach(function (item) {
  const card = addCard(item);
  placeList.appendChild(card);
});

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
