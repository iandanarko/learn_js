// For Loop
// 1. simple
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. in loop
obj = {
  name: "someOne",
  gender: "male"
}
for (key in obj) {
  console.log(key + " : " + obj[key]);
}

arr = ["1", "2", "3"]
for (index in arr) {
  console.log("Index " + index + " : " + arr[index]);
}

// 3. of loop
arr = ["4", "5", "6"]
for (let v of arr) {
  console.log(v)
}

// 4. forEach
arr = ["7", "8", "9"]
arr.forEach(element => {
  console.log(element)
});

// 5. while
let j = 0
while(j < 3) {
  console.log("while loop " + i);
  j++
}

// 6. do..while
let k = 1
do {
  console.log("Runnnnn")
} while(k<1)