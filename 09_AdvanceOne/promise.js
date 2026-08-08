//type1
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task complete");
    resolve(); //called to complete the promise, after the async function completes it task
  }, 1000);
});
promiseOne.then(function () {
  console.log("promise consumed");
});

//type 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async 2 complete");
    resolve();
  }, 2000);
}).then(function () {
  console.log("promise 2 consumed");
});

//type3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "Gourish", email: "gm@gmail.com" });
  }, 3000);
});
promiseThree.then(function (user) {
  console.log(user);
  console.log("Promise 3 resolved");
});

//type 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = true;
    let error = false;
    if (!error) {
      resolve({ name: "GM", pass: "123" });
    } else {
      reject("Error!Not found");
    }
  }, 4000);
});
//using chaining to extract data(important for db operations )
promiseFour
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("Either resolved or rejected"));

//type 5 using async await
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = true;
    let error = false;
    if (!error) {
      resolve({ name: "js", pass: 123 });
    } else {
      reject("Error! Try again");
    }
  }, 5000);
});
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
consumePromiseFive();

//type 6
//   async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response)
//     const data = await response.json();
//     console.log(data)
//     } catch (error) {
//         console.log("error:", error)
//     }
//   }
//   getAllUsers()

//doing same thing using then and catch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
