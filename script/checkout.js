import {
  cart,
  removeCartItem,
  saveToLocalStorage,
  updateCartQuantity,
  minusQuantity,
  plusQuantity,
} from "../data/cart.js";
import { products } from "../data/products.js";
function checkoutGrid() {
  const container = document.querySelector(".js-summary-card");

  if (cart.length === 0) {
    container.innerHTML = "products empty";
    return;
  }

  let checkoutHtml = "";
  cart.forEach((item) => {
    let matchingproduct;
    products.forEach((product) => {
      if (product.productId === item.productId) {
        matchingproduct = product;
      }
    });
    if (cart.length === 0) {
      document.querySelector(".js-summary-card").innerHTML = "products empty";
    } else {
      const html = `
   
          <div class="summary-item js-summary-item${matchingproduct.productId}">
            <img
              src="${matchingproduct.image}"
              alt=""
            /> 
            <div>
              <h2>${matchingproduct.name}</h2>
            <div class="summary-cartQuantity">
              <p>Qty</p>
              <div><span class="js-minus-quantity" data-product-id="${matchingproduct.productId}">-</span>   ${item.quantity}    <span class="js-plus-quantity" data-product-id="${matchingproduct.productId}">+</span></div>  
            </div>
                 <strong>$${matchingproduct.price}</strong>
               
              <button class="delete-item js-delete-item" 
               data-product-id="${matchingproduct.productId}"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
            </div>
          </div>
    `;
    }
    checkoutHtml += html;
    saveToLocalStorage();
  });
  container.innerHTML = checkoutHtml;

  function deleteItems() {
    const deleteItem = document.querySelectorAll(".js-delete-item");

    deleteItem.forEach((Delete) => {
      Delete.addEventListener("click", () => {
        const productId = Delete.dataset.productId;
        const items = document.querySelector(`.js-summary-item${productId}`);
        removeCartItem(productId);
        items.remove();
        updateCartQuantity();
      });
    });
  }
  deleteItems();

  const minusQty = document.querySelectorAll(".js-minus-quantity");
  minusQty.forEach((minus) => {
    minus.addEventListener("click", () => {
      const productId = minus.dataset.productId;
      minusQuantity(productId);
      updateCartQuantity();
    });
  });
  const plusQty = document.querySelectorAll(".js-plus-quantity");
  plusQty.forEach((plus) => {
    plus.addEventListener("click", () => {
      const productId = plus.dataset.productId;
      plusQuantity(productId);
      updateCartQuantity();
      checkoutGrid();
    });
  });

  updateCartQuantity();
}
checkoutGrid();
