document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch(`/orders/${document.getElementById("options-username").innerHTML}`,{method:"GET"}).then(response => response.json()).then((data)=>{
        console.log(data);

        let orders = []
        for (let i in data){
            let orderObj = {}
            let totalPrice = "£" + (data[i].amount_paid/100);
            let fullDate = new Date(data[i].created*1000);
            let day = fullDate.getDate();
            let month = fullDate.getMonth() + 1;
            let year = fullDate.getFullYear();
            let dateCreated = day + "/" + month + "/" + year;
            let status = data[i].status;
            orderObj.totalPrice = totalPrice;
            orderObj.dateCreated = dateCreated;
            orderObj.status = status;

            let line_items = data[i].lines.data;
            let items = [];
            for (let j in line_items){
                let itemObj = {};
                let productName = line_items[j].description;
                let price = "£" + (line_items[j].amount/100);
                let quantity = line_items[j].quantity;
                itemObj.name = productName;
                itemObj.price = price;
                itemObj.quantity = quantity;
                items.push(itemObj);
            }
            orderObj.items = items;
            orders.push(orderObj);
        }
        console.log(orders);

        let ordersTableBody = document.getElementById("orders-table-body");
        let newBody = "<tbody>";
        orders.forEach((x)=>{
            newBody += '<tr><td class="col-3 px-3 py-5">';
            x.items.forEach((y)=>{
                newBody += '<p class="px-2">' + y.name + '</p>';
            })
            newBody += '</td><td class="col-1 px-3 py-5">';
            x.items.forEach((y)=>{
                newBody += '<p class="px-2">' + y.quantity + '</p>';
            })
            newBody += '</td><td class="col-1 px-3 py-5">';
            x.items.forEach((y)=>{
                newBody += '<p class="px-2">' + y.price + '</p>';
            })
            newBody += '</td><td class="col-1 px-3 py-5">' + x.totalPrice;
            newBody += '</td><td class="col-1 px-3 py-5">' + x.dateCreated;
            newBody += '</td><td class="capitalise col-1 px-3 py-5">' + x.status;
            newBody += '</td></tr>';
        })
        newBody += "</tbody>";
        ordersTableBody.innerHTML = newBody;
    })
});
