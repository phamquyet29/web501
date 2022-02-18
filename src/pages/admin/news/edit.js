import { update } from '../../../api/posts';
import { get } from '../../../api/posts';
import axios from 'axios';

const AdminEditPost = {
    async render(id) {
        const { data } = await get(id);
        return `
            <form id="form-edit-post">
                <input type="text" value="${data.title}" id="title-post"/>
                <div class="grid grid-cols-2 gap-8">
                    <div>
                        <input type="file"  
                            class="border border-black"
                            id="img-post"
                        >
                    </div>
                    <div><img width="200" src="${data.img}" id="previewImage" /></div>
                </div>
                <button>Cap nhat</button>
            </form>
        `
    },
    afterRender(id){
        const formEdit = document.querySelector('#form-edit-post');
        const imgPost = document.querySelector("#img-post");
        const imgPreview = document.querySelector('#previewImage');
        let imgUploadedLink = "";


        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(imgPost.files[0])
        });
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();

            const file = imgPost.files[0];
            if(file){
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", "jkbdphzy");
    
                const {data } = await axios({
                    url: "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload",
                    method: "POST",
                    headers: {
                    "Content-Type": "application/x-www-formendcoded",
                    },
                    data: formData,
                });
                imgUploadedLink = data.url
            }
           
            update({
                id, title: document.querySelector('#title-post').value,
                img: imgUploadedLink ? imgUploadedLink : imgPreview.src
            })
            .then((result) => console.log(result.data))
            .catch((error) => console.log(error));
        });
    }
};
export default AdminEditPost;