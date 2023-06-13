
import { aboutAll } from "../../../api/about"
import layoutPage from "../../../component/layout"
import { useEffect, useState } from "../../../lib"

const aboutHome = () => {
    const [product, setproduct] = useState([])
    useEffect(() => {
        aboutAll().then(({ data }) => setproduct(data))
    }, [])

    return `
    <div class="flex justify-self-start ">
        <div class="">${layoutPage()}</div>
            <div class="overflow-x-auto w-full bg-gray-50">
            <h1 class="text-center text-3xl font-[700] py-[20px]">ABout Amin</h1>
            ${product.map((item) => {
        return `
            <div class="my-[18px] px-[20px]">
                <label class="text-[18px] font-[700]" for="">Mốc Thời Gian 1</label>
                <p class="border-b-[#a5a5a5] border-[#fff] border-2 py-[7px] text-[15px]">${item.time1}</p>
            </div>

            <div class="my-[18px] px-[20px]">
                <label class="text-[18px] font-[700]" for="">Mốc Thời Gian 2</label>
                <p class="border-b-[#a5a5a5] border-[#fff] border-2 py-[7px] text-[15px]">${item.time2}</p>
            </div>

            <div class="my-[18px] px-[20px]">
                <label class="text-[18px] font-[700]" for="">Tính Cách 1</label>
                <p class="border-b-[#a5a5a5] border-[#fff] border-2 py-[7px] text-[15px]">${item.tinhcach1}</p>
            </div>

            <div class="my-[18px] px-[20px]">
                <label class="text-[18px] font-[700]" for="">Tính Cách 2</label>
                <p class="border-b-[#a5a5a5] border-[#fff] border-2 py-[7px] text-[15px]">${item.tinhcach2}</p>
            </div>

            <div class="my-[18px] px-[20px]">
                <label class="text-[18px] font-[700]" for="">Sở Thích</label>
                <p class="border-b-[#a5a5a5] border-[#fff] border-2 py-[7px] text-[15px]">${item.liker1}</p>
            </div>

            <div class="my-[18px] px-[20px]">
                <label class="text-[18px] font-[700]" for="">Đam mê</label>
                <p class="border-b-[#a5a5a5] border-[#fff] border-2 py-[7px] text-[15px]">${item.liker2}</p>
            </div>

            
            <div class="text-center py-[20px]">
            <a href="/admin/about/update/${item.id}" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#7b9569] rounded hover:bg-white group">
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Update</span>
            </a>
            <div/>


            `
    })}
            </div>

        </div>
    </div>
  `
}

export default aboutHome