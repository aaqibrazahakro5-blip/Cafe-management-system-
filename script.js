
// ============================================
// 1. FOOD MENU DATABASE
// ============================================

const menuItems = [

    // COFFEE
    {
        id: 1,
        name: "Espresso",
        category: "Coffee",
        price: 350,
        description: "Strong and rich classic coffee.",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500"
    },
    {
        id: 2,
        name: "Cappuccino",
        category: "Coffee",
        price: 450,
        description: "Coffee with creamy milk foam.",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500"
    },
    {
        id: 3,
        name: "Cafe Latte",
        category: "Coffee",
        price: 480,
        description: "Smooth espresso with steamed milk.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500"
    },
    {
        id: 4,
        name: "Americano",
        category: "Coffee",
        price: 380,
        description: "Classic espresso with hot water.",
        image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500"
    },
    {
        id: 5,
        name: "Hot Chocolate",
        category: "Coffee",
        price: 400,
        description: "Warm and creamy chocolate drink.",
        image: "https://images.unsplash.com/photo-1542990253-0b8be9e109e9?w=500"
    },

    // BURGERS
    {
        id: 6,
        name: "Classic Burger",
        category: "Burgers",
        price: 550,
        description: "Juicy patty with fresh vegetables.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
    },
    {
        id: 7,
        name: "Cheese Burger",
        category: "Burgers",
        price: 650,
        description: "Burger with delicious melted cheese.",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=500"
    },
    {
        id: 8,
        name: "Chicken Burger",
        category: "Burgers",
        price: 600,
        description: "Crispy chicken with special sauce.",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500"
    },
    {
        id: 9,
        name: "Zinger Burger",
        category: "Burgers",
        price: 700,
        description: "Spicy crispy chicken burger.",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500"
    },

    // PIZZA
    {
        id: 10,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 900,
        description: "Cheese, tomato and fresh herbs.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500"
    },
    {
        id: 11,
        name: "Pepperoni Pizza",
        category: "Pizza",
        price: 1200,
        description: "Classic pizza with pepperoni.",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500"
    },
    {
        id: 12,
        name: "Chicken Pizza",
        category: "Pizza",
        price: 1100,
        description: "Chicken, cheese and special sauce.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
    },
    {
        id: 13,
        name: "French Fries",
        category: "Pizza",
        price: 250,
        description: "Golden crispy potato fries.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500"
    },

    // SANDWICHES
    {
        id: 14,
        name: "Club Sandwich",
        category: "Sandwiches",
        price: 550,
        description: "Chicken, egg and fresh vegetables.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500"
    },
    {
        id: 15,
        name: "Chicken Sandwich",
        category: "Sandwiches",
        price: 450,
        description: "Fresh chicken sandwich with sauce.",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=500"
    },
    {
        id: 16,
        name: "Grilled Sandwich",
        category: "Sandwiches",
        price: 400,
        description: "Grilled bread with cheese filling.",
        image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=500"
    },

    // DESSERTS
    {
        id: 17,
        name: "Chocolate Cake",
        category: "Desserts",
        price: 450,
        description: "Rich chocolate cake slice.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
    },
    {
        id: 18,
        name: "Chocolate Brownie",
        category: "Desserts",
        price: 300,
        description: "Soft and delicious chocolate brownie.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500"
    },
    {
        id: 19,
        name: "Donuts",
        category: "Desserts",
        price: 250,
        description: "Sweet glazed donuts.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500"
    },
    {
        id: 20,
        name: "Ice Cream",
        category: "Desserts",
        price: 200,
        description: "Cold and creamy ice cream.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500"
    },

    // COLD DRINKS
    {
        id: 21,
        name: "Chocolate Milkshake",
        category: "Drinks",
        price: 400,
        description: "Thick and creamy chocolate shake.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500"
    },
    {
        id: 22,
        name: "Strawberry Shake",
        category: "Drinks",
        price: 400,
        description: "Fresh strawberry milkshake.",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500"
    },
    {
        id: 23,
        name: "Fresh Lemonade",
        category: "Drinks",
        price: 200,
        description: "Refreshing fresh lemon drink.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=500"
    },
    {
        id: 24,
        name: "Cold Coffee",
        category: "Drinks",
        price: 450,
        description: "Chilled coffee with creamy milk.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500"
    }
];


// ============================================
// 2. CART AND ORDER HISTORY
// ============================================

let cart = JSON.parse(localStorage.getItem("cafeCart")) || [];

let orders = JSON.parse(localStorage.getItem("cafeOrders")) || [];

let currentCategory = "All";

const menuList = document.getElementById("menu-list");


// ============================================
// 3. DISPLAY FOOD ITEMS
// ============================================

function displayMenu(items) {

    menuList.innerHTML = "";

    if (items.length === 0) {
        menuList.innerHTML =
            '<p class="no-results">No food items found!</p>';
        return;
    }

    items.forEach(item => {

        const card = document.createElement("div");
        card.className = "food-card";

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;
        image.loading = "lazy";

        image.onerror = function() {
            this.onerror = null;
            this.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500";
        };

        const info = document.createElement("div");
        info.className = "food-info";

        const category = document.createElement("span");
        category.className = "food-category";
        category.textContent = item.category;

        const name = document.createElement("h3");
        name.textContent = item.name;

        const description = document.createElement("p");
        description.className = "food-description";
        description.textContent = item.description;

        const price = document.createElement("div");
        price.className = "food-price";
        price.textContent = "Rs. " + item.price;

        const button = document.createElement("button");
        button.className = "add-btn";
        button.textContent = "+ Add to Order";

        button.addEventListener("click", () => {
            addToCart(item.id);
        });

        info.append(
            category,
            name,
            description,
            price,
            button
        );

        card.append(image, info);

        menuList.appendChild(card);

    });
}


// ============================================
// 4. FILTER FOOD BY CATEGORY
// ============================================

function filterMenu(category, button) {

    currentCategory = category;

    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    searchMenu();
}


// ============================================
// 5. SEARCH FOOD
// ============================================

function searchMenu() {

    const searchValue = document
        .getElementById("searchInput")
        .value.toLowerCase()
        .trim();

    const filteredItems = menuItems.filter(item => {

        const categoryMatch =
            currentCategory === "All" ||
            item.category === currentCategory;

        const searchMatch =
            item.name.toLowerCase().includes(searchValue) ||
            item.category.toLowerCase().includes(searchValue);

        return categoryMatch && searchMatch;
    });

    displayMenu(filteredItems);
}


// ============================================
// 6. SAVE CART TO LOCAL STORAGE
// ============================================

function saveCart() {

    localStorage.setItem(
        "cafeCart",
        JSON.stringify(cart)
    );

}


// ============================================
// 7. ADD FOOD TO CART
// ============================================

function addToCart(id) {

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }

    updateCart();

}


// ============================================
// 8. DISPLAY CART ITEMS
// ============================================

function updateCart() {

    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    let subtotal = 0;
    let totalQuantity = 0;

    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty!</p>';

    }

    cart.forEach(item => {

        const food = menuItems.find(p => p.id === item.id);

        if (!food) return;

        const itemTotal = food.price * item.quantity;

        subtotal += itemTotal;
        totalQuantity += item.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";

        const image = document.createElement("img");
        image.src = food.image;
        image.alt = food.name;

        image.onerror = function() {
            this.onerror = null;
            this.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500";
        };

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const name = document.createElement("h4");
        name.textContent = food.name;

        const price = document.createElement("p");
        price.textContent = "Rs. " + itemTotal;

        const controls = document.createElement("div");
        controls.className = "quantity-controls";

        const minus = document.createElement("button");
        minus.textContent = "-";
        minus.addEventListener("click", () => {
            changeQuantity(item.id, -1);
        });

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;

        const plus = document.createElement("button");
        plus.textContent = "+";
        plus.addEventListener("click", () => {
            changeQuantity(item.id, 1);
        });

        controls.append(minus, quantity, plus);

        info.append(name, price, controls);

        const remove = document.createElement("button");
        remove.className = "remove-btn";
        remove.textContent = "🗑";

        remove.addEventListener("click", () => {
            removeItem(item.id);
        });

        div.append(image, info, remove);

        cartItems.appendChild(div);

    });

    const delivery = subtotal > 0 ? 150 : 0;
    const total = subtotal + delivery;

    document.getElementById("cart-count").textContent = totalQuantity;

    document.getElementById("subtotal").textContent =
        "Rs. " + subtotal;

    document.getElementById("delivery").textContent =
        "Rs. " + delivery;

    document.getElementById("total").textContent =
        "Rs. " + total;

    saveCart();

}


// ============================================
// 9. INCREASE / DECREASE QUANTITY
// ============================================

function changeQuantity(id, amount) {

    const item = cart.find(p => p.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(p => p.id !== id);

    }

    updateCart();

}


// ============================================
// 10. REMOVE ITEM FROM CART
// ============================================

function removeItem(id) {

    cart = cart.filter(item => item.id !== id);

    updateCart();

}


// ============================================
// 11. OPEN / CLOSE CART
// ============================================

function toggleCart() {

    document.getElementById("cart-panel")
        .classList.toggle("open");

    document.getElementById("overlay")
        .classList.toggle("show");

}


// ============================================
// 12. OPEN CHECKOUT
// ============================================

function openCheckout() {

    if (cart.length === 0) {

        alert("Please add food items to your cart first!");

        return;
    }

    document.getElementById("checkout-modal")
        .classList.add("show");

}


function closeCheckout() {

    document.getElementById("checkout-modal")
        .classList.remove("show");

}


// ============================================
// 13. PLACE CUSTOMER ORDER
// ============================================

document.getElementById("checkout-form")
    .addEventListener("submit", function(event) {

    event.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        closeCheckout();
        return;
    }

    const name = document.getElementById("customer-name").value.trim();

    const phone = document.getElementById("customer-phone").value.trim();

    const address = document.getElementById("customer-address").value.trim();

    const orderType = document.getElementById("order-type").value;

    const payment = document.getElementById("payment-method").value;

    const instructions = document
        .getElementById("special-instructions").value.trim();

    const subtotal = cart.reduce((sum, item) => {

        const food = menuItems.find(p => p.id === item.id);

        return sum + (food ? food.price * item.quantity : 0);

    }, 0);

    const delivery = subtotal > 0 ? 150 : 0;

    const total = subtotal + delivery;

    const orderId = "BB" + Date.now().toString().slice(-7);

    // Create order record

    const newOrder = {

        id: orderId,

        customer: name,

        phone: phone,

        address: address,

        orderType: orderType,

        payment: payment,

        instructions: instructions,

        items: cart.map(item => {

            const food = menuItems.find(p => p.id === item.id);

            return {
                name: food.name,
                price: food.price,
                quantity: item.quantity
            };

        }),

        total: total,

        date: new Date().toLocaleString(),

        status: "Pending"

    };

    // Save order

    orders.unshift(newOrder);

    localStorage.setItem(
        "cafeOrders",
        JSON.stringify(orders)
    );

    // Confirmation

    alert(
        "ORDER PLACED SUCCESSFULLY!\n\n" +

        "Order ID: " + orderId + "\n" +

        "Customer: " + name + "\n" +

        "Phone: " + phone + "\n" +

        "Order Type: " + orderType + "\n" +

        "Payment: " + payment + "\n\n" +

        "Subtotal: Rs. " + subtotal + "\n" +

        "Delivery: Rs. " + delivery + "\n" +

        "Total: Rs. " + total + "\n\n" +

        "Thank you for ordering from Brew & Bite!"
    );

    // Clear cart

    cart = [];

    saveCart();

    updateCart();

    this.reset();

    closeCheckout();

    document.getElementById("cart-panel")
        .classList.remove("open");

    document.getElementById("overlay")
        .classList.remove("show");

    displayOrderHistory();

});


// ============================================
// 14. DISPLAY RECENT ORDERS
// ============================================

function displayOrderHistory() {

    const historyList = document.getElementById("history-list");

    historyList.innerHTML = "";

    if (orders.length === 0) {

        historyList.textContent = "No orders placed yet.";

        return;
    }

    orders.slice(0, 5).forEach(order => {

        const card = document.createElement("div");
        card.className = "history-card";

        const heading = document.createElement("strong");
        heading.textContent = "Order ID: " + order.id;

        const customer = document.createElement("p");
        customer.textContent = "Customer: " + order.customer;

        const total = document.createElement("p");
        total.textContent = "Total: Rs. " + order.total;

        const status = document.createElement("p");
        status.textContent = "Status: " + order.status;

        const date = document.createElement("p");
        date.textContent = "Date: " + order.date;

        const itemNames = document.createElement("p");
        itemNames.textContent = "Items: " +
            order.items.map(item =>
                item.name + " x " + item.quantity
            ).join(", ");

        card.append(
            heading,
            customer,
            itemNames,
            total,
            status,
            date
        );

        historyList.appendChild(card);

    });

}


// ============================================
// 15. INITIALIZE WEBSITE
// ============================================

displayMenu(menuItems);

updateCart();

displayOrderHistory();
