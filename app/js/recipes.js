const showAllRecipes = () => {
  const smallGallery = document.querySelector('.modal');
  smallGallery.style.display = "block";
};

const switchButton = document.querySelector('.recipes__discover');
switchButton.addEventListener('click', () => {
  showAllRecipes();
});