import news from "../data";

const News = {
    render() {
        return fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(data => {
                return /* html */`
                    <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Tin tức học tập</h2>
                    <div class="grid grid-cols-3 gap-8">
                        ${data.map((post) => `
                        <div class="border p-3">
                            <a href="/product/${post.id}"><img src="${post.img}" alt="" /></a>
                            <h3 class="my-3"><a href="/product/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </div>
                        `).join("")}
                        
                    </div>
                    
                    `;
            })
        
    },
};
export default News;