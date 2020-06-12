// Appearing/ Disappearing Menu Bar on Small Device


var menubar = document.querySelector('.menu-container');
var toggle =  document.querySelector('.hamburger-container');
var hamburgerIcon = document.querySelector('.fa-bars');
var crossIcon = document.querySelector('.fa-times');
let menulinks = document.querySelectorAll('.item-link');

//Toggle Function

toggle.addEventListener('click', toggleFunction);

function toggleFunction() {
    if(menubar.classList.toggle('menu-container-sd-appear')) {
        hamburgerIcon.style.display = 'none';
        crossIcon.style.display = 'inline-block';
        
    }else {
        hamburgerIcon.style.display = 'inline-block';
        crossIcon.style.display = 'none';
    }
};

    menulinks.forEach(item => {
        item.addEventListener('click', event => {
            menubar.classList.remove('menu-container-sd-appear');
            hamburgerIcon.style.display = 'inline-block';
            crossIcon.style.display = 'none';
        })
    })

    // The below code is for a single elements action

    // let menulinks = document.querySelector('.item-link'); 
    // menulinks.addEventListener('click', event => { 
    //     alert("Zahidul");
    // });
