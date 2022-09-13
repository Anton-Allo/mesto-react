import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={'add-button'}
      title={'Новое место'}
      form={'add-form'}
      formName={'form-add-card'}
      submitBtn={'create-form-buttonn'}
      buttonText={'Создать'}
    >
      <input
        type="text"
        placeholder="Название"
        name="cardTitle"
        className="popup__input-form popup__input-form-location"
        minLength={2}
        maxLength={30}
        required
        id="inputLocation"
      />
      <span className="popup__input-error inputLocation-error">
        Вы пропустили это поле.
      </span>
      <input
        type="url"
        placeholder="Ссылка на картинку"
        name="cardLink"
        className="popup__input-form popup__input-form-link"
        required
        id="inputLinkImage"
      />
      <span className="popup__input-error inputLinkImage-error">
        Вы пропустили это поле.
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
