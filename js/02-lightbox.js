import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const stringItemEls = galleryItems.map(({preview, original, description}) => `<li class="gallery__card">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</li>`).join("");
console.log(stringItemEls);
galleryList.insertAdjacentHTML("beforeend", stringItemEls);

const lightbox = new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    scrollZoom: false, 
});
