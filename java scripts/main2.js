function submitForm() {
    const form = document.getElementById('detailsForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    if (form.checkValidity()) {
        thankYouMessage.classList.remove('hidden'); 
    } else {
        form.reportValidity(); 
    }
}



function displayThankYouMessage() {
    const form = document.getElementById('deliveryForm');
    const confirmationMessage = document.getElementById('confirmationMessage');


    if (form.checkValidity()) {
        confirmationMessage.classList.remove('message-hidden'); 
    } else {
        form.reportValidity(); 
    }
}



function displayThankYouMessage() {
    const form = document.getElementById('deliveryForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

 
    if (form.checkValidity()) {
        confirmationMessage.classList.remove('message-hidden'); 
    } else {
        form.reportValidity(); 
    }
}


function submitPaymentForm() {
    const form = document.getElementById('paymentForm');
    const supportMessage = document.getElementById('supportMessage');

 
    if (form.checkValidity()) {
        supportMessage.classList.remove('hidden'); 
    } else {
        form.reportValidity(); 
    }
}



function updateCart() {
    cartItems.innerHTML = ''; 
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });


    totalCost.innerText = `The Total = $${total.toFixed(2)}`;
}




function buyNow() {

    const forms = [
        document.getElementById('detailsForm'),
        document.getElementById('deliveryForm'),
        document.getElementById('paymentForm')
    ];

    for (let form of forms) {
        if (!form.checkValidity()) {
            form.reportValidity(); 
            return; 
        }
    }

    const deliveryDate = document.getElementById('preferred-date').value;

    alert(`Your purchased items will arrive on ${deliveryDate}. Thank you for your support!`);
    cart = []; 
    updateCart(); 
}






function addToCart(item) {

    let cart = JSON.parse(localStorage.getItem("favorites")) || [];


    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);

    if (existingItemIndex >= 0) {

        cart[existingItemIndex].quantity += item.quantity;
    } else {
        cart.push(item);
    }

    localStorage.setItem("favorites", JSON.stringify(cart));

    loadCart();
}


function loadCart() {
    const cartTableBody = document.getElementById("cartItems");
    const savedCart = JSON.parse(localStorage.getItem("favorites"));

    if (!savedCart || savedCart.length === 0) {
        cartTableBody.innerHTML = "<tr><td colspan='5'>Your cart is empty!</td></tr>";
        return;
    }

    cartTableBody.innerHTML = "";
    let total = 0;

    savedCart.forEach(item => {
        const row = document.createElement("tr");

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        row.innerHTML = `
            <td><img src="${item.imageUrl}" alt="${item.name}" style="width: 50px; height: 50px;"></td>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${itemTotal.toFixed(2)}</td>
        `;

        cartTableBody.appendChild(row);
    });

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td colspan="4" style="text-align: right; font-weight: bold;">Total:</td>
        <td style="font-weight: bold;">$${total.toFixed(2)}</td>
    `;
    cartTableBody.appendChild(totalRow);
}


function confirmOrder() {
    const savedCart = JSON.parse(localStorage.getItem("favorites"));
    if (!savedCart || savedCart.length === 0) {
        alert("Your cart is empty! Add items before confirming your order.");
        return;
    }

    alert("Your order has been confirmed! Thank you for shopping with us.");
    window.location.href = "./index.html"; 
}


function handleAddToCartButtonClick() {
    const item = {
        name: "Product 1",
        price: 29.99,
        quantity: 1, 
        imageUrl: "path/to/image.jpg" 
    };

    addToCart(item);
}


window.onload = function () {
    loadCart();
    document.getElementById("confirmOrderButton").addEventListener("click", confirmOrder);


    const addToCartButton = document.getElementById("addToCartButton");
    if (addToCartButton) {
        addToCartButton.addEventListener("click", handleAddToCartButtonClick);
    }
};
