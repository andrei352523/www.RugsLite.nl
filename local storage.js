let cart = [];
let products = [
    { name: 'Product 1', price: 20.00 },
    { name: 'Product 2', price: 25.00 },
    { name: 'Product 3', price: 30.00 }
];

function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    const savedProducts = localStorage.getItem('products');

    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCounter();
        displayCart();
    }

    if (savedProducts) {
        products = JSON.parse(savedProducts);
        displayProducts();
    }
}

function saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('products', JSON.stringify(products));
}

// ... Rest of your code ...

document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    displayProducts();
});

// ... Rest of your code ...
