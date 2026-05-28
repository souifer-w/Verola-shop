export const cart = JSON.parse(localStorage.getItem("cart")) || [
  {
    productId: "PRD-1001",
    quantity: 2,
  },
];
export function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
