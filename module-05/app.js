'use strict';

const Notepad = function Notepad(notes = []) {
this.notes = notes;
};

this.getNotes = function() {
    /*
     * Принимает: ничего
     * Возвращает: все заметки, значение свойства notes
     */
return this.notes;
};

  this.findNoteById = function(id) {
    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
     */
    for (const note of this.notes) {
      if (note.id === id) {
        return note;
      }
    }
  };

  this.saveNote = function(note) {
    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */
    this.notes.push(note);
    return note;
  };

  this.deleteNote = function(id) {
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].id === id) {
        this.notes.splice(i, 1);
      }
    }
  };

  this.updateNoteContent = function(id, updatedContent) {
    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */
    
    const updateNote = {...this.findNoteById(id), ...updatedContent};
    this.deleteNote(id);
    this.saveNote(updateNote);
    return updateNote;

  };

    this.updateNotePriority= function(id) {
    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */
    for (const note of this.notes) {
      if (note.id === id) {
        note.priority = Notepad.Priority;
        return note;
      }
    }
  },

    this.filterNotesByQuery = function(query) {
    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     *
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */
    const notesWithQuery = [];

    for (const note of this.notes) {
      if (note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query)) {
        notesWithQuery.push(note);
      }
    }
    return notesWithQuery;
  },

    this.filterNotesByPriority = function(priority) {
    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадает с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */
    const prioritized = [];
    for (const note of this.notes) {
      if (note.priority === priority) {
        prioritized.push(note);
      }
    }
    return prioritized;
  };

  Notepad.Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };


  const initialNotes = [
    {
      id: 'id-1',
      title: 'JavaScript essentials',
      body:
        'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
      priority: Notepad.Priority.HIGH,
    },
    {
      id: 'id-2',
      title: 'Refresh HTML and CSS',
      body:
        'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
      priority: Notepad.Priority.NORMAL,
    },
  ];
  
  const notepad = new Notepad(initialNotes);
  
  /*
   * Смотрю что у меня в заметках после инициализации
   */
  console.log('Все текущие заметки: ', notepad.getNotes());
  
  /*
   * Добавляю еще 2 заметки и смотрю что получилось
   */
  notepad.saveNote({
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Notepad.Priority.NORMAL,
  });
  
  notepad.saveNote({
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Notepad.Priority.LOW,
  });
  
  console.log('Все текущие заметки: ', notepad.getNotes());
  
  /*
   * Зима уже близко, пора поднять приоритет на покупку одежды
   */
  notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);
  
  console.log(
    'Заметки после обновления приоритета для id-4: ',
    notepad.getNotes(),
  );
  
  /*
   * Решил что фреймворки отложу немного, понижаю приоритет
   */
  notepad.updateNotePriority('id-3', Notepad.Priority.LOW);
  
  console.log(
    'Заметки после обновления приоритета для id-3: ',
    notepad.getNotes(),
  );
  
  /*
   * Решил отфильтровать заметки по слову html
   */
  console.log(
    'Отфильтровали заметки по ключевому слову "html": ',
    notepad.filterNotesByQuery('html'),
  );
  
  /*
   * Решил отфильтровать заметки по слову javascript
   */
  console.log(
    'Отфильтровали заметки по ключевому слову "javascript": ',
    notepad.filterNotesByQuery('javascript'),
  );
  
  /*
   * Хочу посмотреть только заметки с нормальным приоритетом
   */
  console.log(
    'Отфильтровали заметки по нормальному приоритету: ',
    notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
  );
  
  /*
   * Обновим контент заметки с id-3
   */
  notepad.updateNoteContent('id-3', {
    title: 'Get comfy with React.js or Vue.js',
  });
  
  console.log(
    'Заметки после обновления контента заметки с id-3: ',
    notepad.getNotes(),
  );
  
  /*
   * Повторил HTML и CSS, удаляю запись c id-2
   */
  notepad.deleteNote('id-2');
  console.log('Заметки после удаления с id -2: ', notepad.getNotes());