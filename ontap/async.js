const url = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js";

function loadScript(src, callback) {
    let script = document.createElement("script"); // <script></script>
    script.src = src; // <script src="url"></script>
    script.onload = () => {
        callback(null, script);
    };
    script.onerror = () => {
        callback(new Error(`Script load error for ${src}`));
    };
    document.head.append(script); // <head>/ <script src="url"></script></head>
}
loadScript(url, (error, script) => {
    loadScript("b", (script) => {
        loadScript("c", (script) => {
            //...
        });
    });
}); // setTimeOut

// Callback: https://www.w3schools.com/js/js_callback.asp
// callback: https://javascript.info/callbacks
// tool async: http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

setTimeout(() => {
    console.log(1);
}, 3000);
setTimeout(() => {
    console.log(2);
}, 1000);
