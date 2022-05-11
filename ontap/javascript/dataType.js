const a = 10; // number
const b = "10"; // string
const isMarried = true; // boolean
const info = {
    name: "Dat",
    age: 20,
    "ten la": "Dat ....",
    run: function () {
        console.log(`Thay ${this.name} dep...à mà thôi`);
    },
};
const productList = [
    // 1
    { id: 1, name: "Product A", price: 20 }, // products[0]
    { id: 2, name: "Product B", price: 30 }, // products[1]
    { id: 3, name: "Product C", price: 40 }, // products[2]
];

function showProductList(products) {
    let result = "";
    // checking...
    if (!Array.isArray(products) || products.length == 0) return null;
    // processing...
    for (let i = 0; i < products.length; i++) {
        console.log(products[i]);
        result += `<div>name: ${products[i].name} - price: ${products[i].price}</div>`;
    }
    // return
    return result;
}
const app = document.getElementById("app");
if (app) {
    app.innerHTML = showProductList(productList);
}
