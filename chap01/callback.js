function loadScript(src, callback) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    script.onload = callback(script)
    document.head.append(script);
}
loadScript('/my/script.js', function(script){
    console.log(script);
});


const myArr = [1,2,3,4];

console.log(myArr.map(item => item * 2));
