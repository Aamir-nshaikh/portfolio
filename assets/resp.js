burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
rightnav= document.querySelector('.right-nav')
leftnav= document.querySelector('.left-nav')
navList=document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    leftnav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    navList.classList.toggle('v-class');



})