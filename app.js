/*======= Select Elements =======*/
const navBar = document.querySelector('.nav-bar');
const navBtn = document.querySelector('.toggle-btn');
const navLink = document.querySelectorAll('.nav-link');

/*======= Event Listeners =======*/
//Menu Bar 
navBtn.addEventListener('click', function(){
    navBar.classList.toggle('show-nav-bar');
})

navLink.forEach(link => {
    link.addEventListener('click', function(){
        navBar.classList.remove('show-nav-bar')
    })
})