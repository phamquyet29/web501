import { get } from '../../api/product';

const DetailProductPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            <div>
                <h1 class="text-2xl font-bold">${data.name}</h1>
                <img src="${data.img}" />
                <p>${data.desc}</p>
                <p>${data.price}</p>
                <button class="inline-block px-4 py-3 text-white bg-indigo-500 text-lg">Thêm vào giỏ hàng</button>
            </div>
        `
    },
};
export default DetailProductPage;