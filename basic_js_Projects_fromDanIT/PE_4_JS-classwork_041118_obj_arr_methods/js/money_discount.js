let waterwash = {
    name: "Zanussi",
    price: 8000,
    /*disocunt: function() {
        this.price
    }*/
}

let notebook = {
    "full name": "Lenovo K 23",
    price: 15000,
    /*
    discoutMoney: function () {
    let discount = this.price*0.01;
    return discount;
    }*/

}

let lipaka = {
    "full name": "Липака черный",
    price: 1
}

function discoutMoney() {
    let discount = this.price*0.01;
    alert(discount);
    return discount;
}

discoutMoney.call(notebook);
