let product1 = {
    name: "HP",
    "full name": "Harry Potter",
    category: "notebook",
    "full price": 25000,
    showdiscountPrice: function () {
        let discountValue = prompt("Размер вашей скидки");
        let newPrice = this["full price"]*((100 - discountValue)/100);
        alert(newPrice);
    }
}

let product2 = {
    name: "Xiomi",
    "full name": "Mi Notbook Express",
    category: "notebook",
    "full price": 27000
}

alert(product1.price);
alert(product2.price);

product1.showdiscountPrice();