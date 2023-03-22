const clickOpen = document.querySelector('.header__button-burger');
const seidbarOpen = document.querySelector('.header__seidbar');



clickOpen.addEventListener('click', () =>{
    seidbarOpen.classList.add('header__seidbar_open');
  })