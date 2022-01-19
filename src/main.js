import Navigo from "navigo";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminAddNewsPage from "./pages/admin/news/add";
import ContactPage from "./pages/contact";
import DetailPost from "./pages/detailPost";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import ProductPage from "./pages/product";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/news/:id": ({ data }) => {
        print(DetailPost, data.id);
    },
    "/product": () => {
        print(ProductPage);
    },
    "/contact": () => {
        print(ContactPage);
    },
    "/admin/dashboard": () => {
        print(Dashboard);
    },
    "/admin/news": () => {
        print(AdminNewsPage);
    },
    "/admin/news/add": () => {
        print(AdminAddNewsPage);
    },
});
router.notFound(() => print(NotFoundPage));
router.resolve();
/**
 * callback
 * promise
 * async/await
 * api
 * json
 */
// callback: 1 hàm được truyền vào 1 hàm khác, thông qua tham số

// function demo1(result) {
//     console.log(result);
// }
// function demo2(result) {
//     console.log(result);
// }

// function showInfo(callback1, callback2) {
//     // tinh tong
//     callback(10);
// }

// showInfo(demo1, demo2);

// promise -> là 1 đối tượng đặc biệt, và dùng để "xử lý bất đồng bộ" trong js

function renderValueAfter3s() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Loaded data after 3s");
            } catch (error) {
                reject("Failed");
            }
        }, 3000);
    });
}

// const render = renderValueAfter3s();

// render
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

// hàm async trả về 1 promise
async function asyncCall() {
    try {
        const result = await renderValueAfter3s();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
asyncCall();