// Пришло время начать создавать интерфейс для нашего приложения заметок, начнем с динамического создания коллекции заметок. Хорошая новость - верстка уже готова, тебе необходимо только написать JS-код. 🎉

// Используй заготовку проекта из этой ветки репозитория, обязательно прочитай инструкцию.

// Перенеси свой класс Notepad, сделай экземпляр передав ему начальные заметки и используй геттер для получения всех заметок.
// Напиши функцию createListItem(note) для создания одного элемента списка ul.note-list c карточкой заметки. Создавай DOM-узлы с помощью document.createElement.
// Напиши функцию renderNoteList(listRef, notes), которая получает ссылку на DOM-узел списка ul.note-list и массив объектов заметок, вызывает createListItem(note) столько раз, сколько объектов в массиве, после чего добавляет все карточки в список.
// Элемент списка имеет следующий вид.

// Используй карты имен иконок и действий заметки для подстановки констант.
// Обрати внимание на data-атрибут data-id у элемента списка, туда записывай идентификатор заметки, это понадобится в следующих работах.
// Разметка элемента списка довольно большая, поэтому есть смысл не писать все в одной функции createListItem (будет простыня кода), а вынести создание отдельных частей карточки и просто вызывать их в createListItem, к примеру:

// Для div.note__content можно написать функцию createNoteContent.
// Для footer.note__footer можно написать функцию createNoteFooter.
// Так как button.action повторяется много раз, можно написать функцию createActionButton.

'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

class Notepad {
    constructor(notes = []) {
    this._notes = notes;
    }

get notes() {
    return this._notes;
}

findNoteById = function(id) {
    for (const note of this._notes) {
      if (note.id === id) {
        return note;
      }
    }
  }
  
  saveNote = function(note) {
    this._notes.push(note);
    return note;
  };
  
  deleteNote = function(id) {
  for (let i = 0; i < this._notes.length; i += 1) {
    if (this._notes.splice(i, 1));
  }
  };
  
  updateNoteContent = function(id, updatedContent) {
    return Object.assign(this.findNoteById(id), updatedContent);
  }
  
  updateNotePriority = function(id) {
    for (const note of this._notes) {
      if (note.id === id) {
        note.priority = Notepad.Priority;
        return note;
      }
    }
  }
  
  filterNotesByQuery = function(query) {
  //     /*
  //      * Фильтрует массив заметок по подстроке query.
  //      * Если значение query есть в заголовке или теле заметки - она подходит
  //      *
  //      * Принимает: подстроку для поиска в title и body заметки
  //      * Возвращает: новый массив заметок, контент которых содержит подстроку
  //      */
  const notesWithQuery = [];
  
  for (const note of this._notes) {
    if (note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query)) {
    notesWithQuery.push(note);
        }
    }
   return notesWithQuery;
  }
  
  filterNotesByPriority = function(priority) {
  //     /*
  //      * Фильтрует массив заметок по значению приоритета
  //      * Если значение priority совпадает с приоритетом заметки - она подходит
  //      *
  //      * Принимает: приоритет для поиска в свойстве priority заметки
  //      * Возвращает: новый массив заметок с подходящим приоритетом
  //      */
      const prioritized = [];
      for (const note of this._notes) {
        if (note.priority === priority) {
          prioritized.push(note);
        }
      }
      return prioritized;
    }
    static getPriorityName(priorityId) {
        return Notepad.PRIORITIES[priorityId].name;
      }
  };

  Notepad.PRIORITIES = {
    0: { id: 0, value: 0, name: 'Low' },
    1: { id: 1, value: 1, name: 'Normal' },
    2: { id: 2, value: 2, name: 'High' },
  };

  const notepad = new Notepad(initialNotes);

console.log(notepad.notes);

const refs = {
  noteList: document.querySelector('.note-list'),
};

const createNoteContent = (title, body) => {
  const div = document.createElement('div');
  div.classList = 'note__content';

  const titleText = document.createElement('h2');
  titleText.classList = 'note__title';
  titleText.textContent = title;

  const bodyText = document.createElement('p');
  bodyText.classList = 'note__body';
  bodyText.textContent = body;

  div.append(titleText, bodyText);

  return div;
};

const createNoteFooter = priority => {
  const footer = document.createElement('footer');
  footer.classList = 'note__footer';

  const firstSection = document.createElement('section');
  firstSection.classList = 'note__section';

  const secondSection = document.createElement('section');
  secondSection.classList = 'note__section';

  const spanPriority = document.createElement('span');
  spanPriority.classList = 'note__priority';
  spanPriority.textContent = `Priority: ${Notepad.getPriorityName(priority)}`;

  firstSection.append(
    createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN),
    createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP),
    spanPriority
  );
  secondSection.append(
    createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT),
    createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE)
  );
  footer.append(firstSection, secondSection);

  return footer;
};

const createActionButton = (action, text) => {
  const button = document.createElement('button');
  button.classList = 'action';
  button.dataset.action = action;

  const i = document.createElement('i');
  i.classList.add('material-icons');
  i.classList.add('action__icon');
  i.textContent = text;

  button.appendChild(i);

  return button;
};

const createListItem = ({ id, title, body, priority }) => {
  const listItem = document.createElement('li');
  listItem.classList = 'note-list__item';
  listItem.dataset.id = id;

  const div = document.createElement('div');
  div.classList = 'note';

  div.append(createNoteContent(title, body), createNoteFooter(priority));
  listItem.appendChild(div);

  return listItem;
};

const renderNoteList = (listRef, notes) => {
  const listItems = notes.map(item => createListItem(item));

  listRef.innerHTML = '';
  listRef.append(...listItems);
};

renderNoteList(refs.noteList, initialNotes);


  