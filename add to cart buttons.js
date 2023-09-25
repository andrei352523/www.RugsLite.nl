// ... Rest of your code ...

function addToCart(event, productName, price) {
    event.stopPropagation();  // Stop event propagation

    const item = {
        name: productName,
        price: price
    };
    cart.push(item);
    updateCartCounter();
    displayCart();
    saveCart(); // Save the cart to localStorage
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCounter();
    displayCart();
    saveCart(); // Save the cart to localStorage after removing an item
}

// Updated event listener for all buttons with class "add-to-cart"
document.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'BUTTON' && event.target.classList.contains('add-to-cart')) {
        const productName = event.target.parentElement.querySelector('h2').innerText;
        const productPrice = parseFloat(event.target.parentElement.querySelector('button').innerText.split(' ')[2]);
        addToCart(event, productName, productPrice);
    }
});
