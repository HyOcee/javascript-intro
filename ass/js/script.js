let usersArray = ['ennyitan', 'jidesam', 'Torbylorbah', 'HyOcee', 'BeardedPrince']
const urlHead = 'https://api.github.com/users/'

for(let i = 0; i < usersArray.length; i++){
    let url = urlHead + usersArray[i];
    fetch(url)
    .then(response => response.json())
    .then(data => {
            caro.innerHTML += `
            <div class="flex-b column" id="u${i+1}">
            <div class="avatar senter"><img src="${data.avatar_url}" alt=""></div>
            <div class="bold-text-1">@${data.login}<i class='fas fa-angle-right'></i></div>
            <div class="flex-b w-80">
                <div class="flex-b column">
                    <div class="bold-text-2">${data.following}</div>
                    <div class="gr">Following</div>
                </div>
                <div class="flex-b column">
                    <div class="bold-text-2">${data.followers}</div>
                    <div class="gr">Followers</div>
                </div>
                <div class="flex-b column">
                    <div class="bold-text-2">${data.public_repos}</div>
                    <div class="gr">Public Repos</div>
                </div>
            </div>
            <div class="flex-b w-80">
                <button class="follow">Follow</button>
                <button class="icon"><i class='fab fa-twitter'></i></button>
                <button class="icon"><i class='fas fa-angle-down'></i></button>
            </div>
            <div>${data.location}</div>
            <div class="bio">${data.bio}</div>
        </div>
        `
    })
}

let caro = document.querySelector('.carousel')
let i = 0;

const slide = (n) => {
    let divs = document.querySelectorAll('.carousel > div');
    divs[i].style.display = 'none';
    i = i + n;
    i === -1? i = divs.length - 1: i === divs.length? i = 0: i = i;
    divs[i].style.display = 'flex'
}