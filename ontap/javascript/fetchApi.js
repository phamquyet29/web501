/**
 * Hướng dẫn cài đặt json-server ( fake api )
 * B1: npm i -g json-server
 * B2: Tạo 1 file db.json
 * B3: json-server --watch db.json --port 3001
 */

async function getProduct() {
    const response = await fetch('http://localhost:3001/products');
    const data = await response.json();
    return `<div>${data.map((item) => item.name)}</div>`;
}
async function render() {
    document.getElementById('app').innerHTML = await getProduct(); // [promise object]
}

render();
