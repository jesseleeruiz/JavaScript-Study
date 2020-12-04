'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const openModelButtons = document.querySelectorAll('.show-modal'); // Selects all the elements w/ that class

for (let i = 0; i < openModalButtons.length; i++)
  console.log(openModelButtons[i].textContent);
