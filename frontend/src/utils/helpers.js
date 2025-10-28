// This file contains utility functions used throughout the application.

export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
};

export const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const isAuthenticated = (user) => {
    return user && user.token ? true : false;
};

export const getLocalStorageCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

export const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};