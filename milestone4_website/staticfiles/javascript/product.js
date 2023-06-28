document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/products/all',{method:"GET"}).then(response => response.json()).then((data)=>{
        console.log(data);
    })
});