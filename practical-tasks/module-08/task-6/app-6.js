/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
const div = document.querySelector('.movie');

const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'rate movie';
div.appendChild(button);

const rateButton = {
  button: 'rate movie',
};

const movieCard = {
  image: 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
  imageDesc: 'movie image',
  title: 'The Godfather',
  description:
    'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
  date: 'Released: 1972-03-14',
  rating: 'Rating: 8.6',
};

const createMovieCard = ({
  image,
  imageDesc,
  title,
  description,
  date,
  rating,
}) => {
  const card = document.createElement('div');
  card.classList = 'movie';

  const cardImg = document.createElement('img');
  cardImg.classList = 'movie__image';
  cardImg.setAttribute('src', image);
  cardImg.setAttribute('alt', imageDesc);

  const cardBody = document.createElement('div');
  cardBody.classList = 'movie__body';

  const cardTitle = document.createElement('h2');
  cardTitle.classList = 'movie__title';
  cardTitle.textContent = title;

  const cardDescription = document.createElement('p');
  cardDescription.classList = 'movie__description';
  cardDescription.textContent = description;

  const cardDate = document.createElement('p');
  cardDate.classList = 'movie__date';
  cardDate.textContent = date;

  const cardRating = document.createElement('p');
  cardRating.classList = 'movie__rating';
  cardRating.textContent = rating;

  const cardButton = document.createElement('button');
  cardButton.classList = 'button';
  cardButton.textContent = rateButton.button;

  cardBody.append(cardTitle, cardDescription, cardDate, cardRating);
  card.append(cardImg, cardBody, cardButton);

  return card;
};

const body = document.querySelector('body');

body.appendChild(createMovieCard(movieCard));