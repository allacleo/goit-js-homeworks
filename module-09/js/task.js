import galleryItems from './gallery-items.js';

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

const gallery = createGallery(galleryItems);
const modal = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox___image');
const galleryOverlay = document.querySelector('.lightbox__content');
const closeBtn = document.querySelector('.lightbox__button');

gallery.addEventListener('click', handleOpenModal);
galleryOverlay.addEventListener('click', handleCloseModal);
closeBtn.addEventListener('click', handleCloseBtn);


function handleOpenModal(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  lightboxImage.setAttribute('src', e.target.dataset.source);
  lightboxImage.setAttribute('alt', e.target.getAttribute('alt'));
  openModal();
  
}

function openModal() {
  modal.classList.add('is-open');
  window.addEventListener('keydown', handleKeyPress);
}

function handleCloseModal(e) {
if (e.target !== e.currentTarget) {
return;
 }
 modal.classList.remove('is-open');
 lightboxImage.removeAttribute('src');
}

function handleCloseBtn() {
  modal.classList.remove('is-open');
  lightboxImage.removeAttribute('src');
  window.removeEventListener('keydown', handleKeyPress);
}

function handleKeyPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  handleCloseBtn();
}
