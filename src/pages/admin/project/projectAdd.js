
import axios from "axios"
import { router, useEffect } from "../../../lib"
import { getAdd } from "../../../api/product"
import layoutPage from "../../../component/layout"


const projectAdd = () => {

    useEffect(() => {
        const form = document.getElementById("form")
        const name = document.getElementById("name")
        const img = document.getElementById("img")


        form.addEventListener("submit", async (e) => {
            e.preventDefault()
            const url = await uplodFiles(img.files)
            const addnew = {
                img: url,
                name: name.value
            }
            if (name.value == "") {
                alert('Bạn phải nhập đầy đủ các trường')
                return;
            } else {
                getAdd(addnew).then(() => router.navigate("/admin"))
                alert("thêm sản phẩm thành công")
            }

        })
    }, [])

    const uplodFiles = async (files) => {
        const CLOUD_NAME = "dnugoxp2r";
        const PRESES_NAME = "quyet29";
        const FOLDER_NAME = "profile"
        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

        const formData = new FormData();
        formData.append("upload_preset", PRESES_NAME);
        formData.append("folder", FOLDER_NAME);

        for (const file of files) {
            formData.append("file", file)
            const response = await axios.post(api, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            urls.push(response.data.secure_url)
        }
        return urls
    }

    return `
    <div class="flex justify-self-start bg-[#ffff]">
    <div>${layoutPage()}</div>
    <div class="flex justify-center ">
        <div class=" ml-[80px] mt-[100px] w-full ">
            <h1 class="text-center text-3xl py-[40px] font-[700]">Add New Projects</h1>
            <form action="" id="form">
            
            <input
                id="name"
                class="w-full h-10 px-3 mb-2 text-base text-gray-700  border rounded-lg focus:shadow-outline"
                type="text" 
                placeholder="Project Name"
            />

            <div class="relative h-10 w-full my-[15px]">
              <input
                type="file" multiple 
                id="img"
                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Image
              </label>
            </div>
            <button type="submit" class="relative px-5 py-2 font-medium text-white group">
            
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
            <span class="relative">add new</span>
         
            </button>
            
            </form>
        </div>
        <div>
        <img class="ml-[40px] mt-[100px]" src="https://res.cloudinary.com/dwp7umncy/image/upload/v1680968215/ass_ts_nodejs/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6669742f632f3138342f3138342f312a495247486d69477361313673746564517649615a66772e676966_ffdd44.gif" alt="">
        </div>
    </div>
    </div>
    `
}

export default projectAdd