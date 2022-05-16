const data = [
    { id: 1, name: 'Product A', price: 200 }, // item
    { id: 2, name: 'Product B', price: 300 },
    { id: 3, name: 'Product C', price: 400 },
    { id: 4, name: 'Product D', price: 500 },
];
// let result = '';
// for
// for (let i = 0; i < data.length; i++) {
//     result += `<div>${data[i].name}</div>`;
// }

// es5
// forEach - cú pháp array.foreach(value => value);
// data.forEach((item, index) => {
//     result += `<div>${item.name}</div>`
// }).join().filter

// es6
// for...of
// for(let item of data){
//     result+= `<div>${item.name}</div>`
// }
// map - array.map(value => value);
const result = data.map((item) => `<div>${item.name}</div>`);

document.querySelector('#app').innerHTML = result;
