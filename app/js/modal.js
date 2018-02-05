const closeModal = () => {
  const modalContainer = document.querySelector('.modal');
  modalContainer.style.display = "none";
};

const closeIcon = document.querySelector('.modal__close');

closeIcon.addEventListener('click', () => {
  closeModal();
});


