const menuButton = document.querySelector('.header__button')
const navbar = document.querySelector('.header__navbar')

function openMenu(){
    navbar.classList.toggle('header__navbar--active')
    menuButton.classList.toggle('header__button--active')
}

menuButton.addEventListener('click', openMenu)