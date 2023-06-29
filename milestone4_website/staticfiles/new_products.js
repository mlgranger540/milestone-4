document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/products/all',{method:"GET"}).then(response => response.json()).then((data)=>{
        // Get array of all products
        let actualData = data.data;
        console.log(actualData);

        // Build and display div for newest 5 products
        let productsDiv = '<div class="row"><div class="product-box-start col-1"></div>';
        for (let i = 0; i < 5; i++){
            let productImg = actualData[i].images;
            let productName = actualData[i].name;
            let productPrice = '£' + actualData[i].price;
            let productID = actualData[i].db_id;
            productsDiv += '<div class="product-box text-center col-2 pt-5 pb-5">';
            productsDiv += '<a href="./products/' + productID + '">';
            productsDiv += '<img class="product" src="' + productImg + '" alt="' + productName + '" title="' + productName + '">';
            productsDiv += '<p class="pt-4" title="' + productName + '">' + productName + '</p>';
            productsDiv += '</a>';
            productsDiv += '<p class="pt-1">' + productPrice + '</p>';
            productsDiv += '</div>';
        }
        productsDiv += '<div class="product-box-end col-1"></div></div>';
        document.getElementById("products-div").innerHTML = productsDiv;
    })
});
