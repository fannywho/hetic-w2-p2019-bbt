const closeModal = () => {
  const modalContainer = document.querySelector('.modal');
  modalContainer.style.display = "none";
  document.body.style.overflow = "inherit";
};

const closeSmallModal = () => {
  const smallModalContainer = document.querySelector('.small-modal');
  smallModalContainer.style.display = "none";
  document.body.style.overflow = "inherit";
};

const closeIcon = document.querySelector('.modal__close');
const smallCloseIcon = document.querySelector('.small-modal__close');

closeIcon.addEventListener('click', () => {
  closeModal();
});

smallCloseIcon.addEventListener('click', () => {
  closeSmallModal();
});
