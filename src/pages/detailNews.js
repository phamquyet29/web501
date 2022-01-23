import axios from 'axios';

const DetailNewsPage = {
    async render(id) {
        console.log(id);
        // const result = data.find((post) => post.id === id);
        const { data } = await axios.get('http://localhost:3001/posts/'+id);
        return `
            <h1>${data.title}</h1>
            <img src="${data.img}" />
            <p>${data.desc}</p>
        `;
    },
};
export default DetailNewsPage;