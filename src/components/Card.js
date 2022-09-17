import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="card">
      <div className="card__image-container">
        <img className="card__image" src={props.link} onClick={handleClick} />
        <button
          aria-label="Удалить"
          type="button"
          className="card__trash-button"
        />
      </div>
      <div className="card__container">
        <h2 className="card__title">{props.name}</h2>
        <button
          aria-label="Оценить"
          type="button"
          className="card__like-button"
        />
        <span className="card__counter-likes">{props.likes}</span>
      </div>
    </div>
  );
}

export default Card;
