// alert("Hello");
// document.querySelector("h1").innerHTML = "Good Bye";

//var heading = document.secondElementChild.firstElementChild.lastElementChild;

// Changing styles of elements with JS
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.fontSize = "5rem";
document.querySelector("h1").style.padding = "7%";

document.querySelector("button").style.backgroundColor = "yellow";

// Add/Remove/Toggle a css class to an html element
// This should be used over changing styles directly as that is good practice
// HTML = Structure, CSS = Styling, JS = Behaviour
document.querySelector("button").classList.add("invisible")
document.querySelector("button").classList.remove("invisible")
document.querySelector("button").classList.toggle("invisible")

// Add HTML
console.log(document.querySelector("h1").innerHTML)
document.querySelector("h1").innerHTML = "<en>Good Bye</en>";
console.log(document.querySelector("h1").innerHTML)

// document.querySelector("a");
// <a href=​"https:​/​/​www.google.com">​Google​</a>​

// console.log(document.querySelector("a"));
// console.log(document.querySelector("a").getAttribute("ref"));
document.querySelector("a").setAttribute("href", "https://www.apple.com/ca");

