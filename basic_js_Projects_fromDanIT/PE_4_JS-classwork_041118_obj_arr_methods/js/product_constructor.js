function product () {
    this.brand = "";
    this.model = "";
    this.price = "";
}

let notebookLenovo = new product();
notebookLenovo.brand = "Lenovo";
notebookLenovo.model = "555 1010";
notebookLenovo.price = 999;

alert(notebookLenovo.brand);
alert(notebookLenovo.model);
alert(notebookLenovo.price);