const myArr = ["Dat", "Kien", "Son"];
const products = [
    { id: 1, name: "San pham A", price: 200 }, // item
    { id: 2, name: "San pham B", price: 300 }, // item
    { id: 3, name: "San pham C", price: 400 }, // item
];
const app = document.getElementById("app");

// let content = "";

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
// myArr.forEach((name, index) => (content += `<li>${name} + ${index}</li>`));

// [2,8,18,]

// Pass a function to map
const content = products
    .map(
        (item) => `<div class="border hover:border-green-300">
        <h2>${item.name}</h2>
        <span>${item.price}</span>
    </div>`
    )
    .join(" ");

app.innerHTML = `<div class="max-w-6xl mx-auto grid grid-cols-3 gap-8"> ${content}</div>`;

// Array methods: map, filter, reduce, find
// destructoring, spread operator, rest parameter
// nullish, optional chaining
