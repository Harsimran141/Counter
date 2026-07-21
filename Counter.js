const input = document.querySelector('.count');
const decbtn = document.querySelector('.Decrement');
const Addbtn = document.querySelector('.Add');
const reset = document.querySelector('.restart')
let counter = 0;
Addbtn.addEventListener('click',()=>{
    counter++;
   input.value = counter;   
})
decbtn.addEventListener('click',()=>{
    counter--;
    input.value = counter;
})
reset.addEventListener('click',()=>{
    counter = 0;
    input.value = counter;
})