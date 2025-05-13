const in1=document.querySelector('.inp1')
const btn1=document.querySelector('.btn1')
const p1=document.querySelector('.p1')
const x=document.querySelector('.x')
x.addEventListener('click',function(){
    window.location="index.html"
})
let arr = JSON.parse(localStorage.getItem('marya')) || [];
const user = in1.value;

const box=document.querySelector('.box')
btn1.addEventListener('click',function(){
    const text=in1.value.trim()
    if(text!=="" || text!==" "){
        arr.push({ user: 'Me', text })
        localStorage.setItem('marya',JSON.stringify(arr))
    }
     in1.value=""
    start()
})

function start(){
    box.innerHTML=""
    for (let i = 0; i < arr.length; i++) {
        const div=document.createElement('div')
        div.classList.add(arr[i].user === 'Me' ? 'stu' : 'tea');
        div.innerHTML = `<div class="l"><p class="p2" >${arr[i].user}:${arr[i].text}</p></div>`;
        box.appendChild(div)
    }
    console.log(user)
}
start()

