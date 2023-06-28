document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/products/all',{method:"GET"}).then(response => response.json()).then((data)=>{
        let actualData = data.data;
        console.log(actualData);
        let productNames = [];
        let productImgs = [];
        let productPrices = [];
        for (let i in actualData) {
            let productName = actualData[i].name;
            console.log(productName);
            productNames += productName;
        }
        for (let i in actualData) {
            let productImg = actualData[i].images;
            productImgs += productImg;
        }
        for (let i in actualData) {
            let productPrice = "£" + actualData[i].price;
            productPrices += productPrice;
        }
        console.log(productNames);
        console.log(productImgs);
        console.log(productPrices);
    })
});