let cart = [];

function updateCartCounter() {
    const cartCounter = document.getElementById('cart-counter');
    cartCounter.innerText = cart.length;
}

function addToCart(productName, price) {
    const item = {
        name: productName,
        price: price
    };
    cart.push(item);
    updateCartCounter();
    alert(`${productName} added to cart!`);
    console.log('Cart:', cart);
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous contents

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `<p>${item.name} - $${item.price.toFixed(2)}</p><button onclick="removeFromCart(${cart.indexOf(item)})">Remove</button>`;
            cartItems.appendChild(cartItem);
        });
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCounter();
    displayCart();
}

const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.parentElement.querySelector('h2').innerText;
        const productPrice = parseFloat(event.target.parentElement.querySelector('button').innerText.split(' ')[2]);
        addToCart(productName, productPrice);
        displayCart();
    });
});
