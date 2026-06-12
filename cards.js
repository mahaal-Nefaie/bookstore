const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});


const container = document.getElementById("card-container");
containerStyle(container);

books.forEach(book => {
    const card = document.createElement("div");
    card.className = "card";
    cardStyle(card);


    card.innerHTML = `
    <img src="${book.image}" width="150">
    <h3>${book.title}</h3>
    <p>${book.price}SAR</p>
    <div class="buttons">
        <button class="cart-btn">
            <i class="fa-solid fa-cart-shopping"></i>
        </button>

        <button class="fav-btn">
            <i class="fa-regular fa-heart"></i>
        </button>
    </div> `;


    const buttonsDiv = card.querySelector(".buttons");
    const cartButton = card.querySelector(".cart-btn");
    const favButton = card.querySelector(".fav-btn");


    cartButton.addEventListener("click", () => {
        addToCart(book);
        updateCartCount();
        renderCart();
    });


    /*favButton.addEventListener("click", () => {
      //  console.log("favorite");
    });*/


    cartButtonStyle(cartButton);
    favButtonStyle(favButton);
    buttonsDivStyle(buttonsDiv);
    container.appendChild(card);
});