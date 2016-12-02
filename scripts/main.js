var myHeading=document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.png') {
      myImage.setAttribute ('src','images/2.png');
    } else {
      myImage.setAttribute ('src','images/3.png');
    }
}