const showAllRecipes = () => {
  const smallGallery = document.querySelector('.modal');
  smallGallery.style.display = "block";
};

const switchButton = document.querySelector('.recipes__discover');
switchButton.addEventListener('click', () => {
  showAllRecipes();
});


/* Single Modal */

const fraiseItem = {
  title: 'Fraise - Yaourt',
  img: 'img/img-content/small-fraises.png',
  description: 'Subtile mélange entre un arôme gout fraise et des perles au gout yaourt'
};

const speculosItem = {
  title: 'Daily Balance',
  img: 'img/img-content/small-speculos.jpg',
  description: 'Venez découvrir le mélange du jour'
};

const mangueLitchiItem = {
  title: 'Mangue - Litchi',
  img: 'img/img-content/small-mangue.jpg',
  description: 'Si l\'envie d\'éxotisme vous prends, optez pour ce thé qui vous fera voyagez le temps d\'un instant'
};

const mangueCitronItem = {
  title : 'Mangue - Citron',
  img : 'img/img-content/small-mangue-citron.jpg',
  description: 'Mélangez la douceur de la mangue avec un petit zeste de citron pour vous tonifier le corps'
};

const oreosItem = {
  title: 'Oreos',
  img: 'img/img-content/small-oreos.png',
  description: 'Sucombez pour un mélange entre votre petit péché mignon et soigneusement mélangé au thé de votre choix'
};

const secondSpeculosItem = {
  title: 'Speculos',
  img : 'img/img-content/speculoos.png',
  description: 'Un mélange savoureux entre le croquant du biscuit et la douceur du thé'
};

const itemMap = {
  fraises: fraiseItem,
  speculos: speculosItem,
  mangue: mangueLitchiItem,
  'mangue-citron': mangueCitronItem,
  oreos: oreosItem,
  speculoos: secondSpeculosItem
};

const allItems = document.querySelectorAll('.recipes__item');
const modalValues = '';
window.onload = function () {
    let i = 0;
    for (i; i < allItems.length; i++) {
      const el = allItems[i];
      el.addEventListener('click', event => {
        const smallModal = document.querySelector('.small-modal');
        const modalValues = itemMap[event.target.offsetParent.classList[1].toString()];
        const modalDescription = document.querySelector('.small-modal__description');
        const modalImg = document.querySelector('.small-modal__picture');
        const modalTitle = document.querySelector('.small-modal__title');
        modalTitle.innerHTML = modalValues.title;
        modalDescription.innerHTML =  modalValues.description;
        modalImg.src = modalValues.img;
        smallModal.style.display = "block";
      })
    }
};
/* */