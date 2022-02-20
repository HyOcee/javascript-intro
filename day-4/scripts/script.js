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

const submitForm = (e) => {
    e.preventDefault();
    form.style.display = 'none'
    document.querySelector('body').style.height = 'unset'
    let ul = document.getElementById('ul')

    const url = 'https://api.tvmaze.com/shows'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                ul.innerHTML += 
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


// document.getElementById('form').innerHTML = 
//         `<h1> Submitted!!! </h1>
//           <p>thanks for your cooperation</p>
//           <button style='width:30%; margin: 20px auto;'>Success!</button>`