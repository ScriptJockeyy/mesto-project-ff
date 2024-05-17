//Функция открытия попапа
export const openPopup = (popup) => {
  popup.classList.add("popup_is-opened");
  document.addEventListener('keydown', closeByEscape);
  };
  
  //Функция закрытия попапа
  
export const closePopup = (popup) => {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener('keydown', closeByEscape);
};
  

export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}
