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



import {User} from './model.js';
import { register } from './controller.js'

// let obj = {
//     ner: "narada",
//     nas: 1345
// }

// let post = new model.Post()

// let arr = [1,2,3,4,5]

// let {ner, nas} = obj;

// let [a, b, c, , p] = arr

// console.log(user)
// console.log(nas)
// console.log(post)

window.addEventListener('load', () => {
    if(localStorage['users']){
        users = JSON.parse(localStorage['users'])
    }
})

submit.addEventListener('click', e => {
    e.preventDefault();
    register(users, inputs, User,isValidForm, resetForm)
})


function resetForm(){
    username.value= '';
    email.value= '';
    number.value= null;
    dob.value = ''
    password.value= '';
    passwordConfirm.value= '';
}

// https://github.com/Taichir0923/JSV


// Module

// IIFE - Immedialtely  Invoked Function Expression

// {
//     x: x
// }