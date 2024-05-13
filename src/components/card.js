import { cardTemplate } from "../scripts";

// @todo: Функция создания карточки
export function addCard(item, onDeleteCard, onClickOnImage, likeActive) {
    const newCard = cardTemplate.content.cloneNode(true);
    const title = newCard.querySelector(".card__title");
    title.innerText = item.name;
    const photo = newCard.querySelector(".card__image");
    photo.setAttribute("src", item.link);
    photo.setAttribute("alt", item.name);
  
    //Находим кнопку лайка
    const likeButtonElement  = newCard.querySelector(".card__like-button");
    likeButtonElement .addEventListener("click", () => likeActive(likeButtonElement));
  
    // Находим кнопку удаления и добавляем обработчик событий
    const deleteButton = newCard.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", onDeleteCard);
  
    photo.addEventListener("click", () => onClickOnImage(photo));
  
    return newCard;
}
  
//Функция активной кнопки лайк
export function activateLikeButton(evt) {
    evt.classList.add('card__like-button_is-active');
    console.log('like button clicked!')
}
  
// Функция удаления карточки
export function deleteCard(event) {
    const card = event.target.closest(".card");
    card.remove();
  }