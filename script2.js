const in2=document.querySelector('.inp2')
const btn2=document.querySelector('.btn2')
const p2=document.querySelector('.p2')
const box=document.querySelector('.box')
const in3=document.querySelector('.inp3')
const btn3=document.querySelector('.btn3')
const p3=document.querySelector('.p2')
const box3=document.querySelector('.box3')
const inp4=document.querySelector('.inp4')
const btn4=document.querySelector('.btn4')
const p4=document.querySelector('.p2')
const box4=document.querySelector('.box4')
let arr = JSON.parse(localStorage.getItem('anna')) || [];
let arr2 = JSON.parse(localStorage.getItem('marya')) || [];
let arr3 = JSON.parse(localStorage.getItem('ivan')) || [];
in2.value=""
in3.value=""
inp4.value=""
function start(){ 
    box.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement('div');
        div.classList.add(arr[i].user === 'Mentor' ? 'tea' : 'stu');
        div.innerHTML = `<div class="l"><p class="p2">${arr[i].user}: ${arr[i].text}</p></div>`;
        box.appendChild(div);
    }

    // Marya's messages
    box3.innerHTML = "";
    for (let i = 0; i < arr2.length; i++) {
        const div = document.createElement('div');
        div.classList.add(arr2[i].user === 'Mentor' ? 'tea' : 'stu');
        div.innerHTML = `<div class="l"><p class="p2">${arr2[i].user}: ${arr2[i].text}</p></div>`;
        box3.appendChild(div);
    }

    // Ivan's messages
    box4.innerHTML = "";
    for (let i = 0; i < arr3.length; i++) {
        const div = document.createElement('div');
        div.classList.add(arr3[i].user === 'Mentor' ? 'tea' : 'stu');
        div.innerHTML = `<div class="l"><p class="p2">${arr3[i].user}: ${arr3[i].text}</p></div>`;
        box4.appendChild(div);
    }
}
start()
btn2.addEventListener('click',function(){
    const text=in2.value.trim()
    if(text!=="" || text!==" "){
        arr.push({  user: 'Mentor', text })
        localStorage.setItem('anna',JSON.stringify(arr))
    }
     in2.value=""
    start()

})

btn3.addEventListener('click',function(){
    const text=in3.value.trim()
    if(text!=="" || text!==" "){
        arr2.push({ user: 'Mentor', text })
        localStorage.setItem('marya',JSON.stringify(arr2))
    }
     in3.value=""
    start()

})

btn4.addEventListener('click',function(){
    const text=inp4.value.trim()
    if(text!=="" || text!==" "){
        arr3.push({ user: 'Mentor', text })
        localStorage.setItem('ivan',JSON.stringify(arr3))
    }
     inp4.value=""
    start()

})
