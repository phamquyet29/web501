import productList from "./data";

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
