const submit = document.querySelector('#submit');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const password = document.querySelector('#password');

submit.addEventListener('click', e => {
    e.preventDefault();
    const formData = {
        username: username.value,
        email: email.value,
        number: number.value,
        password: password.value
    }
    
    fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(result => {
        alert(result.message)
    })
})