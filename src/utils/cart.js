let cart = [];
if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
}

export const addToCart = (newProduct, next) => {
    const existProduct = cart.find(item => item.id === newProduct.id);
    if(!existProduct){
        cart.push(newProduct);
    } else {
        existProduct.quantity += newProduct.quantity
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    next();
}
export const increaseQuantity = (id, next) => {
    cart.find(item => item.id === +id).quantity++
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}