'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//in order to respond to a click event we will use event handler/listner function

// ***** if you want to use a particular function in multiple times event listners then u can create a seperate function and use it by passing argument (to follow DRY rule)*********
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const OpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', OpenModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

//  keyboard events are global events as it do not happen on one element only

document.addEventListener('keydown', function (e) {
  //   console.log('a key was pressed');
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
