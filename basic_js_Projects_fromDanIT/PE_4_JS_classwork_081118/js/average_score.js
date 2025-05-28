let studentDanIt = {

    averageScore: function () {
        // alert(`Оценка по истории ${this.history}`); // this - ищи переменную после точки среди свойств объекта student. this.history эквивалентно studentDanIT.history
    let result = (Number(this.history)+Number(this.polilic) +Number(this.serials))/3
    return (result);
    }
}
/*
function functionExample() {
    alert(historyScore);
}



functionExample(); // сделай то, что описанно внутри функции
*/
let name = prompt("Имя студента");
let lastName = prompt("Фамилия студента");
let historyScore = prompt("Оценка по истории");
let polilicScore = prompt("Оценка по политике");
let serialsScore = prompt("Оценка по сериалам");

studentDanIt.name = name;
studentDanIt["last name"] = lastName;
studentDanIt.history = historyScore;
studentDanIt.polilic = polilicScore;
studentDanIt.serials = serialsScore;

 console.log(studentDanIt.averageScore());