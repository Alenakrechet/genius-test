const modal = document.querySelector('.backdrop');
const modalBynOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBynOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);