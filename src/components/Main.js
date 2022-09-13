import React from 'react';
import '../index.css';
import buttonAdd from '../images/button_add.svg';

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState(false);
  const [userName, setUserName] = React.useState(false);
  const [userDescription, setUserDescription] = React.useState(false);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__disk" onClick={props.onEditAvatar}>
          <img src="#" alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            aria-label="Редактировать"
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          />
          <p className="profile__occupation">Исследователь океана</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        >
          <img src={buttonAdd} alt="Добавить" className="profile__add-icon" />
        </button>
      </section>
      <section className="cards"></section>
    </main>
  );
}

export default Main;
