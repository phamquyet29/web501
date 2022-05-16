import data from '@/data';

const ProductDetail = {
    render(id) {
        // Tìm id trong mảng data
        const product = data.find((item) => item.id === id);
        // nếu không có thì return về string not found
        if (!product) return `<div>Not found</div>`;
        // ngược lại nếu có trả về dữ liệu
        return `${product.name}`;
    },
};
export default ProductDetail;
