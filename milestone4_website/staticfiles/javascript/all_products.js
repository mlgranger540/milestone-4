document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/products/all',{method:"GET"}).then(response => response.json()).then((data)=>{
        // Get array of all products
        let actualData = data.data;
        console.log(actualData);
        console.log(actualData[1]);
        
        // Add product objects to array of comics or prints depending on type
        let comics = [];
        let prints = [];
        for (let i in actualData){
            if (actualData[i].metadata.type === "comic"){
                comics.push(actualData[i]);
            } else {
                prints.push(actualData[i]);
            }
        }
        
        // Build and display div for all comics
        let comicsDiv = '<div class="row"><div class="product-box-start col-1"></div>';
        for (let i in comics){
            let productImg = comics[i].images;
            let productName = comics[i].name;
            let productPrice = '£' + comics[i].price;
            comicsDiv += '<div class="product-box text-center col-2 pt-5 pb-5">';
            comicsDiv += '<a href="./products/product">'
            comicsDiv += '<img class="product" src="' + productImg + '" alt="' + productName + '" title="' + productName + '">';
            comicsDiv += '<p class="pt-4" title="' + productName + '">' + productName + '</p>';
            comicsDiv += '</a>'
            comicsDiv += '<p class="pt-1">' + productPrice + '</p>';
            comicsDiv += '</div>';
        }
        comicsDiv += '<div class="product-box-end col-1"></div></div>';
        document.getElementById("comics-div").innerHTML = comicsDiv;

        // Build and display div for all prints
        let printsDiv = '<div class="row"><div class="product-box-start col-1"></div>';
        for (let i in prints){
            let productImg = prints[i].images;
            let productName = prints[i].name;
            let productPrice = '£' + prints[i].price;
            printsDiv += '<div class="product-box text-center col-2 pt-5 pb-5">';
            printsDiv += '<a href="./products/product">'
            printsDiv += '<img class="product" src="' + productImg + '" alt="' + productName + '" title="' + productName + '">';
            printsDiv += '<p class="pt-4" title="' + productName + '">' + productName + '</p>';
            printsDiv += '</a>'
            printsDiv += '<p class="pt-1">' + productPrice + '</p>';
            printsDiv += '</div>';
        }
        printsDiv += '<div class="product-box-end col-1"></div></div>';
        document.getElementById("prints-div").innerHTML = printsDiv;
    })
});
