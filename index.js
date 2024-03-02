// SyntaxError: Invalid shorthand property initializer in JS

// EXAMPLE 1 - Use a colon to separate a key and a value

const obj = {
  name: 'Bobby Hadz', // ✅ use colons to separate key and value
  age: 30,
};

console.log(obj); // 👉️ {name: 'Bobby Hadz', age: 30}

console.log(obj.name); // 👉️ Bobby Hadz
console.log(obj.age); // 👉️ 30

// ------------------------------------------------------------------

// // EXAMPLE 2 - Use an equal sign to add a new key-value pair to an object

// const obj = {
//   name: 'Bobby Hadz',
//   age: 30,
// };

// obj.country = 'Chile';

// // 👇️ {name: 'Bobby Hadz', age: 30, country: 'Chile'}
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Use an equal sign when declaring a variable

// const name = 'Bobby Hadz';
// console.log(name);

// const arr = ['bobby', 'hadz', 'com'];
// console.log(arr);

// const obj = {name: 'Bobby', age: 30};
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Three equal signs are used to check for equality

// const name = 'Bobby Hadz';
// console.log(name);

// if (name === 'Bobby Hadz') {
//   console.log('the values are equal');
// } else {
//   console.log('the values are NOT equal');
// }
