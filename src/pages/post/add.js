import axios from "axios";
import { add } from "../../api/posts";
import Banner from "../../components/banner";
import { reRender } from '../../utils/rerender'
import TablePost from "../tablePost";
import $ from 'jquery';
import validate from 'jquery-validation';

const AddPost = {
    async render() {

        return /* html */`
            <div class="banner">
                ${Banner.render()}
            </div>
            <div>
            <form action="" id="form-add-post">
                <input type="text"
                    id="title-post"
                    class="border border-black"
                    placeholder="Title post"
                    name="title-post"
                > 
                <br />
                <input type="file"
                    id="img-post"
                    class="border border-black"
                    placeholder="Imager post"
                > <br />
                <img src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/>
                <textarea name="" 
                    id="desc-post" 
                    class="border border-black"
                    cols="30" 
                    rows="10"></textarea>
                <button class="bg-blue-500 p-4 inline-block text-white">Thêm bài viết</button>
            </form>
            </div>
        `;
    },
    afterRender(){
        const formAdd = $('#form-add-post');
        const imgPost = document.querySelector('#img-post');
        const imgPreview = document.querySelector("#img-preview");
        let imgLink = "";

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        const CLOUDINARY_PRESET = "jkbdphzy";


        imgPost.addEventListener('change', function(e){
            imgPreview.src = URL.createObjectURL(e.target.files[0])
        });

        formAdd.validate({
            rules: {
               "title-post": {
                   required: true,
                   minlength: 5,
                   maxlength: 15
               }
            },
            messages: {
                "title-post": {
                    required: "Bắt buộc phải nhập trường này anh ei",
                    minlength: "Ít nhất phải 5 ký tự anh ei",
                    maxlength: "Không được vượt quá 15 ký tự anh ei"
                }
            },
            submitHandler: () => {

                async function addPostHandler(){
                    // Lấy giá trị input file
                    const file = imgPost.files[0];
                    if(file){
                        // append vào object formData
                        const formData = new FormData();
                        formData.append('file', file);
                        formData.append('upload_preset', CLOUDINARY_PRESET)

                        // call api cloudinary
                        const { data } = await axios.post(CLOUDINARY_API, formData, {
                            headers: {
                                "Content-Type": "application/form-data"
                            }
                        });
                        imgLink = data.url;
                    }

                    
                    // call api thêm bài viết
                    add({
                        "title": document.querySelector('#title-post').value,
                        "img": imgLink || "",
                        "desc": document.querySelector('#desc-post').value
                    });
                    // document.location.href="/#/admin/news";
                    // await reRender(AdminPost, "#app");
                }
                addPostHandler();
            }
        })
        // formAdd.addEventListener('submit', async (e) => {
        //     e.preventDefault();

        
        // })
    }
};
export default AddPost;