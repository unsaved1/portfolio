const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
} )

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
})

const numb = document.querySelectorAll('.skills__dial-numb'),
      lines = document.querySelectorAll('.skills__dial-level .skills__dial-line');

numb.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
    
})