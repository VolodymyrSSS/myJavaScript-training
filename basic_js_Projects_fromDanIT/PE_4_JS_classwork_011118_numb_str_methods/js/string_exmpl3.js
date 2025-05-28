function checkSpam (str ) {
    let strTemp = str.toLowerCase();
    let index = str.indexOf("viagra");
    if (index != -1) {
        index = str.indexOf("viagra", index);
        if(index != -1) {
            str = "пушистый кролик";
            return str;
        }
        else {
            return str;
        }

    }
    else {
        return str;
    }

}

let comment = prompt('Введите комментарий');
comment = checkSpam(comment);
alert(comment);