// Убрать лишнее что больше заданного количества символов, 
// в конце поставить ... что значит обрезано
// сделать функцию полного комментария

// Из строки получаем подстроку
//Выводим подстроку
function strSlice () {
    if (str.length > strLenght) {
        str.substr(0, strLenght) + "...";
    }
    return str
}

function comment(str, strMax) {
    this.text = str;
    this.shortText = "";
    this.shortLenght = strMax;
    this.strSlice = function () {
        if (this.text.length > this.shortLenght) {
            this.shortText = this.text.substr(0, this.shortLenght) + "...";
         }
    }
}

// let str = "Роман Война и мир в оригинале - на русском и французском языках";
// alert(str.slice(6, 17)); // первая переменная - начало, второе - конец подстроки
// alert(str.substr(6, 11)); // первая переменная - начало, вторая - длина подстроки
let str = prompt("Введите вашу строку");
let strMax = prompt ("Введите максимальное количество символов нужное в строке");
let comment1 = new comment(str, strMax);
comment1.strSlice();
alert(comment1.shortText);
alert (comment1.text);
// alert(strSlice(str, strMax));
comment1.shortLenght = 15;
comment1.strSlice();
alert(comment1.shortText);