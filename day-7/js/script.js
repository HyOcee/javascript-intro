let name = document.getElementById('name')
let age = document.getElementById('age')
let form = document.getElementById('form')

const submitForm = (text, e) => {
    e.preventDefault();

    let url = 'https://hy-mail-server.herokuapp.com/get-some'

    url = 'https://api.github.com/users/tobi'

    fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, /",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name.value,
            age: age.value
        })
    })
        .then(response => response.json())
        .then(data => {
            form.innerHTML = data + text;
        });
}