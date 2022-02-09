import instance from './instance';

export const signup = (user) => {
    const url = "/signup";
    return instance.post(url, user);
}