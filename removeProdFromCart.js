import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id) => {
     let cartProducts = getCartProductsFromLS();
     cartProducts = cartProducts.filter((curValue) => curValue.id !== id);

     localStorage.setItem('cartProductsLS', JSON.stringify(cartProducts))
     let removeDiv = document.getElementById(`card${id}`)
     removeDiv ? removeDiv.remove() : false;

     showToast("delete", id);

     updateCartValue(cartProducts);
     updateCartProductTotal();
}