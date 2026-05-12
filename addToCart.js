//----------------------------------option 1-----------------------------------
import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductsFromLS();

export const addToCart = (event, id, stock, price) => {
     let arrLocalStorageProduct = getCartProductsFromLS();

     const curCardElem = document.querySelector(`#card${id}`);
     let productQuantity = parseInt(curCardElem.querySelector(".productQuantity").textContent);
     console.log(productQuantity);

     let existingProd = arrLocalStorageProduct.find(
          (curProd) => curProd.id === id
     );
     if (existingProd && productQuantity > 1) {
          productQuantity = existingProd.productQuantity + productQuantity;
          price = price * productQuantity;

          let updatedCart = { id, productQuantity, price };
          updatedCart = arrLocalStorageProduct.map((curProd) => {
               return curProd.id === id ? updatedCart : curProd;
          });

          localStorage.setItem('cartProductsLS', JSON.stringify(updatedCart));
     }
     if (existingProd) {
          return ((productQuantity === 1) ? alert("Product already in cart") : false);
     }


     price = price * productQuantity;

     arrLocalStorageProduct.push({ id, productQuantity, price });
     localStorage.setItem('cartProductsLS', JSON.stringify(arrLocalStorageProduct));

     updateCartValue(arrLocalStorageProduct);
     showToast("add", id);
}

