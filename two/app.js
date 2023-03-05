const menubtn = document.querySelector('.menu');
const navbar = document.querySelector('.mainav');
const navcont = document.querySelector('.nav-container')
const preLoader = document.querySelector('#pre-loader');

menubtn.addEventListener('click', ()=>{
    menubtn.classList.toggle('active')
    navbar.classList.toggle('open')
})

window.addEventListener('scroll', ()=>{
    navcont.classList.toggle('sticky', window.scrollY>0)
})

window.addEventListener('load', ()=>{
    preLoader.style.display = 'none'
})