import { updateCartQuantity } from "../data/cart.js";
import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
const container = document.querySelector(".js-orders-container");
const orders = JSON.parse(localStorage.getItem("orders")) || [];

if (orders.length === 0) {
  container.innerHTML = "<p>No orders yet.</p>";
} else {
  let html = "";

  orders.forEach((order) => {
    order.items.forEach((item) => {
      const matchingProduct = products.find(
        (product) => product.productId === item.productId,
      );
      html += `
     <div class="order-card">
  <img
    class="order-image"
    src="${matchingProduct.image}"
    alt="${matchingProduct.name}"
  />

  <div class="order-info">
    <h3 class="order-title">${matchingProduct.name}</h3>

    <p class="order-id">Order #${order.id}</p>
    <p class="order-date">Date: ${order.date}</p>

    <span class="order-qty">Qty: ${item.quantity}</span>
  </div>
</div>
    `;
    });
  });
  container.innerHTML = html;
}

updateCartQuantity();
