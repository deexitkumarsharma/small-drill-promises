/*1. Create a function named getFirstName that returns a promise.
 When the promise is resolved it will return a value of {name: "Arya"}.*/

function getFirstName() {
  return new Promise((resolve, reject) => {
    let firstName = { name: "Arya" };
    setTimeout(() => {
      resolve(firstName.name);
    }, 1000);
  });
}
getFirstName().then((data) => {console.log(data)});

/*2. Create a function named getLastName that returns a promise. 
When the promise is resolved it will return a value of {name: "Stark"}.*/

function getLastName() {
  return new Promise((resolve, reject) => {
    let lastName = { name: "Stark" };
    setTimeout(() => {
      resolve(lastName.name);
    }, 2000);
  });
}
getLastName().then((data) => {console.log(data)});

/*3. Create another function named getFullName which returns a promise. 
And when the promise is resolved it will return the full name 
that you will get by resolving the promises from the above two functions.*/

function getFullName(firstName, lastName) {
  Promise.all([firstName, lastName]).then((result) => {
    console.log(result[0] + " " + result[1]);
    });
}
getFullName(getFirstName(), getLastName());
