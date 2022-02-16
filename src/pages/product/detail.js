import { get } from "../../api/products";

const DetailProductPage = {
  async render(id) {
    const { data } = await get(id);
    return `
        <div class="max-w-7xl mx-auto py-10 grid grid-cols-2 gap-8">
            <div>
                <img src="${data.img}" />
            </div>
            <div>
                <h1 class="text-4xl font-bold text-indigo-500">${data.name}</h1>
                
                <p class="my-8">${data.desc}</p>
                <p class="font-bold text-3xl">${data.price}</p>
                <button id="btnAddToCart" class="block bg-red-700 text-white text-2xl uppercase w-full py-5 my-5">Thêm giỏ hàng</button>
            </div>
        </div>
            
        `;
  },
};
export default DetailProductPage;
