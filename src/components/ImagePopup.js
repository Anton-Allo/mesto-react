"use strict";

function ImagePopup() {
  return (
    <section className="popup popup_open-image">
      <figure className="popup__image-container">
        <button aria-label="Выход" type="button" className="popup__close" />
        <img src="#" className="popup__view-image" alt="Фотография" />
        <figcaption className="popup__title-image" />
      </figure>
    </section>
  );
}

export default ImagePopup;
