import Navigo from "navigo";
import Header from "./components/header";
import AboutPage from "./pages/about";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content) => {
    document.getElementById("app").innerHTML = await content.render();
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/news": () => {
        print(NewsPage);
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
});
router.resolve();



const render = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                // connect sucessfully
                resolve("Hello Async/await")
            } catch (error) {
                reject("Lỗi");
            }
        }, 3000)
    })
}

// render()
//     .then(result => {
//         result.push(5);
//         return result;
//     })
//     .then(data => {
//         data.push(6);
//     })
//     .catch(error => console.log(error))

const printFunctionPromise = async () => {
    const result = await render();
    return result;
}