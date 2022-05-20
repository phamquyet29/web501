// function loadScript(src, callback) {
//     // creates a <script> tag and append it to the page
//     // this causes the script with given src to start loading and run when complete
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     // script.onerror = () => callback(new Error(`Script load error for ${src}`));
//     document.head.append(script);
// }
// loadScript('https://javascript.info/callbacks', function (script) {
//     if (script) {
//     }
// }); // loadScript(string, function)

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
