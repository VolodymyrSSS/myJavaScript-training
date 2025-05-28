let notepad = {
    name: "",
    "note number": 1,
    addNote: function () {
        let note = prompt("Введите нужную запись");// Сегодня поел 
        //конопляного меда
        let i=this["note number"];
        while (note) {
            this[`note${i}`] = note;
            note = prompt ("Введите нужную запись")
            i++//notepad.note
        }
        this["note number"] = i;
    }
}
notepad.addNote();
console.log(notepad);

notepad.addNote();
console.log(notepad);