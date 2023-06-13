import { aboutAll } from "../api/about"
import { useEffect, useState } from "../lib"


const aboutpage = () => {
    const [intro, setIntro] = useState([])
    useEffect(() => {
        aboutAll().then(({ data: intol }) => setIntro(intol))
    }, [])
    return `
        <div>
            <div>
            ${intro.map((item) => {
        return `
                
            <div class="u">
            <section class="text-center">
                <h1 class="text-[25px] py-[20px] font-[800]">Thông Tin Cá Nhân</h1>
                <i class="fa fa-home" style="font-size: 30px;"></i>
            </section>
            </div>
            
            <div class="u my-[20px]">
            <section class="text-center">
                <p class="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg><p>
                <h3 class="text-[18px] font-[700]">Mốc thời gian</h3>
                <i class="fa fa-home" style="font-size: 30px;"></i>
                <p class="dd">
                ${item.time1}
                <p class="dd">${item.time2}</p>
                </p>
            </section>
            </div>
            <div class="u my-[20px]">
            <section class="text-center">
                <p class="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M17.168 8H13l.806-4.835A1 1 0 0 0 12.819 2H7.667a1 1 0 0 0-.986.835l-1.667 10A1 1 0 0 0 6 14h4v8l8.01-12.459A1 1 0 0 0 17.168 8z"></path></svg><p>
                <h3 class="text-[18px] font-[700] ">Tính Cách</h3>
                <i class="fa fa-home" style="font-size: 30px;"></i>
                <p class="dd">
                ${item.tinhcach1}
                <p class="dd">${item.tinhcach2}</p>
                </p>
            </section>
            </div>
            <div class="u my-[20px]">
            <section class="text-center">
                <p class="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg><p>
                <h3 class="text-[18px] font-[700]">Sở Thích,Đam Mê</h3>
                <i class="fa fa-home" style="font-size: 30px;"></i>
                <p class="dd">
                ${item.liker1}
                <p class="dd">${item.liker2}</p>
                </p>
            </section>
            </div>
            `
    })}
            </div>
        </div>
  `
}

export default aboutpage