import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const markAp = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');
const instance = basicLightbox.create(`
    <img src="#" width="800" height="600">
`, {
    onShow: (instance) => {
        console.log('open');
        window.addEventListener('keydown', onEscPress)
    },
    onClose: (instance) => {
        console.log('close');
        window.removeEventListener('keydown', onEscPress);
    }
});

gallery.insertAdjacentHTML('beforeend', markAp);
gallery.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }
    console.log(event.target.dataset.source);
    instance.element().querySelector('img').src = event.target.dataset.source;

instance.show()
})
function onEscPress(event) {
    console.log(event.key);
    if (event.key === 'Escape') {
        instance.close();
    }
}