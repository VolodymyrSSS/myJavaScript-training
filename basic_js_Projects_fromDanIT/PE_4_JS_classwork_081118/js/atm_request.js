let atm = {
    pin: 4242
    checkPin: function () {
        let personPin = +prompt("Введите pin-код");
        if (personPin != this.pin) {
            alert ("неверный pin");
            prompt ("введите  pin-код еще раз");
        }
    }
}

atm.checkPin();