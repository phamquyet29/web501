// var a = 10;
//     a = 20;
// var b = 20;

// console.log(a + b);

// let a = 10;
//     a = 20;
// let b = 20;

// console.log(a + b);

// const a = [1,2,3];
// a.push(4);
// console.log(a);


// Tham chiếu và tham trị
let numA = 20;
let numB = 20;
console.log(numA == numB);

const a = { name: "Dat"}; 
const b = { name: "Dat" };

console.log(a == b);

const ccc = [{ name: "Dat"}];
// Lưu ý
/* 
    - Không nên sử dụng var
    - Khuyến khích sử dụng const để khai báo biến
    - Sử dụng let khi giá trị có sự thay đổi
*/