'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const openModalButtons = document.querySelectorAll('.show-modal'); // Selects all the elements w/ that class

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < openModalButtons.length; i++)
  openModalButtons[i].addEventListener('click', openModal);

closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
