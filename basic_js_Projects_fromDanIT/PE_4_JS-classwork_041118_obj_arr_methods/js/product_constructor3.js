function product(brand, model) {
    this.brand = brand;
    this.model = model;
    let price = 0;
    this.showPrice = function () {
        alert(price);
    };
    this.changePrice = function(priceNumber) {
        while(isNaN(priceNumber)) { // priceNumber = "15000"
            priceNumber = prompt("Неправильное число");
        }
        price = Number(priceNumber);
    };

    this.showDescription = function () {
        alert(`Товар - ${this.brand}, модель ${this.model}, цена - ${price}`);
    }
}

let notebookLenovo = new product('Lenovo', 'SSS 1010');
notebookLenovo.showPrice();
let price = prompt("Цена ноутбука");
notebookLenovo.changePrice(price);
notebookLenovo.showPrice();
notebookLenovo.showDescription();
