const myArr = ["Dat", "Kien", "Son"];
const app = document.getElementById("app");

let content = "";

// for
// for (let i = 0; i < myArr.length; i++) {
//     content += `<li>${myArr[i]}</li>`;
// }

// for...in
// for (let i in myArr) {
//     content += `<li>${myArr[i]}</li>`;
// }

// for..of
// for (let name of myArr) {
//     content += `<li>${name}</li>`;
// }

// forEach
myArr.forEach((name, index) => (content += `<li>${name} + ${index}</li>`));

app.innerHTML = `<ul> ${content}</ul>`;

// Array methods: map, filter, reduce, find, findIndex, some, every, includes
// destructoring, spread operator, rest parameter
// nullish, optional chaining
