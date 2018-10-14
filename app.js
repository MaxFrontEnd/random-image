

const photo = new Photo;
const ui = new UI;

document.addEventListener('DOMContentLoaded', photoImage);
button = document.querySelector('.btn');
button.addEventListener('click', photoImage);

function photoImage() {

  photo.getPhoto()
  .then(src => {
    console.log(src.url)
    ui.addImage(src.url);
  });
}
