/* Bannar Image Changer */

var imageRack = document.querySelectorAll('.image-rack');
var imageLoop = setInterval(intervalFunction, 5000);

var i = 0;

function intervalFunction() {
    imageRack[i].classList.remove('active');
    i = (i + 1) % imageRack.length;
    imageRack[i].classList.add('active');
}