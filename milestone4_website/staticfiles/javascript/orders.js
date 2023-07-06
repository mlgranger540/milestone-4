document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch(`/orders/${document.getElementById("options-username").innerHTML}`,{method:"GET"}).then(response => response.json()).then((data)=>{
        console.log(data);
    })
});
