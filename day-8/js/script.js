let name = document.querySelector('#name')
let followers = document.querySelector('#followers')
let address = document.querySelector('#address')
let hobby = document.querySelector('#hobby')

let btn = document.querySelector('#btn')
let carousel = document.querySelector('.carousel')

let container = JSON.parse(localStorage.getItem('whatever')) ? JSON.parse(localStorage.getItem('whatever')) : []

btn.addEventListener('click', function (e) {
    e.preventDefault()
    if (name.value) {
        let info = {
            name: name.value,
            followers: followers.value,
            address: address.value,
            hobby: hobby.value
        }
        container.push(info)
        localStorage.setItem('whatever', JSON.stringify(container))

        carousel.innerHTML = `
        <button onclick="slide(-1)" id="leftBtn">&larr;</button>
        <button onclick="slide(1)" id="rightBtn">&rarr;</button>
        `

        name.value = ''
        let sessionData = JSON.parse(localStorage.getItem('whatever'))
        for (person of sessionData) {
            carousel.innerHTML += `
            <div class="flex-b column">
            <div class="avatar senter"><img src="../ass/driver1.svg" alt=""></div>
            <div class="bold-text-1">@${person.name}<i class='fas fa-angle-right'></i></div>
            <div class="flex-b w-80">
                <div class="flex-b column">
                    <div class="bold-text-2">${person.followers}</div>
                    <div class="gr">Following</div>
                </div>
                <div class="flex-b column">
                    <div class="bold-text-2">${person.followers}</div>
                    <div class="gr">Followers</div>
                </div>
                <div class="flex-b column">
                    <div class="bold-text-2">${person.followers}</div>
                    <div class="gr">Public Repos</div>
                </div>
            </div>
            <div class="flex-b w-80">
                <button class="follow">Follow</button>
                <button class="icon"><i class='fab fa-twitter'></i></button>
                <button class="icon"><i class='fas fa-angle-down'></i></button>
            </div>
            <div>${person.address}</div>
            <div class="bio">${person.hobby}</div>
        </div>
            `
        }
    }
    slide(1)
})

let caro = document.querySelectorAll('.carousel > div')
let i = 0;
caro.length == 0? i = 0 : caro[i].style.display = 'flex' 
const slide = (n) => {
    let divs = document.querySelectorAll('.carousel > div');
    divs[i].style.display = 'none';
    i = i + n;
    i === -1? i = divs.length - 1: i === divs.length? i = 0: i = i;
    divs[i].style.display = 'flex'
}
