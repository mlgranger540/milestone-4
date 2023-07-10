document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch(`/products/product/${window.location.pathname[10]}/`,{method:"GET"}).then(response => response.json()).then((data)=>{
        // Get selected product
        console.log(data);
        
        let productImg = data.images;
        let productName = data.name;
        let productPrice = '£' + data.price;
        let productDesc = data.description;
        let productID = data.id;
        let databaseID = `${window.location.pathname[10]}`;
        let priceID = data.default_price;

        // Build and display div for product image
        let productImgDiv = '<a href="./">';
        productImgDiv += '<img class="product" src="' + productImg + '" alt="' + productName + '" title="' + productName + '">';
        productImgDiv += '</a>';
        document.getElementById("product-img-div").innerHTML = productImgDiv;

        // Build and display div for product name, price and description
        let productInfoDiv = '<a href="./">';
        productInfoDiv += '<h3 class="pt-5 pb-4" title="' + productName + '">' + productName + '</h3>';
        productInfoDiv += '</a>'
        productInfoDiv += '<h4 class="price pt-1 pb-3">' + productPrice + ' x ' +  '<input id="quantity" type="number" max="10" min="1" value="1"></h4>';
        productInfoDiv += '<p class="description pt-2 pb-2">Description:</p>';
        productInfoDiv += '<p>' + productDesc + "</p>";
        document.getElementById("product-info-div").innerHTML = productInfoDiv;


        function getCart() {
            console.log("Getting cart");
            console.log(JSON.parse(sessionStorage.getItem("cart-items")));
            return JSON.parse(sessionStorage.getItem("cart-items"));
        };

        function addItemToCart() {
            console.log("Adding to cart...");
            let array = getCart();
            let quantity = document.getElementById("quantity").value;
            let productObject = {
                "image": productImg,
                "name": productName,
                "price": productPrice,
                "description": productDesc,
                "quantity": quantity,
                "id": productID,
                "db_id": databaseID,
                "price_id": priceID
            };
            console.log(productObject);
            array.push(productObject);
            sessionStorage.setItem("cart-items", JSON.stringify(array));
            console.log("Added");
            let modalTrigger = document.getElementById("response-modal-trigger");
            modalTrigger.click();
        };

        function goToCart() {
            window.location.pathname = "/orders/cart";
        }

        let addToCartButton = document.getElementById("add-to-cart-button");
        addToCartButton.addEventListener("click", addItemToCart);
        addToCartButton.disabled = false;

        let goToCartButton = document.getElementById("go-to-cart");
        goToCartButton.addEventListener("click", goToCart)
    })
});
