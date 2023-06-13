
import { getAll, getDelete } from "../api/product"
import { useEffect, useState } from "../lib"
import introlerPage from "../component/introlerPage"
import contactPage from "../component/contactPage"
import projectPage from "../component/projectPage"
import aboutpage from "../component/aboutpage"


const HomePage = () => {
  const [product, setproduct] = useState([])
  useEffect(() => {
    getAll().then(({ data }) => setproduct(data))
  }, [])

  return `
  <header class="">
  <label class="changeTheme">
  <input type="checkbox" name="changeTheme" />
</label>
        <div class="navDiv">
          <label for="menu">
            <i class="fa-solid fa-bars"></i>
          </label>
        </div>
        <input type="checkbox" id="menu" />
        <ul class="nav flex justify-end">
        <label class="changeTheme">
        <input type="checkbox" name="changeTheme" />
      </label>
          <li><a href="#home">Trang Chủ</a></li>
          <li><a href="#row">Thông Tin</a></li>
          <li><a href="#skill">Kỹ Năng</a></li>
          <li><a href="#project">Dự Án</a></li>
          <li><a href="/signin">Đăng nhập</a></li>
        </ul>
      </header>
        
      <div id="home">
      ${introlerPage()}
      </div>
      
      <div id="row>
      ${aboutpage()}
      </div>

      <div id="skill >
      ${contactPage()}
      </div>

      <div id="project>
      ${projectPage()}
      </div>
        
    `
}

export default HomePage