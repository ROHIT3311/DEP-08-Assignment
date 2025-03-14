let head = document.querySelector("h1");
console.log(head.innerHTML)

let btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
	let position = navigator.geolocation.getCurrentPosition(getPosition);
	
});

function getPosition(position){
	let longitude = position.coords.longitude;
	let latitude = position.coords.latitude;
	head.innerHTML = `${latitude} , ${longitude}`;	
}


let worker = new Worker("worker.js");
worker.postMessage(1000);
worker.onmessage = function(event){
	console.log(event.data);
}
console.log("Hello");