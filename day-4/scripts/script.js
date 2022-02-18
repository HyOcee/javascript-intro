let email = document.getElementById('email')
let password = document.getElementById('password')
let button = document.getElementById('button')
let form = document.getElementById('form')

const check = () => {
    if(email.value && password.value){
        document.getElementById('button').removeAttribute('disabled')
    } else {
        document.getElementById('button').setAttribute('disabled','')
    }
}

const submit = () => {
    form.style.display = 'none';
    document.querySelector('body').style.height = 'unset'
    let ul = document.getElementById('ul')

    const url = 'https://api.tvmaze.com/shows'

    fetch(url)
        .then(ffff => ffff.json())
        .then(sssss => {
            sssss.forEach(element => {
                ul.innerHTML = ul.innerHTML + 
                    `<li>
                        <div class="text">${element.name}</div>
                        <img src="${element.image.medium}">
                    </li>
                `
                ul.style.display = 'grid'
        });
    })
}

let formData = {
    email: email.value,
    password: password.value
}

let clone = {}
for (item in formData) {
    clone[item] = formData[item]
    console.log(clone)
}