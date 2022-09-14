import React from 'react';
import '../index.css';
import buttonAdd from '../images/button_add.svg';
import { api } from '../utils/Api';

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState({});
  const [userName, setUserName] = React.useState({});
  const [userDescription, setUserDescription] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserAvatar(data);
        setUserName(data);
        setUserDescription(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__disk" onClick={props.onEditAvatar}>
          <img
            src="#"
            alt="Аватар"
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar.avatar})` }}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName.name}</h1>
          <button
            aria-label="Редактировать"
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          />
          <p className="profile__occupation">{userDescription.about}</p>
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
