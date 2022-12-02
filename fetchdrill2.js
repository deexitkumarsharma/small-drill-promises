/* Problem1: Create a function for fetching the data using the below URL and 
console the first 10 values of data. ( Using promise )

Problem2: Write the same function using async & await for fetching the data. ( Using async & await )

API for fetching the data:
https://jsonplaceholder.typicode.com/users 
*/

// problem1
function problem1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((value) => value.slice(0, 10))
    .then((data) => console.log(data));
}
problem1();

// problem2
async function problem2() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  let result = await data.json();
  console.log(result);
}
problem2();
