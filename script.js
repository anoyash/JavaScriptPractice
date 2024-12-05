/*
    4 pillars of HTML Element
    
    --> Selection of an HTML element
    --> Changing HTML
    --> Changing CSS
    --> Event listener 
*/

/**
 * Here we write CSS property in camel casing
 */

console.log("Js Script initiated **");

var myVar = document.querySelector("h1");
var toggleButton = true;

console.log(myVar.outerHTML);

myVar.innerHTML = "My new heading !";
myVar.style.color = "Red";
myVar.style.backgroundColor = "aqua";
myVar.style.width = "max-content";

console.log(myVar.outerHTML);

myVar.addEventListener("click", () => {
  if (toggleButton) {
    myVar.style.backgroundColor = "violet";
    toggleButton = false;
  } else {
    myVar.style.backgroundColor = "aqua";
    toggleButton = true;
  }
});
