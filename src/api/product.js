import { intance } from "./intance"

export const getAll = () => {
    return intance.get(`/products`)
}
export const getOne = (id) => {
    return intance.get(`/products/${id}`)
}
export const getAdd = (product) => {
    return intance.post(`/products`, product)
}
export const getUpdate = (product) => {
    return intance.put(`/products/${product.id}`, product)
}
export const getDelete = (id) => {
    return intance.delete(`/products/${id}`)
}
