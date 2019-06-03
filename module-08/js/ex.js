'use strict';
import quizData from './quiz-data.js';

const form = document.querySelector('form');
form.classList.add('form');

// const button = document.querySelector('button');
// button.classList.add('button');
// button.setAttribute('type', 'submit');


const button = document.createElement('button');
button.classList.add('button');
button.setAttribute('type', 'submit');
button.textContent = "Проверить";





const createQuizTest = function(form, quizData) {
  const formTitle = document.createElement('h2');
  formTitle.classList.add('form-title');
  formTitle.textContent = quizData.title;


  
  // let sectionString = '';


  quizData.questions.map((currentArrayQustions, currentQuestions) => {
    const section = document.createElement('section');
    section.classList.add('form-sections');
    const sectionTitle = document.createElement('h3');
    sectionTitle.classList.add('form-sections__title');
    sectionTitle.textContent = `${currentQuestions + 1}. ${
      currentArrayQustions.question
    }`;
    section.append(sectionTitle);
    const sectionList = document.createElement('ol');
    sectionList.classList.add('list');
    section.append(sectionList);

    currentArrayQustions.choices.map((questions, currentAnswer) => {
      const quizLi = document.createElement('li');
      const quizLabel = document.createElement('label');
      quizLabel.textContent = questions;
      const quizInput = document.createElement('input');
      quizInput.setAttribute('type', 'radio');
      quizInput.setAttribute('name', currentQuestions);
      quizInput.setAttribute('value', currentAnswer);

      quizLabel.prepend(quizInput);
      quizLi.append(quizLabel);

      sectionList.append(quizLi);
    });



    // sectionString += section.outerHTML;
    form.append(section);


  });



  // form.insertAdjacentHTML('afterbegin', sectionString);
  form.prepend(formTitle);
  form.append(button);
};

form.addEventListener('submit', handlerSubmitForm);
const answer = document.createElement('h2');
answer.classList.add('answer');

function handlerSubmitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const questionsArray = quizData.questions;
  let countCorrectAnswer = 0;
  formData.forEach((currentAnswer, currentQuestions) => {
    if (questionsArray[currentQuestions].answer === Number(currentAnswer)) {
      countCorrectAnswer += 1;
    }
  });

  (countCorrectAnswer * 100) / questionsArray.length >= 80
    ? (answer.textContent = 'Удача')
    : (answer.textContent = 'Неудача');
  form.append(answer);
}
createQuizTest(form, quizData);
