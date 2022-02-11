import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNews from "./pages/admin/news";
import AdminAddNews from "./pages/admin/news/add";
import AdminEditNews from "./pages/admin/news/edit";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before(done, match) {
      // do something
      if(localStorage.getItem('user')){
        const userId = JSON.parse(localStorage.getItem('user')).id;
        if(userId === 1){
            done();  
        } else {
            document.location.href="/";
        }
      } else{
          document.location.href="/";
      }
      
    }
  })
router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print("About Page");
    },
    "/product": () => print("Product Page"),
    "/news/:id": ({ data }) => print(DetailNewsPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNews),
    "/admin/news/add": () => print(AdminAddNews),
    "/admin/news/:id/edit": ({data}) => print(AdminEditNews, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin)
});

router.notFound(() => print("Not Found Page"));

router.resolve();

/**
 * ôn tập callback
 * ôn tập promise
 * async/await
 * API là gì? hoạt động như nào?
 * Hướng dẫn sử dụng test API ( thunder client )
 * Sử dụng nó như nào trong Javascript?
 */

// callback: 1 hàm được gọi ra thông qua 1 hàm khác, và truyền vào như một tham số
// function removeLocalStorage(result) {
//     console.log(result);
// }

// function signout(user, callback) {
//     if('user == admin') callback();
// }
// click -> goi sum(user, removeLocalStorage);

// promise: Là 1 đối tượng đặc biệt, xử lý bất đồng bộ

// function resolveAfter2s() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             try {
//                 resolve("ahihi");
//             } catch (error) {
//                 reject("Lỗi kết nối");
//             }
//         }, 3000);
//     });
// }

// const getData = resolveAfter2s();

// getData.then((result) => [...result, "Nhung"])
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

// async function getData2() {
//     document.getElementById("app").innerHTML = await resolveAfter2s();
// }
// getData2();
