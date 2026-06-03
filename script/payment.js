import { cart, updateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
let itemsHtml = "";
let totalHtml = "";
let subtotal = 0;
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
  subtotal += matchingproduct.price * item.quantity;
});

document.querySelector(".js-checkout-panel").innerHTML = itemsHtml;
let express = 18;
let estimatedTax = 48;
const total = subtotal + express + estimatedTax;
totalHtml = `
   <p class="eyebrow dark">Final Total</p>
          <div class="summary-lines">
            <p><span>Subtotal</span><strong>$${subtotal}</strong></p>
            <p><span>Express Delivery</span><strong>$${express}</strong></p>
            <p><span>Estimated Tax</span><strong>$${estimatedTax}</strong></p>
            <p class="total"><span>Total</span><strong>$${total}</strong></p>
          </div>
  `;
document.querySelector(".js-summary-card").innerHTML = totalHtml;
updateCartQuantity();
