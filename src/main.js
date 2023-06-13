import introlerPage from "./component/introlerPage"
import projectPage from "./component/projectPage"
import { render, router } from "./lib"
import HomePage from "./pages/HomePage"
import aboutHome from "./pages/admin/about/aboutHome"
import aboutUpdatePage from "./pages/admin/about/aboutUpdate"
import introlerHome from "./pages/admin/introler/introlerHome"
import introlerUpdate from "./pages/admin/introler/introlerUpdate"
import projectAdd from "./pages/admin/project/projectAdd"
import projectHome from "./pages/admin/project/projectHome"
import projectUpdate from "./pages/admin/project/projectUpdate"
import detailPage from "./pages/detailPage"
import signinPage from "./pages/signinPage"
import signupPage from "./pages/signupPage"

const app = document.querySelector('#app')

router.on("/", () => { render(HomePage, app) })
router.on("/projects/:id", (params) => {
    render(function () {
        return detailPage(params)
    }, app)
})

router.on('/admin', () => {
    render(projectHome, app)
})
router.on("/admin/projects/add", () => {
    render(projectAdd, app)
})
router.on("/admin/projects/update/:id", (params) => {
    render(function () {
        return projectUpdate(params)
    }, app)
})
router.on('/admin/introler', () => {
    render(introlerHome, app)
})

router.on("/admin/introler/update/:id", (params) => {
    render(function () {
        return introlerUpdate(params)
    }, app)
})
router.on('/admin/about', () => {
    render(aboutHome, app)
})

router.on("/admin/about/update/:id", (params) => {
    render(function () {
        return aboutUpdatePage(params)
    }, app)
})
// dăng ki dang nhap
router.on('/signin', () => {
    render(signinPage, app)
})
router.on('/signup', () => {
    render(signupPage, app)
})

router.resolve()
