import data from "../data";
import style from "./news.module.css";

const News = {
    render() {
        return fetch("https://5e79b4b817314d00161333da.mockapi.io/posts")
            .then((response) => response.json())
            .then((data) => /* html */`
                    <h2 class="font-semibold text-2xl text-blue-900 my-4 uppercase">Tin tức học lập</h2>
                    <div class=${style.newsDemo}>
                        <div class="grid grid-cols-3 gap-8">
                                ${data.map((post) => `
                                            <div class="${style["news-item"]} border p-4">
                                                <div class="news-img">
                                                    <a href="/news/${post.id}">
                                                        <img src="${post.img}" />
                                                    </a>
                                                </div>
                                                <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500">${post.title}</a></h3>
                                                <p class="text-sm text-gray-600">${post.desc}</p>
                                            </div>
                                    `).join("")}
                        </div>
                    </div>`);
    },
};
export default News;
