const hamburger = document.getElementById('hamburger');
const linkHamburger = document.getElementById('link-hamburger');



hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('hamburger-active')
    linkHamburger.classList.toggle('nav-hidden')
    linkHamburger.classList.toggle('nav-show')
})
