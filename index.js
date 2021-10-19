const navBtn= document.getElementById('nav-btn');
const navBar= document.getElementById('navbar');
const navClose= document.getElementById('nav-close');
const navLink=document.getElementById('nav-link');

navBtn.addEventListener('click',()=>{
    navBar.classList.add("showNav");
});
navClose.addEventListener('click',()=>{
    navBar.classList.remove("showNav");
});
// navLink.addEventListener('click',()=>{
//     navBar.classList.remove("showNav");
// });