function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

const notifications = document.createElement("div");

notificationsStyle(notifications);

document.body.appendChild(notifications);


const cartCount = document.getElementById("cart-count");
const cartCountSidebar = document.getElementById("cart-countSidebar")
function updateCartCount() {

    const cart = getCart();

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    cartCount.textContent = count;
    cartCountSidebar.textContent = count;
}

function showMessage(text) {
    const msg = document.createElement("div");

    msg.textContent = text;
    messageStyle(msg)

    notifications.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 3000);
}

const minicartBtn = document.getElementById("minicart");

const miniCart = document.createElement("div");
miniCart.classList.add("mini-cart");

document.body.appendChild(miniCart);


function renderCart() {

    const cart = getCart();



    if (cart.length === 0) {
        miniCart.innerHTML = "<p>السلة فارغة</p>";
        return;
    }

    let total = 0;

    miniCart.innerHTML = "";

    cart.forEach(item => {

        total += item.price * item.quantity;

        miniCart.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" width="60">

                <div>
                    <h4>${item.title}</h4>

                    <p>${item.price} ريال</p>

                    <button class="Quantity" onclick="decreaseQuantity(${item.id})">-</button>

                    <span>${item.quantity}</span>

                    <button class="Quantity" onclick="increaseQuantity(${item.id})">+</button>

                    <button class="deltbtn" onclick="removeItem(${item.id})">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>
                
                

            </div>
        `;
    });

    miniCart.innerHTML += `
    <div class="cart-total">

    <hr>
        <h3>الإجمالي: ${total} ريال</h3>
    <button class="btn btn-primary" onclick="">
                        شراء
                    </button>    

        </div>
    
        `;
}

function addToCart(book) {

    let cart = getCart();

    const existingBook = cart.find(item => item.id === book.id);

    if (existingBook) {
        existingBook.quantity++;
    } else {
        cart.push({
            ...book,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    showMessage(` للسلة "${book.title}" تم إضافة `);
}

minicartBtn.addEventListener("click", () => {

    updateCartCount();
    renderCart();

    miniCart.classList.toggle("show");
});

function increaseQuantity(id) {

    let cart = getCart();

    const item = cart.find(product => product.id === id);

    item.quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    renderCart();
}

function decreaseQuantity(id) {

    let cart = getCart();

    const item = cart.find(product => product.id === id);

    if (item.quantity > 1) {
        item.quantity--;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    renderCart();
}



function removeItem(id) {

    let cart = getCart();

    cart = cart.filter(item => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    renderCart();

}




updateCartCount();


