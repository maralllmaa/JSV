const submit = document.querySelector('#submit');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const password = document.querySelector('#password');

submit.addEventListener('click', async e => {
    e.preventDefault();

    if(username.value.trim() !== '' || email.value.trim() !== '' || number.value.trim() !== '' || password.value.trim() !== ''){

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
            swal({
                icon: 'success',
                text: result.message
            });
        } catch (error) {
            swal({
                icon: 'warning',
                text: error.message
            })
        }

        resetForm()
    } else {
        swal({
            icon: 'error',
            text: "Бүх талбаруудыг бөглөнө үү..."
        })
    }


})

function resetForm(){
    username.value = '';
    email.value = '';
    number.value = '';
    password.value = '';
}