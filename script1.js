const nums = document.querySelectorAll('.nums');
const input = document.querySelector('#input')

let isPressed = false;

nums.forEach(num => {
    num.onclick = function(){
        getValue(num.innerText)
    }
});

// 

function getValue(num){
    if(num !== '='){
        if(
            input.value[input.value.length - 1] === num && (
                num === '+' || 
                num === '-' || 
                num === '*' || 
                num === '/' || 
                num === '.'
            )
        ){
            input.value = input.value.slice(0, -1);
            input.value += num
        } else if (
            (num === '+' && (
                input.value[input.value.length - 1] === '-' ||
                input.value[input.value.length - 1] === '/' ||
                input.value[input.value.length - 1] === '*' 
            )) || 
            (num === '-' && (
                input.value[input.value.length - 1] === '+' ||
                input.value[input.value.length - 1] === '/' ||
                input.value[input.value.length - 1] === '*' 
            )) || 
            (num === '*' && (
                input.value[input.value.length - 1] === '-' ||
                input.value[input.value.length - 1] === '/' ||
                input.value[input.value.length - 1] === '+' 
            )) || 
            (num === '/' && (
                input.value[input.value.length - 1] === '-' ||
                input.value[input.value.length - 1] === '+' ||
                input.value[input.value.length - 1] === '*' 
            ))
        ){
            input.value = input.value.slice(0, -1);
            input.value += num
        } else {
            if(!isPressed){
                input.value += num
            } else {
                input.value = '';
                isPressed = false;
                input.value += num;
            }
        }
    } else {
        input.value = eval(input.value);
        isPressed = true
    }
}

// M+