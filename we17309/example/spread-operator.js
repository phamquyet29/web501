// spread-operator -> copy
const person = {
    name: "Dat",
    age: 20,
};

const person2 = {
    ...person,
    address: "Thai Binh",
};

console.log(person2);

const products = [1, 2, 3, 4];
// products.push(5);
console.log("products", products);
const newProducts = [-1, ...products, 5];
console.log("newProducts", newProducts); // [1,2,3,4,5];
