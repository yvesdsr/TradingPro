// script.js

const btnInscription = document.getElementById('btn-inscription');
const modal = document.getElementById('inscription-modal');
const closeModal = document.getElementById('close-modal');

btnInscription.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});