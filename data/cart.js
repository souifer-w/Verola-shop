export let cart = JSON.parse(localStorage.getItem("cart")) || [];
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
export function minusQuantity(productId) {
  cart.forEach((item) => {
    if (item.quantity < 1) {
      return;
    }
    if (item.productId === productId) {
      item.quantity -= 1;
    }
  });
  updateCartQuantity();
  saveToLocalStorage();
}
export function plusQuantity(productId) {
  cart.forEach((item) => {
    if (item.quantity > 1000) {
      return;
    }
    if (item.productId === productId) {
      item.quantity += 1;
    }
  });
  updateCartQuantity();
  saveToLocalStorage();
}
updateCartQuantity();
