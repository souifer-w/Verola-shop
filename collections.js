import { products } from "./products.js";

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
            <a class="button button-dark cart-button" ><span class="cart-icon mini" aria-hidden="true"></span>Add to Bag</a>
          </div>
        </article>
        `;

    collectionsHtml += html;
  });
  document.querySelector(".js-shop-grid").innerHTML = collectionsHtml;
}
collectionsGrid();
