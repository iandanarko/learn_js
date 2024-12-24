// Function
function myFunction(p1, p2) {
  return p1 * p2;
}

console.log(myFunction(1, 2)); // return 2

// Cooler way to create function
let sumFunction = (a, b) => {
  return a+b;
}

console.log(sumFunction(1,2)); // return 3

function delayPrint() {
  console.log("Will be run")
}

setTimeout(delayPrint, 3000) // will be run after 3 second

setInterval(delayPrint, 1000) // will be run every 1 second
