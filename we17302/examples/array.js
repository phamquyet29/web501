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
