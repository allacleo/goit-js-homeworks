// Необходимо динамически создать элементы галереи по указанному шаблону.
// При клике по элементу галереи должно открываться модальное окно с полноразмерным изображением. Обязательно использовать делегирование событий и слушать клики на элементе ul.gallery.
// Модальное окно должно закрываться по клику на кнопку button[data-action="close-modal"], по клику на div.overlay или по нажатию ESC.


import galleryItems from "./gallery-items.js";


const createGallery = galleryItems => {    
const gallery = document.querySelector('.gallery');
galleryItems.map(e => {
const list = `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${e.original}"
        >
          <img
            class="gallery__image"
            src="${e.preview}"
            data-source="${e.original}"
            alt="${e.description}"
          />
      
          <span class="gallery__icon">
            <i class="material-icons">zoom_out_map</i>
          </span>
        </a>
        </li>`;
        gallery.insertAdjacentHTML('beforeend', list);
  });
  return gallery;

};


const handlers = galleryItems => {
  const gallery = createGallery(galleryItems);
  const modal = document.querySelector('.lightbox');

  const content = document.querySelector('.lightbox__content')
  const closeModalBtn = document.querySelector('.lightbox__button');
  const lightboxImage = document.querySelector('.lightbox___image');
 
  gallery.addEventListener('click', handleOpenModal);
  closeModalBtn.addEventListener('click', handleCloseBtn);
 content.addEventListener('click', handleCloseModal);
 lightboxImage.addEventListener('click', handleCloseModal);


  function handleOpenModal() {
  modal.classList.add('.is-open');
  lightboxImage.setAttribute('src', e.target.dataset.source);
  window.addEventListener('keydown', handleKeyPress);

  }



  function handleCloseModal() {
    modal.classList.remove('.is-open');
    window.removeEventListener("keydown", handleKeyPress);
    }



  function handleCloseBtn() {
    modal.classList.remove('is-open');
    window.removeEventListener('keydown', handleKeyPress);
  }

  function handleKeyPress(e) {
    if (e.code !== 'Escape') {
      return;
    }
    handleCloseModal();
  }



};
  handlers(galleryItems);


