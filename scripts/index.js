const clickOpen = document.querySelector('.header__button-burger');
const seidbarOpen = document.querySelector('.header__seidbar');
const clickClose = document.querySelector('.header__seidbar-button');


clickOpen.addEventListener('click', () =>{
    seidbarOpen.classList.add('header__seidbar_open');
  })

clickClose.addEventListener('click', () =>{
    seidbarOpen.classList.remove('header__seidbar_open');
})