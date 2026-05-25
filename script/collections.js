import { products } from "../data/products.js";
import { cart } from "../data/cart.js";
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
            <a class="button button-dark cart-button js-cart-button"data-product-id="${product.productId}" ><span class="cart-icon mini" aria-hidden="true"></span>Add to Bag</a>
          </div>
        </article>
        `;

    collectionsHtml += html;
  });
  document.querySelector(".js-shop-grid").innerHTML = collectionsHtml;
  function addtocart() {
    const addBtn = document.querySelector(".js-cart-button");
    addBtn.addEventListener("click", () => {
      const productId = data.set.productId;
      let matchingItem;
      let quantity;
      if (matchingItem) {
        cart.forEach((cartItem) => {
          quantity = cartItem.quantity;
          quantity += 1;
        });
      } else if (!matchingItem) {
        cart.push({
          productId: productId,
          quantity: quantity,
        });
      }
    });
  }
}
collectionsGrid();
