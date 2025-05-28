let studentDanIt = {
    // name: "Тарас",
    // "last name": "Петренко"
}

//let propertyName = prompt("Что вы хотите узнать о студенте?");
//alert(studentDanIt[propertyName]);
/* берем ЗНАЧЕНИЕ (строку), хранящееся в переменной
propertyName, и подставляем ее в квадратные скобки, взяев ее в кавычки.
studentDanIt["значение, хранящееся в переменной propertyName"];
*/

let name = prompt("Имя студента");
let lastName = prompt("Фамилия студента");

studentDanIt.name = name;
studentDanIt["last name"] = lastName;

alert(`Студент ${studentDanIt.name} ${studentDanIt["last name"]} готов к заполнению табеля!`);

let subject = prompt('Название предмета');
let grade = prompt('Оценка по предмету');
while(subject!==null) {
    studentDanIt[subject] = grade;
    subject = prompt('Название предмета');
    grade = prompt('Оценка по предмету');
}
alert(`Студент ${studentDanIt.name} ${studentDanIt["last name"]} имеет по ${subject} ${studentDanIt[subject]} `);

