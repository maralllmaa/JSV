const username = document.querySelector('#username');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const dob = document.querySelector('#dob');
const submit = document.querySelector('#submit');

const inputs = document.querySelectorAll('.input');

let isValidForm;
let users = [];

class User {
    constructor(username, email, number, password, dob){
        this.username = username;
        this.email = email;
        this.number = number;
        this.password = password;
        this.dob = dob;
        this.posts = [];
    }
}

// MVS - Model , View, Controller

submit.addEventListener('click', e => {
    e.preventDefault();
    isValidForm = true;
    inputs.forEach(input => {
        if(input.value === ''){
            isValidForm = false
        }
    });
    
    if(isValidForm){
        if(password.value !== passwordConfirm.value){
            swal({
                icon: 'error',
                title: 'Алдаа гарлаа',
                text: 'Хоосон байж болохгүй'
            })
            return
        }
        const user = new User(username.value, email.value, number.value, password.value, dob.value);
        users.push(user);

        localStorage.setItem('users', JSON.stringify(users))
        resetForm()
        // location.href = './login.html'
    } else {
        swal({
            icon: 'error',
            title: 'Алдаа гарлаа',
            text: 'Хоосон байж болохгүй'
        })
        return
    }
})


function resetForm(){
    username.value= '';
    email.value= '';
    number.value= null;
    dob.value = ''
    password.value= '';
    passwordConfirm.value= '';
}