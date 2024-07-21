const cart = [];
//Creating an array of the objects
//a alert message asking the quantity of the product
function addToCart(productId, productName, productPrice, productImage) {
    const quantityInput = prompt("Number of sofa:");
    const quantity = parseInt(quantityInput, 10);
    if (isNaN(quantity) || quantity <= 0) {
        alert("Invalid quantity entered.");
        return;
    }
//products being allowed to be added on the cart,and able to add on to the existing product by its quantity
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: quantity, image: productImage });
    }
    updateCart();
}
//Allows the cart to remove an item/product on the cart(operator ==)
function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
    }
    updateCart();
}

function clearCart() {
    cart.length = 0;
    updateCart();
}
//calling the function declared on clearCart, removeFromCart 
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    
//creating/calling a list of items with their objects from the index.html file(using id="")
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.image}" alt="Item Image"></td>
            <td>${item.name}</td>
            <td>R${item.price}</td>
            <td>${item.quantity}</td>
            <td>R${item.price * item.quantity}</td>
            <td><button onclick="removeFromCart('${item.id}')">Remove</button></td>
        `;
        cartItems.appendChild(row);
        total += item.price * item.quantity;
    });

    document.getElementById('total').innerText = `Total: R${total}`;
}

//A function that allows the cart to open and close, also with its variables 
function cartIcon() {
    document.getElementById('cart').scrollIntoView();
}
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const cartIcon = document.getElementById('cart-icon');
    const closeBtn = document.getElementById('close-btn');

    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.toggle('open');
    });

    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.remove('open');
    });
});
