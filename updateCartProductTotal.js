import { getCartProductsFromLS } from "./getCartProducts";
let productSubTotal = document.querySelector('.productSubTotal')
let productFinalTotal = document.querySelector('.productFinalTotal')

export const updateCartProductTotal = () => {
     let cartProducts = getCartProductsFromLS();

     let totalProductPrice = cartProducts.reduce((accum, curElem) => {
          let productPrice = curElem.price || 0;
          return accum + productPrice;
     }, 0)
     totalProductPrice = parseInt(totalProductPrice)
     productSubTotal.textContent = `₹${totalProductPrice}`;
     productFinalTotal.textContent = `₹${(totalProductPrice + 50)}`
}