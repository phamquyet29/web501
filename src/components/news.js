const News = {
    render() {
        const API = "https://5e79b4b817314d00161333da.mockapi.io/posts";
        return fetch(API)
            .then((response) => response.json())
            .then((data) => /* html */` <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Tin tức học tập</h2>
                    <div class="grid grid-cols-3 gap-8">
                        ${data.map((post) => `
                        <div class="border p-3">
                            <a href="/news/${post.id}"><img src="${post.img}" alt="" /></a>
                            <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </div>
                        `).join("")}
                    </div>
            `);
    },
};
export default News;