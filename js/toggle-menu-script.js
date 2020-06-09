// Appearing/ Disappearing Menu Bar on Small Device


var menubar = document.querySelector('.menu-container');
var toggle =  document.querySelector('.hamburger-container');
var hamburgerIcon = document.querySelector('.fa-bars');
var crossIcon = document.querySelector('.fa-times');


toggle.addEventListener('click', toggleFunction);

function toggleFunction() {
    if(menubar.classList.toggle('menu-container-sd-appear')) {
        hamburgerIcon.style.display = 'none';
        crossIcon.style.display = 'inline-block';
    }else{
        hamburgerIcon.style.display = 'inline-block';
        crossIcon.style.display = 'none';
    }
};