const in1=document.querySelector('.inp1')
const btn1=document.querySelector('.btn1')
const p1=document.querySelector('.p1')
const x=document.querySelector('.x')
x.addEventListener('click',function(){
    window.location="index.html"
})
let arr = JSON.parse(localStorage.getItem('ivan')) || [];
in1.value=""
const box=document.querySelector('.box')
btn1.addEventListener('click',function(){
    const text=in1.value.trim()
    if(text!=="" || text!==" "){
        arr.push({ user: 'Me', text })
        localStorage.setItem('ivan',JSON.stringify(arr))
    }
     in1.value=""
    start()
})

function start(){
    box.innerHTML=""
    for (let i = 0; i < arr.length; i++) {
        const div=document.createElement('div')
        div.classList.add(arr[i].user === 'Me' ? 'stu' : 'tea');
        if(arr[i].user === 'Mentor'){
            div.innerHTML = `
            <div class="photo">
           </div>
           <p class="p2" style="margin-top: 15px;margin-left: 6px;">${arr[i].user}:${arr[i].text}</p></div>`;
           box.appendChild(div)
        }else{
            div.innerHTML = `
            <div class="photo2">
           </div>
           <p class="p2" style="margin-top: 15px;margin-left: 6px;">${arr[i].user}:${arr[i].text}</p></div>`;
           box.appendChild(div)
        }
       
    }
    console.log(user)
}
start()

