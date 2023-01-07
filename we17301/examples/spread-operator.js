// spread operator -> copy

const person = {
    name: "Dat",
    age: 20,
};
const person2 = {
    ...person,
    // shadow copy và deep copy
    address: "Thai Binh",
};
console.log(person2);

const products = ["Product A", "Product B"];
// products.push("Product C");
const newProducts = [...products, "Product C"];
console.log("products", products);
console.log("new products", newProducts);

// rest parameter -> Chuyển đổi tham số -> 1 mảng

function total(...numbers) {
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
total(1, 2, 3, 4, 5);
