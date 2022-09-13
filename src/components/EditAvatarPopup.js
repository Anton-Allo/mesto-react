import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={'avatar-edit'}
      title={'Обновить аватар'}
      form={'avatar-form'}
      formName={'addAvatar'}
      submitBtn={'save-form-button'}
      buttonText={'Сохранить'}
    >
      <input
        id="avatarUrl-input"
        className="popup__input-form popup__input-form_avatar-url"
        required
        placeholder="Ссылка на картинку"
        type="url"
        name="avatarUrl"
      />
      <span className="avatarUrl-input-error popup__input-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
