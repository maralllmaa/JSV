// register
// login
// logout

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