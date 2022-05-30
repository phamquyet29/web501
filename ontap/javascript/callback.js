// function loadScript(srcValue, callback) {
//     // creates a <script> tag and append it to the page
//     // this causes the script with given src to start loading and run when complete
//     let script = document.createElement('script');
//     script.src = srcValue;
//     script.onload = () => callback(script);
//     // script.onerror = () => callback(new Error(`Script load error for ${src}`));
//     document.head.append(script);
// }
// loadScript('https://javascript.info/callbacks', function (script) {
//     console.log('succes', script);
// });

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            setTimeout(function () {
                resolve(script);
            }, 3000);
        };
        script.onerror = () => reject('Lỗi rồi');
        document.head.append(script);
    });
}

loadScript('https://javascript.info/callbacks')
    .then((script) => console.log(`${script.src} ahihi`))
    .catch((error) => console.log(error));

// Đồng bộ và bất đồng bộ

// Đồng bộ -> như vào xem rạp chiếu phim
// Bất đồng bộ -> như vào nhà hàng ăn uống
// xử lý bất đồng bộ là sao? chuyển tiến trình của thằng bất đồng bộ -> đồng bộ

function sum(a, b, callback) {
    callback(6);
}

sum(2, 4, function (result) {
    console.log(result);
});

const demoPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Lỗi rồi');
    }, 1000);
});

demoPromise.then((result) => console.log(result)).catch((error) => console.log(error));

const cauHon = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('lắc đầu');
    }, 3000);
});

cauHon
    .then((result) => result + 'Hôn')
    .then((success) => console.log('success'))
    .catch((error) => console.log('error', error));
