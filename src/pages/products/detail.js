import { get } from '../../api/product';
import { addToCart } from '../../utils/cart';
import toastr from 'toastr';
import "toastr/build/toastr.min.css";


const DetailProductPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            <div>
                <h1 class="text-2xl font-bold">${data.name}</h1>
                <img src="${data.img}" />
                <p>${data.desc}</p>
                <p>${data.price}</p>
                <input type="number" id="inputQuantity" value="1" class="border border-black" />
                <button id="btnAddToCart" class="inline-block px-4 py-3 text-white bg-indigo-500 text-lg">Thêm vào giỏ hàng</button>
            </div>
        `
    },
    afterRender(id){
        const btnAddToCart = document.querySelector('#btnAddToCart');
        const inputQuantity = document.querySelector('#inputQuantity');

        btnAddToCart.addEventListener('click', async () => {
            const { data } = await get(id);
            addToCart({...data, quantity: +inputQuantity.value}, function(){
                toastr.success("Thêm thành công");
            });
        })
    }
};
export default DetailProductPage;