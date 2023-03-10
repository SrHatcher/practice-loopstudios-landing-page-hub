const menuButton = document.querySelector('.header__button')
const navbar = document.querySelector('.header__navbar')
const headerItems = document.querySelectorAll('.header__item')

function lowerCase(){
    if(window.innerWidth >= 1000){
        console.log(window.innerWidth)
        headerItems.forEach((element)=>{
            let lowerText = element.innerText.toLowerCase()
            let correctText = lowerText.charAt(0).toUpperCase() + lowerText.slice(1)

            element.innerHTML = `<a href="#">${correctText}<span class='line'></span></a>`
        })
    }else{
        headerItems.forEach((element)=>{
            let upperCase = element.innerText.toUpperCase()
            
            element.innerHTML = `<a href="#">${upperCase}<span class='line'></span></a>`
        })
    }
}

function openMenu(){
    navbar.classList.toggle('header__navbar--active')
    menuButton.classList.toggle('header__button--active')
}

window.addEventListener('resize', lowerCase)

menuButton.addEventListener('click', openMenu)

lowerCase()