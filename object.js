let car = {
  name: "Xpander",
  color: "Black",
}

console.log(Object.keys(car)) // [ 'name', 'color' ]
console.log(Object.values(car)) // [ 'Xpander', 'Black' ]

delete car.name // delete key value
console.log(Object.keys(car))  // [ 'name', 'color' ]
console.log(car.name) // return undefined
