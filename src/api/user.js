import { intance } from "./intance"


export const signin = (email, password) => {
    return intance.get(`/user`, { email, password })
}
export const signup = (user) => {
    return intance.post(`/user`, user)
}