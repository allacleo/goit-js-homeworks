// Необходимо динамически создать элементы галереи по указанному шаблону.
// При клике по элементу галереи должно открываться модальное окно с полноразмерным изображением. Обязательно использовать делегирование событий и слушать клики на элементе ul.gallery.
// Модальное окно должно закрываться по клику на кнопку button[data-action="close-modal"], по клику на div.overlay или по нажатию ESC.


import galleryItems from "./gallery-items.js";


const createGallery = galleryItems => {    
const gallery = document.querySelector('.gallery');
  galleryItems.map(e => {
const text = `<li class="gallery__item">
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
        gallery.insertAdjacentHTML('beforeend', text);
  });
  return gallery;

};

const handlers = galleryItems => {
  const gallery = createGallery(galleryItems);

  const modal = document.querySelector('.lightbox');
  const overlay = document.querySelector('.lightbox___image')
  const closeModalBtn = document.querySelector('.lightbox__button[data-action="close-modal"]');
 
  gallery.addEventListener('click', openModal);
  modal.addEventListener('click', handleClick);
  closeModalBtn.addEventListener('click', handleCloseBtn);

  function handleClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      return;
    }
    const currentImage = e.target.dataset.source;
    overlay.src = currentImage;
    openModal();
  }

  

  function openModal() {
    modal.classList.add('.is-open');
    // modal.addEventListener('click', handleCloseOverlay)
    window.addEventListener('keydown', handleKeyPress);
  }

  function handleCloseBtn(e) {
    closeModal();
  }

  // function handleCloseOverlay(e) {
  //   if (e.target === e.currentTarget) {
  //     closeModal();
  //   }
  // }

  function handleKeyPress(e) {
    if (e.code === 'Escape') {
      closeModal();
    }
  }


function closeModal() {
modal.classList.remove('.is-open');
window.removeEventListener('keydown', handleKeyPress);
}

};
handlers(galleryItems);