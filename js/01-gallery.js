import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryList = document.querySelector(".gallery");
const stringItemEls = galleryItems.map(({preview, original, description}) => `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`).join("");
console.log(stringItemEls);
galleryList.insertAdjacentHTML("beforeend", stringItemEls);

galleryList.addEventListener('click', handleGalleryClick);
function handleGalleryClick(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG') {
        return;
    }
    const originUrl = event.target.getAttribute("data-source");
    const instance = basicLightbox.create(`
<img src="${originUrl}" width=800/>
`)

instance.show();

window.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
        instance.close();
    }
})
}