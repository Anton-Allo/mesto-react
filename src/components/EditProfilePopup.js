import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={'edit-profile-info'}
      title={'Редактировать профиль'}
      form={'edit-form'}
      formName={'form-edit_profile-info'}
      submitBtn={'save-form-button'}
      buttonText={'Сохранить'}
    >
      <input
        type="text"
        placeholder="Ваше имя"
        name="name"
        className="popup__input-form popup__input-form-name"
        minLength={2}
        maxLength={40}
        required
        id="inputNameProfile"
      />
      <span className="popup__input-error inputNameProfile-error">
        Вы пропустили это поле.
      </span>
      <input
        type="text"
        placeholder="Род занятий"
        name="about"
        className="popup__input-form popup__input-form-occupation"
        minLength={2}
        maxLength={200}
        required
        id="inputOccupationProfile"
      />
      <span className="popup__input-error inputOccupationProfile-error">
        Вы пропустили это поле.
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
