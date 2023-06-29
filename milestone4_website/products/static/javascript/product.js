document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch(`/products/product/${window.location.pathname[10]}/`,{method:"GET"}).then(response => response.json()).then((data)=>{
        // Get selected product
        console.log(data);
        
        let productImg = data.images;
        let productName = data.name;
        let productPrice = '£' + data.price;
        let productDesc = data.description;

        // Build and display div for product image
        let productImgDiv = '<a href="./">';
        productImgDiv += '<img class="product" src="' + productImg + '" alt="' + productName + '" title="' + productName + '">';
        productImgDiv += '</a>';
        document.getElementById("product-img-div").innerHTML = productImgDiv;

        // Build and display div for product name, price and description
        let productInfoDiv = '<a href="./">';
        productInfoDiv += '<h3 class="pt-5 pb-4" title="' + productName + '">' + productName + '</h3>';
        productInfoDiv += '</a>'
        productInfoDiv += '<h4 class="price pt-1 pb-3">' + productPrice + '</h4>';
        productInfoDiv += '<p class="description pt-2 pb-2">Description:</p>';
        productInfoDiv += '<p>' + productDesc + "</p>";
        document.getElementById("product-info-div").innerHTML = productInfoDiv;
    })
});
