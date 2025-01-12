document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200 },
        { id: 3, name: "Product 3", price: 300 },
    ];

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productList = document.querySelector("#product-list");
    const cartItems = document.querySelector("#cart-items");
    const emptyCartMessage = document.querySelector("#empty-cart");
    const cartToatlMessage = document.querySelector("#cart-total");
    const totalPriceDisplay = document.querySelector("#total-price");
    const checkoutBtn = document.querySelector("#checkout-btn");

    // Render products
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button data-id="${product.id}">Add to Cart</button>
        `
        productList.appendChild(productDiv)
    });

    // Add to cart event
    productList.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    });

    function addToCart(product) {
        cart.push(product);
        saveCartToLocalStorage();
        renderCart();
    }

    // Render cart
    function renderCart() {
        cartItems.innerHTML = "";
        let totalPrice = 0;

        if (cart.length > 0) {
            emptyCartMessage.classList.add("hidden");
            cartToatlMessage.classList.remove("hidden");

            cart.forEach((item, index) => {
                totalPrice += item.price;
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    ${item.name} - $${item.price.toFixed(2)}
                    <button class="remove-btn" data-index="${index}">Remove</button>
                `;
                cartItems.appendChild(cartItem);
            })

            totalPriceDisplay.textContent = totalPrice.toFixed(2);
        } else {
            emptyCartMessage.classList.remove("hidden");
            cartToatlMessage.classList.add("hidden");
            totalPriceDisplay.textContent = "0.00";
        }
    }

    // Save cart to localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Remove from cart event
    cartItems.addEventListener("click", e => {
        if (e.target.classList.contains("remove-btn")) {
            const itemIndex = parseInt(e.target.getAttribute("data-index"));
            cart.splice(itemIndex, 1);
            saveCartToLocalStorage();
            renderCart();
        }
    });

    // Checkout event
    checkoutBtn.addEventListener("click", () => {
        cart.length = 0;
        localStorage.removeItem("cart");
        alert("Thank you for shopping with us!");
        renderCart();
    });

    renderCart();
});
