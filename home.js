console.log("hi")
let menu=document.querySelector('#menu-btn')

let navba=document.querySelector('header .nav')

menu.onclick=()=>{
menu.classList.toggle('fa-times')
navba.classList.toggle('active')
}


let activepage=window.location;
const navlinks=document.querySelector('.nav').querySelectorAll('a');
console.log(navlinks)
navlinks.forEach(el=>{
    el.addEventListener("click",function(){
navlinks.forEach(nav=>nav.classList.remove("activenav"))
this.classList.add("activenav")
    })

   
 })
