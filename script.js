/*
    4 pillars of HTML Element
    
    --> Selection of an HTML element : querySelector()  , querySelectorAll() ,
                                     getElementsByClassName() , getElementById()
    --> Changing HTML
    --> Changing CSS
    --> Event listener 
*/

/*
 * Here we write CSS property in camel casing
 */

console.log("Js Script initiated **");

var myVar = document.querySelector("h1");
/*
It will select only the first h1 tag

If we want to select all the h1 tags , then we need to used other interface
*/
var allheadings = document.querySelectorAll("h1");
// allheadings will have nodelist

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

myVar.innerText = "inner text";
// innerHTML vs innerText vs innerContent
