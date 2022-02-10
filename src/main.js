import Navigo from "navigo";
import Header from "./components/header";
import AboutPage from "./pages/about";
import AddPost from "./pages/AdminAddPost";
import AdminPost from "./pages/AdminPost";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    // DetailNewsPage.render(id).render();
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender();
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/news": () => print(NewsPage),
    
    "/news/:id": ({ data }) => print(DetailNewsPage, data.id),
    "/admin/news/add": () => print(AddPost),
    "/admin/news": () => print(AdminPost),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin)
});
router.resolve();



// const render = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             try {
//                 // connect sucessfully
//                 resolve("Hello Async/await")
//             } catch (error) {
//                 reject("Lỗi");
//             }
//         }, 3000)
//     })
// }

// // render()
// //     .then(result => {
// //         result.push(5);
// //         return result;
// //     })
// //     .then(data => {
// //         data.push(6);
// //     })
// //     .catch(error => console.log(error))

// const printFunctionPromise = async () => {
//     const result = await render();
//     return result;
// }