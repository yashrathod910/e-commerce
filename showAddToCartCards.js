import products from "./api/products.json";
import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { getCartProductsFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

let cartProducts = getCartProductsFromLS();

let filterProducts = products.filter((curProd) => {
     return cartProducts.some((cartProd) => cartProd.id === curProd.id);
})

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProducts = () => {
     filterProducts.forEach((curProduct) => {
          const { category, id, image, name, price, stock} = curProduct;
          let productClone = document.importNode(templateContainer.content, true);

          const LSActualData = fetchQuantityFromLS(id, price);

          productClone.querySelector("#cardValue").setAttribute("id", `card${id}`)
          productClone.querySelector('.category').textContent = category;
          productClone.querySelector('.productImage').src = image;
          productClone.querySelector('.productName').textContent = name;

          productClone.querySelector('.productQuantity').textContent = LSActualData.quantity
          productClone.querySelector('.productPrice').textContent = LSActualData.price

          productClone.querySelector('.stockElement').addEventListener('click', (event) => incrementDecrement(event, id, price, stock))

          productClone.querySelector('.remove-to-cart-button').addEventListener('click', () => removeProductFromCart(id));
          cartElement.appendChild(productClone);
     })

};
showCartProducts();

updateCartProductTotal();




