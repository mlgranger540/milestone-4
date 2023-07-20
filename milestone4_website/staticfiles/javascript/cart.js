// Function to get cart items from session storage
function getCart() {
    return JSON.parse(sessionStorage.getItem("cart-items"));
}

// Function to clear all cart items from session storage
function clearCart() {
    sessionStorage.removeItem("cart-items");
    updateCartOnPage();
}

// Function to remove selected item from cart/session storage using its ID
function removeFromCart(element) {
    let itemID = element.id;
    let cartItems = getCart();
    let newCartItems = cartItems.filter(function idCheck(item) {
        return item.id !== itemID;
    });
    sessionStorage.removeItem("cart-items");
    sessionStorage.setItem("cart-items", JSON.stringify(newCartItems));
    updateCartOnPage();
}

// Function to update the cart table on page with items in storage
function updateCartOnPage() {
    let cartTableBody = document.getElementById("cart-table-body");
    let clearCartButton = document.getElementById("clear-cart-button");
    let checkoutButton = document.getElementById("checkout-button");
    let newBody = "<tbody>";
    let cartItems = getCart();
    if (cartItems == undefined) {
        sessionStorage.setItem("cart-items", JSON.stringify([]));
    } else {
        // Create table entry for each item in cart
        cartItems.forEach((x)=>{
            newBody += '<tr><td class="col-1 pt-1 pb-1">';
            newBody += '<a href="../../product/' + x.db_id + '">';
            newBody += '<img class="product" src="' + x.image + '" alt="' + x.name + '" title="' + x.name + '">';
            newBody += '</a></td><td class="col-3 px-4 py-5">';
            newBody += '<a href="../../products/' + x.db_id + '">';
            newBody += '<p class="pt-4" title="' + x.name + '">' + x.name + '</p>';
            newBody += '</a></td>';
            newBody += '<td class="col-3 px-4 py-5">' + x.description + '</td>';
            newBody += '<td class="col-1 px-4 py-5">' + x.price + '</td>';
            newBody += '<td class="col-1 px-4 py-5">' + x.quantity + '</td>';
            newBody += '<td class="col-1 px-4 py-5">';
            newBody += '<a id="' + x.id + '" class="clickable" onclick="removeFromCart(this)">Remove</a>';
            newBody += '</td></tr>';
            clearCartButton.disabled = false;
            checkoutButton.disabled = false;
        });
    }
    newBody += "</tbody>";
    cartTableBody.innerHTML = newBody;
    // If cart is empty, clear cart and checkout buttons are disabled
    if (cartTableBody.innerHTML === ""){
        clearCartButton.disabled = true;
        checkoutButton.disabled = true;
    }
}

// Update cart table and add event listener to clear button on page load
window.onload = (event) => {
    updateCartOnPage();

    let clearCartButton = document.getElementById("clear-cart-button");
    clearCartButton.addEventListener("click", clearCart);
};

// Cart items price ID and quantity are stringified and passed to Stripe for checkout
fetch("/orders/config/").then((result) => { return result.json(); }).then((data) => {
    const stripe = Stripe(data.publicKey);
    let cart = JSON.parse(sessionStorage.getItem("cart-items"));
    let stripeCart = [];
    for (let i in cart){
        let item = {};
        item.price = cart[i].price_id;
        item.quantity = Number(cart[i].quantity);
        stripeCart.push(item);
    };
    let stripeCartString = JSON.stringify(stripeCart);

    document.querySelector("#checkout-button").addEventListener("click", () => {
        fetch("/orders/create-checkout-session/",{
            method: "POST",
            body: `${stripeCartString}`
        })
        .then((result) => {
            console.log(result);
            return result.json();
        })
        .then((data) => {
            console.log(data);
            return stripe.redirectToCheckout({sessionId: data.sessionId});
        })
        .then((res) => {
            console.log(res);
        })
    });
});
