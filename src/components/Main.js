import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';
import '../index.css';
import buttonAdd from '../images/button_add.svg';
import Card from './Card';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.addLike(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((items) => items.filter((c) => c._id !== card._id && c));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__disk" onClick={props.onEditAvatar}>
          <img
            src={currentUser.avatar}
            alt="Аватар"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            aria-label="Редактировать"
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          />
          <p className="profile__occupation">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        >
          <img src={buttonAdd} alt="Добавить" className="profile__add-icon" />
        </button>
      </section>

      <section className="cards">
        {cards.map((card) => (
          <Card
            key={card['_id']}
            card={card}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
