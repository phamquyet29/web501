function loadScript(src, callback) {
    const script = document.createElement("script"); // <script>
    script.src = src; // <script src="https://github.com"></script>
    script.onload = function () {
        callback(script);
    };
    script.onerror = function () {
        callback(new Error("Loi roi"));
    };
    document.head.append(script); // <head><script src="https://github.com"></script></head>
}
loadScript("https://github.com", function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
