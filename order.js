const products = [
    { name: "Paracetamol", category: "Analgesics", price: 5.99, imageUrl: "./Images/images2/1.webp" },
    { name: "Ibuprofen", category: "Analgesics", price: 7.49, imageUrl: "./Images/images2/2.webp" },
    { name: "Asprin", category: "Analgesics", price: 4.99, imageUrl: "./Images/images2/3.jpg" },
    { name: "Naproxen", category: "Analgesics", price: 6.49, imageUrl: "./Images/images2/4.jpg" },
    { name: "Diclofenac", category: "Analgesics", price: 9.99, imageUrl: "./Images/images2/5.png" },
    { name: "Tramadol", category: "Analgesics", price: 11.99, imageUrl: "./Images/images2/6.jpg" },
    
    { name: "Amoxicillin", category: "Antibiotics", price: 12.99, imageUrl: "./Images/images2/7.jpg" },
    { name: "Ciprofloxacin", category: "Antibiotics", price: 15.99, imageUrl: "./Images/images2/8.png" },
    { name: "Cipofloxcin", category: "Antibiotics", price: 18.49, imageUrl: "./Images/images2/9.webp" },
    { name: "Doxycycline", category: "Antibiotics", price: 13.49, imageUrl: "./Images/images2/10.jpg" },
    { name: "Metronidazole", category: "Antibiotics", price: 16.99, imageUrl: "./Images/images2/11.jpg" },
    { name: "Ceftriaxone", category: "Antibiotics", price: 14.99, imageUrl: "./Images/images2/12.avif" },
  
    { name: "Fluoxetine", category: "Antidepressants", price: 19.99, imageUrl: "./Images/images2/13.webp" },
    { name: "Sertraline", category: "Antidepressants", price: 18.49, imageUrl: "./Images/images2/14.jpg" },
    { name: "Citalopram", category: "Antidepressants", price: 21.99, imageUrl: "./Images/images2/15.jpg" },
    { name: "Escitalopram", category: "Antidepressants", price: 20.99, imageUrl: "./Images/images2/16.jpg" },
    { name: "Duloxina", category: "Antidepressants", price: 22.99, imageUrl: "./Images/images2/17.jpg" },
    { name: "Venlax", category: "Antidepressants", price: 17.99, imageUrl: "./Images/images2/18.jpg" },
  
    { name: "Benadryl", category: "Antihistamines", price: 9.99, imageUrl: "./Images/images2/19.jpg" },
    { name: "Loratadine", category: "Antihistamines", price: 6.99, imageUrl: "./Images/images2/20.jpg" },
    { name: "Cetirizine", category: "Antihistamines", price: 11.49, imageUrl: "./Images/images2/21.jpg" },
    { name: "Fexofenadine", category: "Antihistamines", price: 8.99, imageUrl: "./Images/images2/22.webp" },
    { name: "Fenistil", category: "Antihistamines", price: 5.99, imageUrl: "./Images/images2/download.jpg" },
    { name: "Claritine", category: "Antihistamines", price: 2.99, imageUrl: "./Images/images2/w.jpg" },


  
    { name: "Losartas", category: "Antihypertensives", price: 13.49, imageUrl: "./Images/images2/23.webp" },
    { name: "Metoprolol", category: "Antihypertensives", price: 14.99, imageUrl: "./Images/images2/24.png" },
    { name: "Enalapril", category: "Antihypertensives", price: 16.49, imageUrl: "./Images/images2/25.webp" },
    { name: "Losartan", category: "Antihypertensives", price: 15.99, imageUrl: "./Images/images2/26.webp" },
    { name: "Hydrochilorothiazide", category: "Antihypertensives", price: 11.99, imageUrl: "./Images/images2/rr.webp" },
    { name: "Antendol", category: "Antihypertensives", price: 7.99, imageUrl: "./Images/images2/101010.jpg" }
  ];
  

  let cart = [];
  
  function filterProducts(category) {
    const filteredProducts = category === "All" ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
  }
  
  function displayProducts(productList) {
    const productCatalog = document.getElementById("productCatalog");
    productCatalog.innerHTML = "";
    
    productList.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
  
      productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
        <input type="number" min="1" value="1" id="quantity-${product.name.replace(/\s/g, "")}">
        <button onclick="addToCart('${product.name}', ${product.price}, '${product.imageUrl}')">Add to Cart</button>
      `;
  
      productCatalog.appendChild(productCard);
    });
  }
  
  function addToCart(name, price, imageUrl) {
    const quantityInput = document.getElementById(`quantity-${name.replace(/\s/g, "")}`);
    const quantity = parseInt(quantityInput.value) || 1;
  
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({ name, price, imageUrl, quantity });
    }
        // Show a pop-up after adding the item to the cart
      alert(`Added to cart : ${name}, Quantity ${quantity} !!`);
    updateCartTable();
  }


  
  function updateCartTable() {
    const cartTableBody = document.getElementById("cartItems");
    cartTableBody.innerHTML = "";
  
    let total = 0;
    cart.forEach(item => {
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
  
  function saveCartToFavorites() {
    localStorage.setItem("favorites", JSON.stringify(cart));
    alert(`The cart items have been added to the localStorage!!`);
  }
  
  function loadFavoritesToCart() {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      cart = favorites;
      updateCartTable();
    } else {
      alert("No favorites found!");
    }
  }
  
  filterProducts("All");
  
  document.getElementById("buyNowButton").addEventListener("click", function () {
    if (cart.length === 0) {
      alert("Your cart is empty!");
  } else {
      const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
      
      window.location.href = "./index10.html"
  }
});
