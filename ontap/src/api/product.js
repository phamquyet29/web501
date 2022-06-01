import instance from './config';

export const getAll = () => {
    return instance.get('/products');
};
export const get = (id) => {
    return instance.get(`/products/${id}`);
};
export const remove = (id) => {
    return instance.delete(`/products/${id}`);
};
export const add = (product) => {
    return instance.post(`/products/`, product);
};
export const update = (product) => {
    return instance.put(`/products/${product.id}`, product);
};

// export const productAPI = {
//     getAll: () => {
//         return instance.get('/products');
//     },
// };
