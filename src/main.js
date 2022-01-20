import Navigo from "navigo";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print =  async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender();
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/product": () => print(ProductPage),
    "/signup": () => print(Signup),
    "/product/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewsPage),
});

router.resolve();


// Callback
// Promise
// Async/await
// API
// Test API
// JS làm việc với API

const getProduct = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve([1,2,3,4])
        } catch (error) {
            reject("Ket noi khong thanh cong")
        }
    }, 3000)
});

// // getProduct
// //     .then(result => [...result, 5])
// //     .then(data => console.log(data))
// //     .catch(error => console.log(error))

const showProduct = async () => {
    const result = await getProduct();
    const data = await [...result, 5];
    console.log(data);
}
showProduct();

