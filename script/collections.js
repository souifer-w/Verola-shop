import { products } from "../data/products.js";
import { cart, saveToLocalStorage, updateCartQuantity } from "../data/cart.js";
function collectionsGrid() {
  let collectionsHtml = "";
  products.forEach((product) => {
    const html = `
             <article class="shop-card" id="watches">
          <a class="shop-media">
            <img src="${product.image}">
          </a>
          <div class="shop-info">
            <span>${product.topic}</span>
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <a class="button button-dark cart-button js-cart-button"  
            data-product-id="${product.productId}" ><span class="cart-icon mini" aria-hidden="true"></span>Add to Bag</a>
          </div>
        </article>
        `;

    collectionsHtml += html;
  });
  document.querySelector(".js-shop-grid").innerHTML = collectionsHtml;
  function addtocart() {
    const addBtn = document.querySelectorAll(".js-cart-button");
    addBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = btn.dataset.productId;
        let matchingItem;

        cart.forEach((cartItem) => {
          if (cartItem.productId === productId) {
            matchingItem = cartItem;
          }
        });
        if (matchingItem) {
          cart.forEach((cartItem) => {
            cartItem.quantity++;
          });
        } else if (!matchingItem) {
          cart.push({
            productId: productId,
            quantity: 1,
          });
        }

        updateCartQuantity();

        saveToLocalStorage();
      });
    });
  }
  addtocart();
}
collectionsGrid();
updateCartQuantity();
