const products = ["product A", "product B", "Product C"];
// for
for (let i = 0; i < products.length; i++) {
    // console.log(products[i]);
}
// for...in
for (let i in products) {
    // console.log(products[i]);
}
// for...of
for (let item of products) {
    // console.log(item);
}

// forEach
products.forEach(function (item, i) {
    console.log(`${item} có index là : ${i}`);
});

const productList = [
    { id: 1, name: "Product A", price: 200 }, // item
    { id: 2, name: "Product B", price: 300 }, // item
    { id: 3, name: "Product C", price: 400 }, // item
];
const productListElement = document.querySelector("#productList");

// Ví dụ show product sử dụng forEach
// const showProducts = () => {
//     let result = "";
//     productList.forEach((item) => {
//         result += `<div>${item.name}</div>`;
//     });
//     productListElement.innerHTML = result;
// };
// showProducts();

// map - method
const newProductList = productList.map((item) => {
    return `${item.name} + ahihi`;
});
// ví dụ show product sử dụng map
const showProducts = () => {
    productListElement.innerHTML = productList.map((item) => `<div>${item.name}</div>`).join("");
};
showProducts();

// filter
const newFilterProducts = productList.filter((item) => item.id != 1);

// find
const findItem = productList.find((item) => item.id == 2);
const newItem = `<div>${findItem.name}</div> <div>${findItem.price}</div>`;
document.querySelector("#productDetail").innerHTML = newItem;

find;
