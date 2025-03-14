let h1 = document.querySelector("h1");

h1.style.color = "blue";
h1.classList.add("hello", "hel", "hi");

console.log(h1.classList);
h1.classList.remove("hel");

let newHeader = document.createElement("h2");
newHeader.innerText = "New Heading";
newHeader.style.color = "blue";
document.body.appendChild(newHeader);

let container = document.createElement("div");
document.body.appendChild(container);
let title = document.createElement("h3");
title.innerText = "Title";
container.appendChild(title);


