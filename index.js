let countEl = document.getElementById("count-el") //creating a variable and initializing it to the id in the HTML document.
console.log(countEl)

let count = 0
function increment() {
	count = count + 1 //count can be constantly incremented to give a new count.
	countEl.innerText = count
}

function save(){
	console.log(count)
}



