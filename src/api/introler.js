import { intance } from "./intance"

export const introlAll = () => {
    return intance.get(`/introlers`)
}
export const introlOne = (id) => {
    return intance.get(`/introlers/${id}`)
}
export const introlUpdate = (product) => {
    return intance.put(`/introlers/${product.id}`, product)
}
export const introlDelete = (id) => {
    return intance.delete(`/introlers/${id}`)
}