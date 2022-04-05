//https://parceljs.org/recipes/image/
//https://parceljs.org/languages/javascript/#url-dependencies

const imageUrl = new URL(
    'bild.jpg', import.meta.url
  );
document.querySelector('img').src = imageUrl.href;

console.log(imageUrl, import.meta.url);