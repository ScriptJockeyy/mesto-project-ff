//Функция открытия попапа
export const openPopup = (popup) => {
    popup.classList.add("popup_is-opened");
  };
  
  //Функция закрытия попапа
  
export const closePopup = (popup) => {
    popup.classList.remove("popup_is-opened");
};
  
