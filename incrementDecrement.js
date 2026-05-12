import { getCartProductsFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, price, stock) => {

     let curCardElement = document.querySelector(`#card${id}`)
     let productQuantityElem = curCardElement.querySelector('.productQuantity')
     let productPriceElem = curCardElement.querySelector('.productPrice')



     let localCartProd = getCartProductsFromLS();
     let existingProd = localCartProd.find((curProd) => curProd.id === id)

     let quantity = 1;
     let localStoragePrice = 0

     if (existingProd) {
          quantity = existingProd.productQuantity
          localStoragePrice = existingProd.price
     }

     if (event.target.classList.contains('cartIncrement')) {
          if (quantity < stock) {
               quantity += 1;
               // localStoragePrice += price;
          }
     }
     if (event.target.classList.contains('cartDecrement')) {
          if (quantity > 1) {
               quantity -= 1
               // localStoragePrice -= price;
          }
     }
     localStoragePrice = price * quantity
     localStoragePrice = Number(localStoragePrice.toFixed(2))

     let updatedCart = { id, productQuantity: quantity, price: localStoragePrice }
     updatedCart = localCartProd.map((curProd) => {
          return curProd.id === id ? updatedCart : curProd
     })
     localStorage.setItem('cartProductsLS', JSON.stringify(updatedCart))

     productQuantityElem.textContent = quantity;
     productPriceElem.textContent = localStoragePrice

     updateCartProductTotal();
}