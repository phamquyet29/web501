
import { getAll, getDelete } from "../../../api/product"
import layoutPage from "../../../component/layout"
import { useEffect, useState } from "../../../lib"


const projectHome = () => {
    const [product, setproduct] = useState([])
    useEffect(() => {
        getAll().then(({ data }) => setproduct(data))
    }, [])
    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove")
        console.log(btns);
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const confirmed = confirm("Bạn có chắc chắn muốn xoá ?");
                if (confirmed) {
                    const addnew = product.filter((proitem) => {
                        return proitem.id != id
                    })
                    setproduct(addnew);
                    getDelete(id);
                    alert('xoá thành công')
                }
            })
        }

    })

    return `
    <div class="flex justify-self-start ">
    <div class="">${layoutPage()}</div>
    <div class="overflow-x-auto w-full bg-gray-50">
        <div class="relative overflow-x-auto">
        <h1 class="text-3xl font-[700] text-center py-[40px]">Project Admin</h1>
        <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 text-center">
                        Project name
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                        Image
                    </th>
                    <th scope="col" class="px-6  w-3/12 py-3 text-center">
                    
                    <a href="/admin/projects/add" class="relative inline-flex items-center px-10 py-1 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative">Add Project</span>
                    </a>                    
                    </th>
                </tr>
            </thead>
            <tbody>
            ${product.map((item) => {
        return `
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                    ${item.name}
                    </th>
                    <td class="px-6 py-4 flex justify-center">
                    <img class="w-[200px]" src=" ${item.img}" alt="">
                    </td>
                    <td class="px-6 py-4 ">
                    <a href="/admin/projects/update/${item.id}" class=" rounded ml-[40px] px-2 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                    <span class="absolute right-0 w-2 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span class="relative">EDIT</span>
                    </a>

                    <button data-id="${item.id}" class=" btn-remove ml-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >Delete</button>
         
                    </td>
                </tr>
                `
    }).join("")}
            </tbody>
        </table>
        </div>

  </div>
    </div>
  `
}

export default projectHome