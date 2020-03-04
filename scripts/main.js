let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fart-face.jpg') {
        myImage.setAttribute ('src','images/english-muffin.jpg');
} else {
    myImage.setAttribute ('src', 'images/fart-face.jpg');
}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Great News, ' + myName + '!';
}
if(!localStorage.getItem('name ')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Great News, ' + storedName + '!';
}
myButton.onclick = function() {
    setUserName();
}