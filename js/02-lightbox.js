import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');   


const createGalleryItems = galleryItems.map((galleryItem)=> 
    `
         <a class="gallery__item" href="${galleryItem.original}">
              <img
              class="gallery__image"
              src="${galleryItem.preview}" 
              alt="${galleryItem.description}"
              data-source="${galleryItem.original}"
        />
       </a>
   `
).join('');

gallery.insertAdjacentHTML("beforeend", createGalleryItems);

    var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt" , captionDelay: 250});

gallery.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault();
    // console.log(event.target);
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
}