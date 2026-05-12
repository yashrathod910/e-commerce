let cartCountElem = document.querySelector('#cartValue')
export const updateCartValue = (cartProducts) => {
     cartCountElem.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>${cartProducts.length}`;
}