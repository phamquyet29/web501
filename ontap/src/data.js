export default [
    { id: 1, name: 'Product A', price: 200 }, //item
    { id: 2, name: 'Product B', price: 300 }, // item
    { id: 3, name: 'Product C', price: 400 },
    { id: 4, name: 'Product D', price: 500 },
];
/* 
Duyệt mảng
- for
- for of
- forEach
- map() -> Trả về kết quả là một mảng mới đã được biến đổi tùy theo điều kiện đã cho
ví dụ: [1,2,3,4].map() => [2,4,6,8]

// lọc
- array.find(item => item.id == 4) -> trả về kết quả là phần tử thỏa mãn điều kiện đã cho -> { id: 4,.... }
- array.filter(item => item.id !== 4)  -> trả về kết quả là một mảng mới thỏa mãn điều kiện
Ví dụ: [1,2,3,4].filter() => [1,2,3]
*/
