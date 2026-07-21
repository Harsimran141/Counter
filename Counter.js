const input = document.querySelector('.count');
const Addbtn = document.querySelector('.Add');
const Decbtn = document.querySelector('.Decrement');
const Reset = document.querySelector('.restart');
let counter = 0;
Addbtn.addEventListener('click',()=>{
    counter++;
input.value = counter;
})
Decbtn.addEventListener('click',()=>{
    counter--;
    input.value = counter;
})
Reset.addEventListener('click',()=>{
    counter = "";
    input.value = counter;
})