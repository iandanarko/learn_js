// Promise for async

let myPromise = new Promise((resolve, reject) => {
  resolve("yata"); // will run success
  reject("Will be error") // will return error 
})

myPromise.then(
  (val) => {
    console.log("Success: " + val);
  }, 
  (err) => {
    console.log("Error: " + err);
  }
)
