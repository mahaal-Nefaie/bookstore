const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const container = document.getElementById("card-container");
const bestSellerContainer = document.getElementById("best-sellers");
const newArrivalsContainer = document.getElementById("new-arrivals");
const allBooksContainer = document.getElementById("card-container");
const searchInput = document.getElementById("search-input");
const results = document.getElementById("results");






menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

//containerStyle(container);

function createCards(bookArray, container) {

    container.innerHTML = "";

    bookArray.forEach(book => {
        const card = document.createElement("div");
        card.className = "card";
        cardStyle(card);


        card.innerHTML = `
    <img src="${book.image}" width="150">
    <h3>${book.title}</h3>
    <p>${book.price}ريال</p>
    <div class="buttons">
        <button class="cart-btn">
            <i class="fa-solid fa-cart-shopping"></i>
        </button>

        <button class="fav-btn">
            <i class="fa-regular fa-heart"></i>
        </button>
    </div> `;

        container.appendChild(card);


        const buttonsDiv = card.querySelector(".buttons");
        const cartButton = card.querySelector(".cart-btn");
        const favButton = card.querySelector(".fav-btn");


        cartButton.addEventListener("click", () => {
            addToCart(book);
            updateCartCount();
            renderCart();
        });





        cartButtonStyle(cartButton);
        favButtonStyle(favButton);
        buttonsDivStyle(buttonsDiv);

    });
}

const bestSellers = books.filter(book => book.bestSeller);
const newArrivals = books.filter(book => book.newArrival);

createCards(books, allBooksContainer);
createCards(bestSellers, bestSellerContainer);
createCards(newArrivals, newArrivalsContainer);

gridContainerStyle(
    document.getElementById("card-container")
);

sliderContainerStyle(
    document.getElementById("best-sellers")
);

sliderContainerStyle(
    document.getElementById("new-arrivals")
);



searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim() .toLowerCase();

    results.innerHTML = "";

    if(searchTerm === "") return;

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );

    if(filteredBooks.length === 0) {
        results.innerHTML = "<li>لم يتم العثور على نتائج.</li>";
        return;
       
    }
    filteredBooks.forEach(book => {
       const li = document.createElement("li");
       li.innerHTML = `
         <img src = "${book.image}">
         <div>
         <h4>${book.title}</h4>
         <p>${book.author}</p>
         </div>
       
       `;
       results.appendChild(li);
    })

})

   
