const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');

menuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})

var btnContainer=document.querySelector("#nav-links");
var buttons=btnContainer.getElementsByClassName("nav-btn");

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var current=document.getElementsByClassName("active");
        current[0].className=current[0].className.replace("active","");
        this.className+=" active";
    });
}