let str = "New Way";
// alert( str ); //
let firstWord = str.indexOf(" "); // 3

alert(firstWord);
// Вирізати перше слово
str = str.slice(0, 3) + " " + "Age"; // `str = ${str.slice(0.3)} Age`;
alert( str );