import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");
const galleryItemsRef = galleryItems;
const markup = createMarkup(galleryItemsRef);

galleryRef.innerHTML = markup;

function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
      `;
    })
    .join("");
}

galleryRef.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const selectedImgSrc = e.target.dataset.source;
  const selectedImgAlt = e.target.alt;
  showModal(selectedImgSrc, selectedImgAlt);
});

function showModal(imageSrc, imageAlt) {
  const modal = basicLightbox.create(`
    <img src="${imageSrc}" alt="${imageAlt}" width="800" height="600">
  `);
  modal.show();
}

const lightbox = new SimpleLightbox(".gallery a", {});
