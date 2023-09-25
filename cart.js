function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous contents

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `<p>${item.name} - $${item.price.toFixed(2)}</p><button onclick="removeFromCart(${index})">Remove</button>`;
            cartItems.appendChild(cartItem);
        });
    }
}
