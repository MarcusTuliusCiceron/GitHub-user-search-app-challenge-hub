const themeToggle = document.querySelector('.theme__toggle')
const body = document.querySelector('body')
const main = document.querySelector('main')
const searchBar = document.querySelector('.search__bar')

function themeSwitch(){
    console.log('click')
    if (themeToggle.textContent == "Dark"){
        themeToggle.textContent = "Light"
    }
    else{
        themeToggle.textContent = "Dark"
    }
    body.classList.toggle('dark')
    main.classList.toggle('dark')
    themeToggle.classList.toggle('dark')
    searchBar.classList.toggle('dark')
}

themeToggle.addEventListener('click', themeSwitch)