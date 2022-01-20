import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newsDetail";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
  document.getElementById("header").innerHTML = Header.render();
  document.getElementById("content").innerHTML = content;
  document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
  "/": () => {
    print(HomePage.render());
  },
  "/about": () => {
    print(AboutPage.render());
  },
  "/news/:id": ({ data }) => {
    const { id } = data;
    print(NewsDetail.render(id));
  },
});

router.resolve();

// callback : 1 hàm được truyền vào 1 hàm khác như 1 đối số
// sync, async: Đồng bộ và bất đồng bộ trong javascript

// const a = 10;
// const b = 20;

// function display(result){
//     document.querySelector('#app').innerHTML = result;
// }

// function sum(a,b, callback){
//     callback(a + b);
// }
// sum(a, b, display);

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    callback(null, script)
  }
  script.onerror = () => {
    callback("Loi roi")
  }
  document.head.append(script);
}

// callback in callback
// loadScript('https://abc.com/index1.js', function(error, script){
//     loadScript('https://abc.com/index2.js', function(error, script){
//         loadScript('https://abc.com/index3.js', function(error, script){
//             loadScript('https://abc.com/index4.js', function(error, script){
//                 console.log('finished')
//             })
//         })
//     })
// }); 

//es6 - promise: là một đối tượng đặc biệt, xử lý bất đồng bộ

const render = () => new Promise((resolve, reject) => {
    let status = true;
    setTimeout(function(){
        if(status){
            // lấy dữ liệu từ database
            resolve([1,2,3,4])
        } else {
            reject("Lắc đầu")
        }
    }, 3000)
});

// render()
//     .then((result) => {
//         result.push(5)
//         return result
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// async/await: cú pháp mới es8, xử lý bất đồng bộ

const printA = async () => {
    const result = await render(); 
    console.log('result', result);
    result.push(5);
    console.log('result', result);
}
printA();



