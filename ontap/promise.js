const url = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js";

function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script"); // <script></script>
        script.src = src; // <script src="url"></script>
        script.onload = () => {
            resolve(script);
        };
        script.onerror = () => {
            reject(new Error(`Script load error for ${src}`));
        };
        document.head.append(script); // <head>/ <script src="url"></script></head>
    });
}
loadScript(url)
    .then((script) => console.log(script))
    .catch((error) => console.log(error));
