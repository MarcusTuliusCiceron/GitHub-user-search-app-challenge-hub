const themeToggle = document.querySelector('.theme__toggle')
const body = document.querySelector('body')
const main = document.querySelector('main')
const searchBar = document.querySelector('.search__bar')
const searchBarInput = document.querySelector('.search__bar__input')
const searchBarButton = document.querySelector('.search__bar__button')
const searchBarError = document.querySelector('.search__bar__error')
const results = document.querySelector('.results')

//profile data placeholder
const avatar = document.querySelector('.avatar')
const fullName = document.querySelector('.fullName')
const shortName = document.querySelector('.shortName')
const joinDate = document.querySelector('.joinDate')
const bio = document.querySelector('.bio')
const repos = document.querySelector('.repos')
const followers = document.querySelector('.followers')
const following = document.querySelector('.following')
const localisation = document.querySelector('.location')
const twitter = document.querySelector('.twitter')
const blog = document.querySelector('.blog')
const company = document.querySelector('.company')

const localisationLogo = document.querySelector('.text__logos__location__icon')
const twitterLogo = document.querySelector('.text__logos__twitter__icon')
const blogLogo = document.querySelector('.text__logos__blog__icon')
const companyLogo = document.querySelector('.text__logos__company__icon')

//end of profile data placeholder

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

function getDate(input){
    let year = input[0] +  input[1] + input[2] + input[3]
    let monthNum = input[5] + input[6]
    let day = input[8] + input[9]
    let month
    switch (monthNum) {
        case '01':
          month = 'Jan'
          break
        case '02':
            month = 'Feb'
            break
        case '03':
            month = 'Mar'
            break
        case '04':
            month = 'Apr'
            break
        case '05':
            month = 'May'
            break
        case '06':
            month = 'Jun'
            break
        case '07':
            month = 'Jul'
            break
        case '08':
            month = 'Aug'
            break
        case '09':
            month = 'Sep'
            break
        case '10':
            month = 'Oct'
            break
        case '11':
            month = 'Nov'
            break
        case '12':
            month = 'Dec'
            break
        default:
          console.log(`Error in input date parsing`);
            
        }
           
    return `${day} ${month} ${year}`
}

function getUser(username){
    return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
        searchBarError.classList.remove('visible');
        results.classList.remove('hidden')
        if (response.message == "Not Found"){
            console.log(response.message)
            searchBarError.classList.add('visible');
            results.classList.add('hidden')
            return
        }
        console.log(response)
    
        avatar.style.backgroundImage = `url(${response.avatar_url})`;
        fullName.innerText = `${response.name}`
        shortName.innerText = `#${response.login}`
        joinDate.innerText = `Joined at ${getDate(response.created_at)}`
        bio.innerText = `${response.bio}`
        if (response.bio = 'null'){
            bio.innerText = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.`
        }
        repos.innerText = `${response.public_repos}`
        followers.innerText = `${response.followers}`
        following.innerText = `${response.following}`

        blog.innerText = `${response.blog}`
        blog.href = `${response.blog}`
        blog.classList.remove('undefined')
        blogLogo.classList.remove('undefined')
        if (response.blog == ""){
            blog.innerHTML = `Not available`
            blog.classList.add('undefined')
            blogLogo.classList.add('undefined')
        }

        company.innerText = `${response.company}`
        company.classList.remove('undefined')
        companyLogo.classList.remove('undefined')
        if (response.company == null){
            company.innerText = `Not available`
            company.classList.add('undefined')
            companyLogo.classList.add('undefined')
        }

        localisation.innerText = `${response.location}`
        localisation.classList.remove('undefined')
        localisationLogo.classList.remove('undefined')
        if (response.location == null){
            localisation.innerText = `Not available`
            localisation.classList.add('undefined')
            localisationLogo.classList.add('undefined')
        }

        twitter.innerText = `${response.twitter_username}`
        twitter.classList.remove('undefined')
        twitterLogo.classList.remove('undefined')
        if (response.twitter_username == null){
            twitter.innerText = `Not available`
            twitter.classList.add('undefined')
            twitterLogo.classList.add('undefined')
        }
        return response;
    })
}


themeToggle.addEventListener('click', themeSwitch)

searchBarButton.addEventListener('click', ()=>{
    getUser(searchBarInput.value)
})

getUser("Octocat")


