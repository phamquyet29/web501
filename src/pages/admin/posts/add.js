import axios from "axios";
import { add } from "../../../api/posts";

const AddPost = {
    render(){
        return /*html*/`
            <form id="formAddPost">
                <input type="text" id="title-post" class="border border-black" placeholder="Title" /><br />
                <input type="file" id="img-post" class="border border-black" placeholder="Title" /><br />
                <img src="" id="img-preview"/>
                <textarea name="" id="desc-post" class="border border-black" cols="30" rows="10"></textarea><br />
                <button>Tạo bài viết</button>
            </form>
        `
    },
    afterRender(){
        const formAddPost = document.querySelector('#formAddPost');
        const CLOUDINARY_PRESET_KEY = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        const imgPost = document.querySelector('#img-post');
        const imgPreview = document.querySelector('#img-preview')

        let imgLink = "";


        imgPost.addEventListener('change', function(e){
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formAddPost.addEventListener('submit', async function(e){
            e.preventDefault();

            const file = imgPost.files[0];
            if(file){
                // lấy giá trị của file và gán vào object formData
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', CLOUDINARY_PRESET_KEY);

                // call API cloudinary để đẩy ảnh lên
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                })
                imgLink = data;
            }
            // call api thêm bài viết
            add({
                title: document.querySelector('#title-post').value,
                img: imgLink ? imgLink : "",
                desc: document.querySelector('#desc-post').value,
            });
        })
    }
}
export default AddPost;