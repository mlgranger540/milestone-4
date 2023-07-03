function getCart() {
    console.log("Getting cart");
    console.log(JSON.parse(sessionStorage.getItem("cart-items")));
    return JSON.parse(sessionStorage.getItem("cart-items"));
};

function clearCart() {
    console.log("Preparing to clear...")
    sessionStorage.removeItem("cart-items");
    let cartTable = document.getElementById("cart-table-body");
    cartTable.innerHTML = "[]";
    console.log("Cart cleared");
};

function updateCartOnPage() {
    console.log("Updating cart...");
    let cartTableBody = document.getElementById("cart-table-body");
    let newBody = "<tbody>";
    let cartItems = getCart();
    if (cartItems == undefined) {
        sessionStorage.setItem("cart-items", JSON.stringify([]));
    } else {
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
            newBody += '<td class="col-1 px-4 py-5">Remove</td>';
            newBody += '</tr>';
        });
    };
    newBody += "</tbody>";
    cartTableBody.innerHTML = newBody;
    console.log("Cart updated");
};

window.onload = (event) => {
    updateCartOnPage();

    let clearCartButton = document.getElementById("clear-cart-button");
    clearCartButton.addEventListener("click", clearCart);
}
