import Banner from "../components/Banner";
import Header from "../components/Header";
import { posts } from "../dataFake";

const HomePage = () => {
    return `
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            ${Banner()}
            <div>
                <h2>Bài viết</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${posts
                        .map(function (post) {
                            return `<div>
                            <h3>${post.title}</h3>
                            <p>${post.content}</p>
                        </div>`;
                        })
                        .join("")}
                </div>
            </div>
        </div>
    `;
};

export default HomePage;
