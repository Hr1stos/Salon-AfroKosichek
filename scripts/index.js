const clickOpen = document.querySelector('.header__burger');
const seidbarOpen = document.querySelector('.header__seidbar');
const clickClose = document.querySelector('.header__seidbar-button');
const pageOpen = document.querySelector('.header__seidbar-page');

function openPageContent(){
  pageOpen.classList.add('header__seidbar-page_open');
}

clickOpen.addEventListener('click', () =>{
    seidbarOpen.classList.add('header__seidbar_open');
    setTimeout(openPageContent,500);
  })

clickClose.addEventListener('click', () =>{
    seidbarOpen.classList.remove('header__seidbar_open');
    pageOpen.classList.remove('header__seidbar-page_open');
})