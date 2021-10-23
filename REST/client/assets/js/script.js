const submit = document.querySelector('#submit');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const password = document.querySelector('#password');

submit.addEventListener('click', async e => {
    e.preventDefault();
    const formData = {
        username: username.value,
        email: email.value,
        number: number.value,
        password: password.value
    }

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if(!response.ok){
            throw Error('Хэрэглэгч бүртгэхэд алдаа гарлаа...')
        }
    
        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert(error.message)
    }


})

fetch('http://localhost:3000/allUsers')
    .then(res => res.json())
    .then(result => console.log(result))