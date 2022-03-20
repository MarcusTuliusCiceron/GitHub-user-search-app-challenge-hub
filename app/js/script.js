const themeToggle = document.querySelector('.theme__toggle')
const body = document.querySelector('body')
const main = document.querySelector('main')
const searchBar = document.querySelector('.search__bar')
const searchBarInput = document.querySelector('.search__bar__input')
const searchBarButton = document.querySelector('.search__bar__button')

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



function getUser(username){
    return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
        
        if (response.message == "Not Found"){
            console.log(response.message)
            return
        }
        console.log(response)
        return response;
    })
}


themeToggle.addEventListener('click', themeSwitch)

searchBarButton.addEventListener('click', ()=>{
    getUser(searchBarInput.value)
})


