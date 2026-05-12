//---------------------------option 1----------------------------------
export const homeQuantityToggle = (event, id, stock) => {
     const curCardElem = document.querySelector(`#card${id}`);

     const productQuantity = curCardElem.querySelector(".productQuantity");
     if (event.target.classList.contains('cartIncrement')) {
          if (parseInt(productQuantity.textContent) < stock) {
               productQuantity.textContent = parseInt(productQuantity.textContent) + 1;
          }
     }
     if (event.target.classList.contains('cartDecrement')) {
          if (parseInt(productQuantity.textContent) > 0) {
               productQuantity.textContent = parseInt(productQuantity.textContent) - 1;
          }
     }
}
