// spread -> clone ( copy )
const person = {
    name: "Dat",
    age: 20,
    street: "Kỳ Bá",
    child: {
        name: "Lam",
    },
};

// Sử dụng spread operator để copy
// const info = {
//     ...person,
//     address: "Thái Bình",
// };

// Sử dụng Object assign để copy
// const info = Object.assign({}, person, { address: "Thái Bình" });

// Deep copy
const info = structuredClone(person);
info.address = "Thai Binh";

info.child.name = "Kien";

console.log("person", person);
console.log("info", info);

// array
// const numbers = [1, 2, 3, 4];
// const newNumers = [...numbers, 5];
// console.log("numbers", numbers);
// console.log(newNumers);

const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
];
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    const product = {
        id: 4,
        name: "Product D",
    };
    console.log([...products, product]);
});
