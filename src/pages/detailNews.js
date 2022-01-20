const DetailNewsPage = {
    async render(id) {
        // const result = data.find((post) => post.id === id);
        const response = await fetch('http://localhost:3001/posts/'+id);
        const data = await response.json();
        return `
            <h1>${data.title}</h1>
            <img src="${data.img}" />
            <p>${data.desc}</p>
        `;
    },
};
export default DetailNewsPage;