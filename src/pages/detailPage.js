import { getOne } from "../api/product"
import { useEffect, useState } from "../lib"

const detailPage = ({ data: { id } }) => {
    const [product, setproduct] = useState({})
    useEffect(() => {
        getOne(id).then(({ data }) => setproduct(data))
    }, [])
    return `

    <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="${product.img}">
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">PROJECT NAME</h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${product.name}</h1>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                
                
                </div>
                <div class="">
                <a href="https://github.com/HuTao2k3/da1_nhom2"><button class=" ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">View on Git</button></a>
                <a href="/" class="relative inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Back Home</span>
                <span class="relative invisible">Back Home</span>
                </a>
                </div>
            </div>
            </div>
        </div>
    </section>
    `
}

export default detailPage