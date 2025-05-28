function notepad() {
    this.name = "";
    this.noteNumber = 1;
    this.addNote = function () {
        let note = prompt("Введите запись"); // Сегодня опять поел
// конопляного меда
        let i = this.noteNumber;
        while (note) {
            this[`note${i}`] = note;
            note = prompt("Введите запись");
            i++;//notepad.notei
        }
        this.noteNumber = i;
    }
}

let notepad1 = new notepad();
/*
let notepad1 = {
    name: "",
    noteNumber = 1
}
*/
notepad1.name = "Записная книжка дьявола";
console.log(notepad1);
let notepad2 = new notepad();
/*
let notepad2 = {
    name: "",
    noteNumber = 1
}
*/
notepad2.name = "Дневник кота с лимонадным именем";
console.log(notepad2);