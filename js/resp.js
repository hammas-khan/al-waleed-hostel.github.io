burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
navlistli = document.querySelector('.navlist')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
})

navlistli.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
})