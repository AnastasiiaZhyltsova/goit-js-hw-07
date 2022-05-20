import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');   


const createGalleryItems = galleryItems.map((galleryItem)=> 
    `<div class="gallery__item">
       <a class="gallery__link" href="${galleryItem.original}">
          <img
           class="gallery__image"
           src="${galleryItem.preview}" 
           url="${galleryItem.description}"
           data-source="${galleryItem.original}"
        />
       </a>
    </div>`
).join('');
gallery.insertAdjacentHTML("beforeend", createGalleryItems);
// console.log(refs.galleryList);

gallery.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault();
     console.log(event.target);
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const imgClick = event.target.dataset.source;
   const instance = basicLightbox.create(`
    <img src="${imgClick}" width="800" height="600">
    `);

    instance.show();

    if (basicLightbox.visible) {
        window.addEventListener("keydown", onImgCloseEscpe);
        function onImgCloseEscpe(event) {
        event.preventDefault();
        const key = event.code;
            if (key === 'Escape') {
                instance.close();
            }
        }

    }
};
