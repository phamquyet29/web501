// var - let - const
var a = 10;
var a = 20;

console.log(a);

// ES6
let b = 10;
b = 20;

const names = ["Kien", "Dat", "Lam"];
const person = {
    name: "Dat",
};
person.age = 20;

console.log(person);

// names.push("Do");
// console.log(names);

// const nameElement = document.querySelector("#nameElement");

// let result = "";

// for (let i = 0; i < names.length; i++) {
//     result += "<div>" + names[i] + "</div>";
// }
// nameElement.innerHTML = result;

// function name
console.log("function name", sum(30, 10));
function sum(a, b) {
    return a + b;
}

// function expression -> anonymous function
const sum2 = function (a, b) {
    return a + b;
};
console.log("function expression", sum2(30, 10));
// arrow function - Viết tắt của function expression
const sum3 = (a, b) => a + b;
console.log("arrow function ", sum3(30, 40));
// IIFE function
((a, b) => {
    console.log("IIFE function", a + b);
})(50, 50);

function total(a, b) {
    // checking
    if (typeof a == "string" || typeof b == "string") return 0;
    // processing
    const result = a + b;
    // return
    return result;
}
console.log(total(10, 20));

const nameElement = document.querySelector("#nameElement");
const productList = ["product A", "product B"];
function showProduct(products) {
    // checking
    if (!Array.isArray(products)) return [];
    // processing
    let result = "";
    for (let i = 0; i < products.length; i++) {
        result += "<div>" + products[i] + "</div>";
    }
    // return
    return result;
}
nameElement.innerHTML = showProduct(10);
