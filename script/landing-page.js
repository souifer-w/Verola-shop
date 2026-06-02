import { products } from "../data/products.js";
import { addtocart } from "../data/cart.js";
let landingHtml = "";
products.forEach((product) => {
  landingHtml += `  
  <div class="product-landing-item js-product-landing-item" id="${product.productId}">
  <div class="landing-media">
          <img src="${product.images[0]}" alt="Heritage Silver Watch main view" />
          <img src="${product.images[1]}" alt="Silver watch worn on wrist" />
          <img src="${product.images[2]}" />
        </div>
        <div class="landing-copy">
          <p class="eyebrow dark">${product.topic}</p>
          <h2>${product.name}</h2>
          <p class="detail-price">$${product.price}</p>
          <p>${product.description}</p>
          <ul>
            <li>${product.features[0]}</li>
            <li>${product.features[1]}</li>
            <li>${product.features[2]}</li>
          </ul>
          <a class="button button-dark js-cart-button cart-button"  
           data-product-id="${product.productId}"><span class="cart-icon mini" aria-hidden="true"></span>Add to Cart</a>
        </div>
        </div>`;
});
document.querySelector(".js-landing-items").innerHTML = landingHtml;
const addBtn = document.querySelectorAll(".js-cart-button");
addBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productId = btn.dataset.productId;
    addtocart(productId);
  });
});
