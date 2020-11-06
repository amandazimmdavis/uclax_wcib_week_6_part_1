//console.log('Hello from js/scripts.js!');


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

//const btn = document.querySelector('button');
const btn = document.getElementById('lightdark')
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i=1; i<6; i++) {
//i=1;

const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/pic'+i+'.jpg');
let stringtest='images/pic'+i+'.jpg';
thumbBar.appendChild(newImage);

newImage.onclick=function(){
  displayedImage.setAttribute('src', 'images/pic'+i+'.jpg')
}
}


/* Wiring up the Darken/Lighten button */

btn.onclick=function(){
const currentClass = btn.getAttribute('class'); //sets current class variable equal to the class of the button
if (currentClass === 'dark') { //if current class is equal to dark

btn.setAttribute('class', 'light');   // changes the class to dark
btn.textContent = 'Lighten'; //adds text that says "lighten"
overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'; //changes background color

} else {
  btn.setAttribute('class', 'dark');
  btn.textContent = 'Darken';
  overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
}
