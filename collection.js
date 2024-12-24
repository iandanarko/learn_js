// Array
let arr = [1, 2, 3]
arr.push(4)
last = arr.pop()
evenArr = arr.filter((a) => {return a % 2 == 0})
console.log(arr)
console.log(last)

// Set
const letter = new Set(["a"])
letter.add("b")
console.log(letter.has("a")) // true

// HashMap
const mapper = new Map(["key1", "val1"])
mapper,set("key2", "val2")
console.log(mapper.has("key2")) // check if key exists
console.log(mapper.get("key2")) // get value
