let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fart-face.jpg') {
        myImage.setAttribute ('src','images/english-muffin.jpg');
} else {
    myImage.setAttribute ('src', 'images/fart-face.jpg');
}
}