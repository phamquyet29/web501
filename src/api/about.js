import { intance } from "./intance"


export const aboutAll = () => {
    return intance.get(`/about`)
}
export const aboutOne = (id) => {
    return intance.get(`/about/${id}`)
}
export const aboutUpdate = (product) => {
    return intance.put(`/about/${product.id}`, product)
}
export const aboutDelete = (id) => {
    return intance.delete(`/about/${id}`)
}