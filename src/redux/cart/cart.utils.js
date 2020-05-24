export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemId) => {
  const existingCartItem = cartItems.find((item) => item.id === cartItemId);

  if (existingCartItem) {
    let items = cartItems.map((item) =>
      item.id === cartItemId ? { ...item, quantity: item.quantity - 1 } : item
    );

    return items.filter((item) => item.quantity !== 0);
  }

  return cartItems;
};

export const removeItemFromCheckout = (cartItems, cartItemId) => {
  const existingCartItems = cartItems.filter((item) => item.id !== cartItemId);

  return existingCartItems;
};
