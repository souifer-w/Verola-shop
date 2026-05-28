import { cart, saveToLocalStorage } from "../data/cart.js";
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
    <p class="eyebrow dark">Your Bag</p>
          <div class="summary-item">
            <img
              src="${matchingproduct.image}"
              alt="Heritage silver watch"
            />
            <div>
              <h2>${matchingproduct.name}</h2>
              <p>Qty${item.quantity}</p>
            </div>
            <strong>$${matchingproduct.price}</strong>
          </div>
    `;
    checkoutHtml += html;
  });
  document.querySelector(".js-summary-card").innerHTML = checkoutHtml;
  saveToLocalStorage();
}
checkoutGrid();
