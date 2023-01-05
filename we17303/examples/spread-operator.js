const person = {
    name: "John",
    age: 30,
};
const person2 = {
    ...person,
    address: "New York",
};
console.log(person2);

const products = [10, 20, 30];
const newProducts = [...products, 40];
console.log("products: ", products);
console.log("newProducts", newProducts);
