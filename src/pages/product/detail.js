import { get } from "../../api/product";

const DetailProductPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            <h1>${data.name}</h1>
            <img src="${data.img}" />
            <div>${data.desc}</div>
            <button class="inline-block px-4 py-3 text-white bg-indigo-500 rounded hover:bg-indigo-700">Add to cart</button>
        `
    },
};
export default DetailProductPage;
