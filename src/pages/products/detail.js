import { get } from '../../api/product';
import { addToCart } from '../../utils/cart';
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const DetailProductPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            <h1 class="text-2xl font-bold">${data.name}</h1>
            <img src="${data.img}" />    
            <p>${data.desc}</p>
            <p>${data.price}</p>
            <input type="number" id="inputValue" class="border border-black" value="1" />
            <button id="btnAddTocart" class="inline text-2xl bg-indigo-500 text-white">Thêm vào giỏ hàng</button>
        `
    },
    afterRender(id){
        const btnAddTocart = document.querySelector('#btnAddTocart');
        const inputValue = document.querySelector('#inputValue');


        btnAddTocart.addEventListener('click', async () => {
            const { data } = await get(id);
            addToCart({...data, quantity: inputValue.value ? +inputValue.value : 1}, function(){
                toastr.success("Thêm vào giỏ hàng thành công!");
            })
            
        })
    }
};
export default DetailProductPage;