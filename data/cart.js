export let cart = JSON.parse(localStorage.getItem("cart")) || [
  {
    productId: "PRD-1001",
    quantity: 2,
  },
];
export function addtocart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else if (!matchingItem) {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }

  updateCartQuantity();
  saveToLocalStorage();
}
export function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  cart.forEach((cartItem) => {
    document.querySelector(".cart-count").innerHTML = cartQuantity;
  });
}
export function removeCartItem(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToLocalStorage();
  console.log(newCart);
}
