// function changeFirstLetter(firstLetter, userStr) {

//     userStr = firstLetter + userStr.slice(1);
//         return userStr;
//     }
    
//     let str = prompt("Введите слово");
//     let letter = prompt("Введите букву");
    
//     str = changeFirstLetter(letter, str);
//     alert(str);

    function changeFirstLetter(firstLetter, userStr) {

        // userStr = firstLetter + userStr.slice(1);
            let strResult = firstLetter;
            let i = 1;
            while(i < userStr.length) {
                strResult = strResult + userStr[i];
                i++;
            }
            return userStr;
        }