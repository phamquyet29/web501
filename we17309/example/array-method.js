// loop
const products = [
    "Product A", // item
    "Product B", // item
    "Product C", // item
];
for (let i = 0; i < products.length; i++) {
    // biết điểm dừng, dựa theo length
    // dựa vào index để hiển thị
    console.log("for ", products[i]);
}
// for in
for (let item in products) {
    console.log("for in ", products[item]);
}
// for of
for (let item of products) {
    console.log("for of ", item);
}
// forEach
products.forEach((item, index) => console.log(`${item} ${index}`));

// map -> Tạo ra 1 mảng mới và có thể thay đổi giá trị
const newMapProducts = products.map((item, index) => {
    return `${item} ${index + 1}`;
});
// filter -> Tạo ra 1 mảng, lọc ra các phần tử thỏa mãn điều kiện
const newFilterProducts = products.filter((item) => {
    return item != "Product C";
});
