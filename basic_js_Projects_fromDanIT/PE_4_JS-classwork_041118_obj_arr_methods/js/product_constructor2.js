function product(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.showDescription = function () {
        alert(`Товар - ${this.brand}, модель ${this.model}, цена - ${this.price}`);
    }
}

let price = prompt("Цена ноутбука");

let notebookLenovo = new product('Lenovo', 'SSS 1010', price);
notebookLenovo.price = notebookLenovo.price/2;
notebookLenovo.showDescription();