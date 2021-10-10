// register
// login
// logout

import { Post } from './model.js';

export const register = (users , inputs, User ,isValidForm, callback) => {

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
        console.log(user)
        localStorage.setItem('users', JSON.stringify(users))
        callback();
        // location.href = './login.html'
    } else {
        swal({
            icon: 'error',
            title: 'Алдаа гарлаа',
            text: 'Хоосон байж болохгүй'
        })
        return
    }
}

export const loginController = (users, email, password) => {
    const currentUser = users.find(user => user.email === email);
    if(!currentUser){
        swal({
            icon: 'error',
            text: 'Имэйл эсвэл нууц үг буруу байна...'
        })
    } else {
        if(currentUser.password === password){
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            location.href = './account.html';
        } else {
            swal({
                icon: 'error',
                text: 'Имэйл эсвэл нууц үг буруу байна...'
            })
        }
    }
}

export const createPost = (userId, title, content) => {
    const post = new Post();
    console.log(post)
}

// 