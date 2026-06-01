import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
let itemsHtml = "";
cart.forEach((item) => {
  let matchingproduct;
  products.forEach((product) => {
    if (product.productId === item.productId) {
      matchingproduct = product;
    }
  });

  const html = `
   
          <div class="summary-item large-item">
              <img
                src="${matchingproduct.image}"
                alt="Noir perfume bottle"
              />
              <div>
                <h3>${matchingproduct.name}</h3>
                <p>${matchingproduct.topic} · Qty ${item.quantity}</p>
              </div>
              <strong>$${matchingproduct.price}</strong>
            </div>
    `;
  itemsHtml += html;
});
document.querySelector(".js-checkout-panel").innerHTML = itemsHtml;
