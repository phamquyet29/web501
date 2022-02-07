import { get } from "../api/posts";

const DetailPage = {
  async render(id) {
    const { data } = await get(id);
    return `
            <div>Detail Page</div>
            <h1>${data.title}</h1>
            <img src="${data.img}" />
            <p>${data.desc}</p>
        `;
  },
};
export default DetailPage;
