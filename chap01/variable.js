/**
 * 1. Khai báo biến với var, let và const
 * 2. Cách tên biến: danh từ và bắt buộc phải là tiếng anh
 */

var a = 1;
var a = 2;

let b = 1;
b = 2;

const c = 1; // number, string, boolean -> tham trị
const handsome = true;
const productItem = { id: 1, name: "Product A" };

const isMarried = true;
const isLogged = true;

const productList = ["Product A", "Product B"];
const productListEl = document.querySelector("#productList");

let result = "";
for (let i = 0; i < productList.length; i++) {
    result += "<div>" + productList[i] + "</div>";
}
productListEl.innerHTML = result;

/**
 * B1: Tạo ra 1 biến để lưu trữ dữ liệu mỗi vòng lặp
 * B2: Hiển thị kết quả ra ngoài màn hình
 */
