import { getAll } from "../api/product"
import { useEffect, useState } from "../lib"


const projectPage = () => {
    const [intro, setIntro] = useState([])
    useEffect(() => {
        getAll().then(({ data: intol }) => setIntro(intol))
    }, [])
    return `
    <div class="container">
        <section >
                <h1 class="title text-[20px] font-[700]" style="font-size: 32px;">Dự Án</h1>
                <div class="cc">
    ${intro.map((item) => {
        return `
                <div class="wrap">
                    <a href="/projects/${item.id}">
                    <div class="item1">
                    <p>${item.name}</p>
                    <img src="${item.img}" alt="">
                    </div>
                    </a>
                </div>
                `
    })}
                </div>

            </section>
         </div>
  `
}

export default projectPage