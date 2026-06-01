import {
  cart,
  removeCartItem,
  saveToLocalStorage,
  updateCartQuantity,
} from "../data/cart.js";
import { products } from "../data/products.js";
function checkoutGrid() {
  let checkoutHtml = "";
  cart.forEach((item) => {
    let matchingproduct;
    products.forEach((product) => {
      if (product.productId === item.productId) {
        matchingproduct = product;
      }
    });

    const html = `
   
          <div class="summary-item js-summary-item${matchingproduct.productId}">
            <img
              src="${matchingproduct.image}"
              alt="Heritage silver watch"
            /> 
            <div>
              <h2>${matchingproduct.name}</h2>
              <p>Qty${item.quantity}</p>
              <button class="delete-item js-delete-item" 
               data-product-id="${matchingproduct.productId}">Xc</button>
            </div>
            <strong>$${matchingproduct.price}</strong>
           
          </div>
    `;
    checkoutHtml += html;
  });
  document.querySelector(".js-summary-card").innerHTML = checkoutHtml;
  saveToLocalStorage();
  updateCartQuantity();
  function deleteItems() {
    const deleteItem = document.querySelectorAll(".js-delete-item");

    deleteItem.forEach((Delete) => {
      Delete.addEventListener("click", () => {
        const productId = Delete.dataset.productId;
        const items = document.querySelector(`.js-summary-item${productId}`);
        removeCartItem(productId);
        items.remove();
      });
    });
  }
  deleteItems();
}
checkoutGrid();
