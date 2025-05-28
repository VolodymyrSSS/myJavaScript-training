// Objects
// Объекты в JavaScript сочетают в себе два важных функционала: Первый – это ассоциативный массив: структура, пригодная для хранения
// любых данных. Второй – языковые возможности для объектно-ориентированного программирования
// Объект – это особый тип данных, который хранит внутри себя другие переменные, которые можно добавлять и убирать, а также функции
// для работы с этими переменными 


// Главное для обьектов:
// Объект присваивается и копируется «по ссылке» 
// То есть, в переменной хранится не сам объект а, условно говоря, адрес в памяти, где он находится.
// Если переменная-объект скопирована или передана в функцию, то копируется именно эта ссылка, а объект остаётся один в памяти

// Ассоциативный массив – структура данных, в которой можно хранить любые данные в формате ключ-значениe
// Её можно легко представить как шкаф с подписанными ящиками. Все данные хранятся в ящичках. По имени (ключ) можно
// легко найти ящик и взять тот предмет (значение), которое в нём лежит. 
// B ассоциативный массив можно в любой момент добавить новые именованные «ящики» или удалить существующие



// Создание объектов
// Пустой объект («пустой шкаф») может быть создан одним из двух синтаксисов:
// 1. o = new Object();                                       // ключевое слово new и пустые круглые скобки
// 2. o = {};                                                 // пустые фигурные скобки обычно все пользуются синтаксисом (2), т.к. он короче
// Например, создадим объект person для хранения информации о человеке:    
// let person = {};                                           // пока пустой
// Объект чаще всего создается так:
// let имяОбъекта = {
//     имяСвойства: значение,
//     имяСвойства2: значение2,
//     имяСвойства3: значение3;
// }                                                          // ниже рассмотрим более подробно



// Cвойства объекта
// Объект может содержать в себе любые значения, которые называются свойствами объекта
// Значения хранятся «внутри» ящиков. Обратим внимание – любые значения, любых типов: число, строка – не важно
// Основные операции с объектами – это создание, получение и удаление свойств
// Доступ к свойствам осуществляется по имени свойства (иногда говорят «по ключу»)
// Для обращения к свойствам используется запись «через точку», вида:           объект.свойство      
// person.name = 'Вася';  
// при присвоении свойства в объекте автоматически создаётся "ящик" с именем "name" и в него записывается содержимое 'Вася'
// запишем ещё одно свойство: с именем 'age' и значением 25:                                         
// person.age = 25;
// // Чтобы прочитать их – также обратимся через точку:            
// alert( person.name + ': ' + person.age );                 // выведет: "Вася: 25"
// в любой момент вы можете добавить в объект новые свойства, написав: 
// имяОбъекта.имяСвойства = значениеСвойства    или      имяОбъекта[“имяСвойства”] = значениеСвойства 
// Еще пример: 
// let book = {
//     name: "50 оттенков серого",
//     author: "Л. Джеймс"
// }
// console.log(book. name);                                    // выведет: 50 оттенков серого
// console.log(book.author);                                   // выведет: Л. Джеймс

// book.price = 50;                                            // создали новое свойство price со значением 50
// book["akcii price"] = "1 мозг";                             // создали новое свойство akcii price со значением 1 мозг
 
// console.log(book. price);                                   // выведет: 50
// console.log(book["akcii price"]);                           // выведет: 1 мозг

// Удаление осуществляется оператором delete. Синтаксис имеет вид: delete имяОбъекта.имяСвойства                                                       
// delete person.age;                                           // удалили свойство person со значением age
// или delete имяОбъекта[“имя свойства”]:
// let president = {
// 	name: "Аугусто",
// 	"last name": "Пиночет",
// 	status: "присматривается"
// }
// if(president.status != "оборзел") {
//     console.log(president.name);
//     console.log(president["last name"]);
//     console.log(president.status);
// }
// president.status = prompt("Введите текущий статус президента");
// if(president.status == "оборзел") {
// 	delete president.name;
// 	delete president["last name"];
// 	delete president.status;
//     console.log(president.name);
//     console.log(president["last name"]);
//     console.log(president.status);	 



// оператор: "in"
// Иногда бывает нужно проверить, есть ли в объекте свойство с определенным ключом. Для этого есть особый оператор: "in"
// Его синтаксис: "prop" in obj, причем имя свойства – в виде строки, например:
// if ("name" in person) {
//   alert( "Свойство name существует!" );
// }
// Впрочем, чаще используется другой способ – сравнение значения с undefined
// Дело в том, что в JavaScript можно обратиться к любому свойству объекта, даже если его нет. Ошибки не будет.
// Но если свойство не существует, то вернется специальное значение undefined:
// Таким образом мы можем легко проверить существование свойства – получив его и сравнив с undefined:
// let person = {
//     name: "Василий"
// };
// alert( person.lalala === undefined );                    // true, свойства нет
// alert( person.name === undefined );                      // false, свойство есть

// Есть два средства для проверки наличия свойства в объекте: первое – оператор in, второе – получить его и сравнить с undefined
// Они почти идентичны, но есть одна небольшая разница. 
// Дело в том, что технически возможно, что свойство есть, а его значением является undefined:
// var obj = {};
// obj.test = undefined;                                   // добавили свойство со значением undefined
// теперь проверим наличие свойств test и заведомо отсутствующего blabla
// alert( obj.test === undefined );                        // true, свойство есть
// alert( obj.blabla === undefined );                      // true, свойство есть
// При этом, как видно из кода, при простом сравнении наличие такого свойства будет неотличимо от его отсутствия.

// Но оператор in гарантирует правильный результат:
// var obj = {};
// obj.test = undefined;
// alert( "test" in obj );                                 // true, свойство есть
// alert( "blabla" in obj );                               // false, свойства нет

// Как правило, в коде мы не будем присваивать undefined, чтобы корректно работали обе проверки. 
// А в качестве значения, обозначающего неизвестность и неопределенность, будем использовать null




// Доступ к свойству через квадратные скобки
// Существует альтернативный синтаксис работы со свойствами, использующий квадратные скобки вида:
// объект["свойство"];                                      // обратите внимание, точки нету
// let person = {};
// person.name = 'Вася'
// person['name'] = 'Вася';                                 // то же что и person.name = 'Вася'
// Записи person['name'] и person.name идентичны, но квадратные скобки позволяют использовать в качестве имени свойства любую строку:
// let person = {};
// person['любимый стиль музыки'] = 'Джаз';
// Такое присвоение было бы невозможно «через точку», так интерпретатор после первого пробела подумает, что свойство закончилось,
// и далее выдаст ошибку: person.любимый стиль музыки = 'Джаз'; // Error: Unexpected identifier -  ошибка
// В обоих случаях, имя свойства обязано быть строкой. Если использовано значение другого типа – JS приведет его к строке автоматически



// Доступ к свойству через переменную
// Квадратные скобки также позволяют обратиться к свойству, имя которого хранится в переменной:
// let person = {};
// person.age = 25; // или можно записать как person['age'] = 25;
// let key = 'age';
// alert( person[key] );                                   // выведет: 25 
// Вообще, если имя свойства хранится в переменной (let key = "age"), то единственный способ 
// к нему обратиться – это квадратные скобки person[key].
// Доступ через точку используется, если мы на этапе написания программы уже знаем название свойства. А если оно будет определено
// по ходу выполнения, например, введено посетителем и записано в переменную, то единственный выбор – квадратные скобки



// Oбъявление со свойствами
// Объект можно заполнить значениями при создании, указав их в фигурных скобках: { ключ1: значение1, ключ2: значение2, ... };
// Такой синтаксис называется литеральным (англ. literal). Следующие два фрагмента кода создают одинаковый объект:
// let menuSetup = {         // то же самое, что:        let menuSetup = {};
//   width: 300,                                         menuSetup.width = 300;
//   height: 200,                                        menuSetup.height = 200;
//   title: "Menu"                                       menuSetup.title = 'Menu';
// };
// Названия свойств можно перечислять как в кавычках, так и без, если они удовлетворяют ограничениям для имён переменных
// let menuSetup = {
//     width: 300,
//     'height': 200,
//     "мама мыла раму": true
// };
// или еще пример
// let user = {
//     name: "Влад",
//     "second name": "Дракула",
//     age: 400
// }
// console.log(user.name);                         // выведет: Влад
// console.log(user["second name"]);               // выведет: Дракула
// console.log(user.age);                          // выведет: 400

// В качестве значения можно тут же указать и другой объект - другой уровень вложености:
// let user = {
//     name: "Таня",
//     age: 25,
//     size: {                                 // Здесь значением свойства size является также объект {top: 90, middle: 60, bottom: 90 }
//       top: 90,
//       middle: 60,
//       bottom: 90
//     }
// }
// alert(user.name)                           // выведет: "Таня"
// alert(user.size.top)                       // выведет: 90



// объекты также имеют методы - это определенные действия, которые к ним можно применить
// методы сохраняются в свойствах объекта как функции
// let person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
// };
// В этом примере выражение this относится к "владельцу" cвойств обьекта - person который владеет свойством fullName где находится функция
// Чтобы обратится или прочитать метод обьекта используют также точку:
// objectName.methodName()
// В нашем примере єто будет иметь вид: name = person.fullName(); и обязательно скобки для получения результата работы функции



// Если создавать переменные с использованием ключевого слова "new", то они создаются как объекты! а не как примитивы
// let x = new String();        // Объявляет x как String объект
// let y = new Number();        // Объявляет y как Number объект
// let z = new Boolean();       // Объявляет z как Boolean объект
// Не используйте строки, числа и булевые значения как объекты. Они в значительной мере усложняют код и замедляют выполнение кода



// Фундаментальным отличием объектов от примитивов, является их хранение и копирование «по ссылке»
// Обычные значения: строки, числа, булевы значения, null/undefined при присваивании переменных 
// копируются целиком или, как говорят, «по значению»
// var message = "Привет!";
// var phrase = message;
// В результате такого копирования получились две полностью независимые переменные, в каждой из которых хранится значение "Привет!"

// С объектами – всё не так. В переменной, которой присвоен объект, хранится не сам объект, а «адрес его места в памяти», 
// иными словами – «ссылка» на него.  Вот как выглядит переменная, которой присвоен объект:
// var user = {
//     name: "Вася"
// };
// объект – вне переменной. В переменной – лишь «адрес» (ссылка) для него. При копировании переменной с объектом – копируется 
// эта ссылка, а объект по-прежнему остается в единственном экземпляре
// Давайте получим две переменные, в которых находятся ссылки на один и тот же объект:
// let user = { name: 'Вася' };
// let admin = user;
// admin.name = 'Петя';                        // поменяли данные через admin
// alert(user.name);                           // выведет:'Петя', изменения видны и в user
// Так как объект всего один, то изменения через любую переменную видны и в других переменных


// Ещё одна аналогия: переменная, в которую присвоен объект, на самом деле хранит не сами данные, а ключ к сейфу, где они хранятся
// При копировании её, получается что мы сделали копию ключа, но сейф по-прежнему один


// Клонирование объектов
// Иногда, на практике – очень редко, нужно скопировать объект целиком, создать именно полную независимую копию, «клон» объекта
// Для этого нужно пройти по объекту, достать данные и скопировать на уровне примитивов. 
// Примерно так: в этом коде который дан ниже. Каждое свойство объекта user копируется в clone
// Если предположить, что они примитивны, то каждое скопируется по значению и мы как раз получим полный клон
// let user = {                          // объект для клонирования
//     name: "Вася",
//     age: 30
// };
// let clone = {};                      // новый пустой объект
// for (let key in user) {         
//     clone[key] = user[key];          // скопируем в него все свойства user
// }                                    // теперь clone - полностью независимая копия
// clone.name = "Петя";                 // поменяли данные в clone
// alert( clone.name );                 // выведет: "Петя"
// alert( user.name );                  // по-прежнему "Вася"
// Если же свойства объектов, в свою очередь, могут хранить ссылки на другие объекты, то нужно обойти такие подобъекты и тоже 
//склонировать их Это называют «глубоким» клонированием



// Надо учитывать особенность при выводе (просмотре кода) обьекта в консоли браузера. Пример:
// let time = {
//     year: 2345,
//     month: 11,
//     day: 10,
//     hour: 11,
//     minute: 12,
//     second: 13,
//     microsecond: 123456
// }
// console.log(time);      // объект выводится строкой
// time.microsecond++;     // затем объект должен меняется в строке - по крайней мере свойство microsecond
// console.log(time);      // объект опять выводится строкой
// time.microsecond++;     // скрипт делает какую-то работу с объектом и выводит в консоли то, как она продвигается/меняется
// console.log(time);      // объект выводится строкой
// time.microsecond++;     // затем он должен опять меняется в строке
// Судя по выводу в консоли, свойство microsecond всегда было равно 123459…, а должно менятся, почему это так?- консоль нас просто дурит?
// так происходит именно потому, что при «раскрытии» свойств объекта в консоли – браузер всегда выводит их текущие (на момент 
// раскрытия) значения. Вывод не делает «копию» текущего содержимого, а сохраняет лишь ссылку на объект. Запомните эту особенность консоли



// Также можно обратится к свойству, вместо конкретного имени указав переменную, в которой это имя храниться
// Синтаксис: имяОбъекта[имяПеременной]; Например:                                                        
// let person = {
// 	name: "Рокэ",
// 	"last name": "Алва",
// 	"eyes color": "сапфировые",
// 	"hair color": "черные",
// 	"семейный статус": "НИКОГДА"
// }
// let youWantKnow = prompt("Что вы хотите знать о Первом маршале Талига?"); 
// console.log(person[youWantKnow]);                          // имя переменной let youWantKnow где хранится свойство youWantKnow

// Еще пример:
let tovar = {
    name: "Lenovo",
    "full name": "Lenovo 320s",
    category: "notebook",
    weight: 1500,
    price: 15000
}
console.log("Вы просматриваете " + tovar.name);
console.log(`Вы просматриваете ${tovar.category} - ${tovar["full name"]}`);    // Здесь используют шаблонные строки         


 



//                                                   П Р И К Л А Д И




/* Напишіть код по 1му рядку для : 1) Створрити пустий об'єкт user; 2) Додати властивість name зі значенням Василь;
3) Додати властивість surname зі значенням Петренко; 4) Поміняйте значення name на Сергій; 4) Видаліть властивість 
name з об'екта. */ 

// Рішення:                         
// let user = {};                    
// user.name = "Василь";            // або ось так:  user["name"] = "Василь"
// user.surname = "Петренко";       // або ось так:  user["surname"] = "Петренко"
// user.name = "Cергій";
// delete user.name;




/*Створити обєкт, властивістю якого є функція, яка запитує ввести правельний ріn-код та дає не більше ніж 2 спроби */

// Рішення:
// let terminalPin = {
//     pin: 4248,
//     askPin: function () {
//         let servicePin = +prompt("Введіть pin-код для подальшої роботи з терміналом");
//         if (servicePin != this.pin) {
//             alert ( "pin - невірний" );
//             prompt ("введіть  pin-код ще раз");
//             console.log(servicePin);
//         } else {
//             alert ( "Вам можна продовжувати роботу далі" )
//         }
//     }
// }
// terminalPin.askPin();                // викликали функцію





/*Створити обєкт - 'Федір Нечипоренко-Перебийніс Эвстахович - студент 2 курсу Київського Національно-Eкономічного університету' із 
властивостями де другим обєктом є предмети вивчення. Однією із властивостей обєкта (студента) повинна бути функція, яка виводить 
оцінку за профільну дисципліну навчання */

// Рішення:
// let studentKNEU_2year = {
//     name: "Федір",
//     "last name": "Нечипоренко-Перебийніс",
//     patronimic: "Эвстахович",
//     studyDisciplines: {
//         accountingAndAuditing: 8,
//         macroeconomy: 9,
//         higherMathematics: 8,
//         businessEnglish: 12
//     },
//     getProfileDiscipline: function () {
//         return `${this.name} ${this["last name"]} Оцінка з основ макроекономії ${this.studyDisciplines.macroeconomy}`; // this - шукає переменну після крапки серед властивостей об'єкту student
//         // alert(`${this.name} ${this["last name"]} Оцінка з основ макроекономії ${this.studyDisciplines.macroeconomy}`); 
//     }

// };
// // studentKNEU_2year.getProfileDiscipline();
// alert ( studentKNEU_2year.getProfileDiscipline() );





/*Створити обєкт - 'студент 2 курсу Києво-Могилянської академії' із властивостями - предметами вивчення, при цьому значення 
цих властивостей будуть задаватись у виді оцінок за предмети навчання. Однією із властивостей обєкта (студента) повинна бути функція, 
яка підраховує його середній бал */

// Рішення:
// let name = prompt("Введіть ім'я студента");
// let lastName = prompt("Введіть фамілію студента");
// let history = prompt("Введіть оцінку з історії");
// let politology = prompt("Введіть оцінку з політології");
// let philosophy = prompt("Введіть оцінку з філософії");
// let religiousStudies = prompt("Введіть оцінку з релігієзнавства");
// let speechSkill = prompt("Введіть оцінку з ораторського мистецтва");
// let logiсCompriation = prompt("Введіть оцінку з логіки");
// let caligraphySkill = prompt("Введіть оцінку з каліграфії");

// let studentKMA_2year = {
//     averageScore: function () {
//         let result = (Number(this.history) + Number(this.politology) + Number(this.philosophy) + Number(this.religiousStudies) + Number(this.speechSkill) + Number(this.logiсCompriation) + Number(this.caligraphySkill)) / 7
//         return result;
//     }
// };
// studentKMA_2year.name = name;
// studentKMA_2year["last name"] = lastName;
// studentKMA_2year.history = history;
// studentKMA_2year.politology = politology;
// studentKMA_2year.philosophy = philosophy;
// studentKMA_2year.religiousStudies = religiousStudies;
// studentKMA_2year."speechSkill" = speechSkill;
// studentKMA_2year.logiсCompriation = logiсCompriation;
// studentKMA_2year.caligraphySkill = caligraphySkill;

// studentKMA_2year.averageScore()
// // console.log(studentKMA_2year.averageScore());
// alert ("Середній бал студента " + ":" + " " + studentKMA_2year.name + " " + studentKMA_2year["last name"] + " " + "визначений як" + " " + studentKMA_2year.averageScore() );





/* Створити об'єкт “student”, у якого будуть такі властивості: ім'я, фамілія, коефіцієнт ліні та коефіцієнт “хитрожопості”.
Потім вивести в консоль інформацію про нього: “Студент ПФ: коефіцієнт ліні = якесь значення, коефіцієнт “хитрожопості” = якесь значення; 
У разі:
- якщо коефіцієнт ліні більше чи дорівнює 5, і при цьому  коефіцієнт “хитрожопості” меньше чи дорівнює 4, то добавити йому властивість 
“new status” із значенням: “Студент IФ направлений у воєнкомат”; 
- якщо коефіцієнт ліні менше чи дорівнює 3, а коефіцієнт “хитрожопості” більше чи дорівнює 5, додати йому властивість “new status”
із значением: “Студент IФ направлений на перездачу екзаменів”  */

// // Рішення:
// let student = {
//     name: "Мішка",
//     "last name": "Япончик",
//     "level of laziness": 3,
//     "level of assness": 5,
// };
// console.log(`студент ${student.name + student["last name"]}: коефіцієнт ліні = ${student["level of laziness"]}, коефіцієнт “хитрожопості” = ${student["level of assness"]}`);

// if(student["level of laziness"] >= 5 && student["level of assness"] <= 4){
//     student["new status"] = `Студент ${student.name + student["last name"]} направлений у воєнкомат`;
//     console.log(student["new status"]);
// }
// else if(student["level of laziness"] <= 3 && student["level of assness"] >= 5){
//     student["new status"] = `Студент ${student.name + student["last name"]} направлений на перездачу екзаменів`;
//     console.log(student["new status"]);
// }





/* Створити  пустий об'єкт студент, спитати його им'я і фамиілію, додати їх як властивості об'єкта, і вивести в консоль
повідомлення “Студент такий-то готовий до заповнення табелю!”. Після чого в циклі запитувати у користувача назву предмета
і оцінку з нього. Якщо користувач натисне Cancel при n-питанні про назву предмета, закінчити цикл і вивести в консоль
об'єкт (показати як об'єкт виглядає в консолі) */

// // Рішення:
// let objStudent = {}                                        // створили об'єкт
// let studentName = prompt("Enter student name");            // ввести значення властивості об'єкта - ім'я
// let studentSurname = prompt("Enter student last name");    // ввести значення властивості об'єкта - фамілія

// objStudent.name = studentName;                             // присвоїти елементу ім'я введене значення ім'я
// objStudent.secondname = studentSurname;                    // присвоїти елементу фамілія введене значення фамілія
// console.log(`Student ${objStudent.name} ${objStudent.secondname} is ready to compilate table`); // вивели в консолі повідомлення

// let subject = prompt("Enter subject");                     // ввести значення властивості об'єкта - предмет
// let mark = prompt("Enter mark");                           // ввести значення властивості об'єкта - оцінка

// while (subject != null){                                   // У разі відміни(коли натиснули Cancel)
//     objStudent[subject] = mark;                            // присвоїли предмету оцінку. Цей запис аналогічний запису objStudent.history = 5;
//     subject = prompt ("Enter subject");                    // присвоїли предмету введене значення властивості об'єкта - предмет
//     mark = prompt('Enter mark');                           // присвоїли предмету введене значення властивості об'єкта - оцінка
// };
// console.log(objStudent);                                   // Показуємо як об'єкт виглядає в консолі





/* Написати код, який буде зпитувати який вид кави приготувати, при цьому в консолі буде виводитись "Отримайте ваше" потім
назва виду кави та нижче пропорції води,кави,молока інградієнтів які були взяті для приготування. 
Нехай ми маємо: вода - 1л, 2 пакета кави по 200 гр кожен, молоко - 0.5л  */

// Рішення:
// let water = 1000;
// let coffee = 200;
// let milk = 500;

//     let coffeeWant = prompt("Чого бажаєте ?");
//     coffeeMachine(coffeeWant);
//     console.log(water);
//     console.log(coffee);
//     console.log(milk);

//     coffeeWant = prompt("Чого бажаєте ?");
//     coffeeMachine(coffeeWant);
//     console.log(water);
//     console.log(coffee);
//     console.log(milk);

//         function coffeeMachine(coffeeType) {
//             if(coffeeType == "капучіно"){
//                 water -= 20;
//                 coffee -= 10;
//                 milk -= 10;
//                 console.log(`Отримайте ваше ${coffeeType}`);
//             }
//             if(coffeeType == "американо") {
//                 water -=200;
//                 coffee -=20;
//                 console.log(`Отримайте ваше ${coffeeType}`);
//             }
//         }





/* Створити обєкт “product”, який містить такі характеристики товару: назва, повна назва, категорія і ціна, а також
 метод (встроєна функція), який отримує розмір скидки (в %), яку дізнався від адміністратора сайта та виводить в консоль 
 ціну для покупця разом з його скидкою. При цьому основна ціна змінюватись не повинна */

// // Рішення:
// let product = {
//     name: "Lenovo",
//     "full name": "Lenovo IdealPad",
//     category: "laptops",
//     price: 1000,
//     makeDiscount: function(dvalue){
//         return this.price * (1 - dvalue / 100) ;
//     }
// };
// let discount = +prompt("Enter you discount in %");
// console.log(product.makeDiscount(discount));





/* Створити об'єкт “atm” (банкомат-термінал), який буде містити такі властивості: pin-code користувача, число спроб, які залишились у клієнта
для вводу pin-кода, кількість грошей на рахунку. А також метод askMoney (функція), всередині якого буде запитуватись пін, після 
чого, якщо він вірний, задати питання скільки потрібно грошей. Після чого в консоль буде виводитись повідомлення “Отримайте ваші
кошти!” а властивість money об'екту буде зменшуватись на суму. Якщо пін не вірний - кількість спроб буде зменшуватись на 1, і 
питання задається знову. Якщо кількість спроб вичерпано - виводиться повідомлення “Нажаль, ваша карта вилучена” */

// // Рішення:
// let atm = {
//     pin: 4248,
//     attempts: 3,
//     moneyLeft: 10000,
//     askMoney: function(userPin) {
//         for (let i = 0; i < 3; i++) {
//             if (userPin === this.pin) {
//                 let moneyWant = +prompt("How much money do you want ?");
//                 this.moneyLeft -= moneyWant;
//                 console.log("Get your money!");
//                 break;
//             }
//             else {
//                 if (i < 2) {
//                     userPin = +prompt("Something went wrong. Enter your pin-code again!");
//                 }
//                 else {
//                     console.log("Sorry, but your card is taken away!");
//                 }
//             }
//         }
//     }
// }
// atm.askMoney(+prompt("Enter your pin-code"));
// console.log(atm);





/* Створити об'єкт "Віні Пух" персонажу мультфільму де його властивостями є ім'я: Віні, фамілія: Пух, 
степінь серйозності: 7, степінь веселості: 5. Потім створити новий об'єкт із властивостями такими самии
як і в першого персонажу використовуючи метод клонування. Передбачити виведення по черзі в консолі:
змінені властивості для нового об'єкту та незмінені властивості для першого об'єкту.
Створити функцію для заміни назви 1 персонажу мультфільма у разі зміни (збільшення) степені веселості > 5
Функція має вид:   
                    function changeName(obj, newName) {
                    ...код...
                    }
*/

// Рішення:
// let character1 = {
//     name: "Віні",
//     "last name": "Пух",
//     "igenuity": 7,
//     "degree of merriment": 4
// };
// console.log(character1);                            // виведе: {name: "Віні", last name: "Пух", igenuity: 8, "degree  of merriment ": 5}

// let character2 = {};                                // створили новий об'єкт character2
// // // let character2 = character1;                  // скопіювали усі ті самі властивості на об'єкт що має character1 для character2, але властивості поміняються
// character2.name = character1.name;                  // присвоїли властивості ім'я другого персонажу те саме значення Віні що і в першого персонажу 
// console.log(character2.name);                       // виведе: Віні - властивість для character2 не змінилась
// character2["last name"] = character1["last name"];  // присвоїли властивості фамілія другого персонажу те саме значення Пух що і в першого персонажу
// console.log(character2["last name"]);               // виведе: Пух - властивість для character2 не змінилась
// character2["degree of merriment"] = character1["degree of merriment"]; // присвоїли властивості степінь веселості другого персонажу те саме значення
// console.log(character2["degree of merriment"]);     // виведе: 4 - властивість для character2 не змінилась
// character2.name = "П'ятак";                         // присвоїли нову властивість - ім'я другого персонажу із значенням П'ятак
// character2["last name"] = "Товстий хряк";           // присвоїли нову властивість - фамілія другого персонажу із значенням Товстий хряк
// console.log(character2.name);                       // виведе: П'ятак - властивість для character2 змінилась
// console.log(character2["last name"]);               // виведе: Товстий хряк - властивість для character2 змінилась
// console.log(character1.name);                       // виведе: Віні - властивість для character1 не змінилась
// console.log(character1["last name"]);               // виведе: Пух - властивість для character1 не змінилась

//     for(key in character1) {                           // робимо перебор усіх ключів-значень що має character1
//         character2[key] = character1[key];             // присвоїли усі ключі, що має character1 ті самі значення для character2
//     }
//     console.log(character2);                           // виведе: {name: "Віні", last name: "Пух", igenuity: 8, "degree  of merriment ": 5}
//                                                        // повністю ідентичний новий об'єкт із тими самими властивостями що і в першому об'єктi

//     function changeName(obj, newName, newLastName) {
//         if (obj.merriment >= 5) {
//             obj.name = newName;
//             obj["last name"] = newLastName;
//         }
//         return obj;
//     }
// character1.merriment = 7;                                // збільшили степінь веселості
// let newCharacter1Name = "Я тучка-тучка-тучка, я вовсе не медведь!";
// let newCharacter1LastName = "тучка-синяя с обликом медведя";
// let difName = changeName(character1, newCharacter1Name, newCharacter1LastName); // {name: "Я тучка-тучка-тучка, я вовсе не медведь!", last name: "тучка-синяя с обликом медведя", igenuity: 7, degree of merriment: 4, merriment: 7}
// console.log(difName);





/* Написати код для клонування властивостей і значень одного студента для другого. Властивості першого студента мають
3 (три) рівня вкладеності. Властивості 1го рівня вкладеності - загальні дані, властивості 2го рівня - дисципліни
вивчення, 3й рівень вкладеності для дисципліни математика - алгебра, геометрія, математичний аналіз. Тобто задача стоїть 
клонувати (скопіювати) властивості обєкта, які мають три рівня вкладеності від 1го студанта до 2го студента       */

// // Рішення:
// // Варіант1
//  let student = {
//     name: "Сидір",
//     "last name": "Семишкур",
//     "homeworks done": 72,
//     tabel: {
//         history: 11,
//         literature: 8,
//         phisic: null,
//         sociology: 11,
//         philosophy: 8,
//         "urdu language": 7,
//         mathematics: {
//             algebra: 10,
//             geometry: 9,
//             mathanalysis: 8
//         } 
//     }
// };
// console.log(student);                                               // виводимо в консоль властивості-значення об'єкту student

// let student2 = {};                                                  // створюємо об'єкт для копіювання - student2
// for(key in student) {                                               // для усіх властивостей student
//     if(typeof student[key] !== "object" || student[key] === null) { // якщо тип властивостей student не відноситься до "об'єкту" або дорівнює null="нічого", тобто це є число, рядок... 
//         student2[key]=student[key];                                 // тоді усі властивості 1го рівня вкладеності student копіюємо до student2
//     } else {                                                        // якщо тип властивостей student все таки відноситься до об'єкту або null
//         student2[key] = {};                                         // тоді створити другий об'єкт для копіювання - student2
//         for(key2 in student[key]) {                                 // для усіх властивостей 2 рівня вкладеності student
//             if(typeof student[key][key2] !== "object" || student[key][key2] === null) { // якщо тип властивостей 2 рівня вкладеності об'єкту student не відноситься до "об'єкту" чи null тобто це є число, рядок...
//                 student2[key][key2] = student[key][key2];           // тоді усі властивості 2го рівня вкладеності student копіюємо до student2
//             } else {                                                // якщо тип властивостей 2 рівня вкладеності student все таки відноситься до об'єкту або null
//                 student2[key][key2] = {};                           // тоді створити третій об'єкт для копіювання - student2
//                 for(key3 in student[key][key2] ) {                  // для усіх властивостей 3 рівня вкладеності student
//                     student2[key][key2][key3] = student[key][key2][key3]; // тоді усі властивості 3го рівня вкладеності student копіюємо до student2
//                 }
//             }
//         }
//     }
// }
// console.log(student2);                                              // виводимо в консоль властивості клонованого об'єкту student2

// Проте це рішення для випадків, коли є не більше 3-х рівнів вкладеності бо код стає дуже великим вже після 4 го рівня вкладеності
// отже, потрібно створити універсальну функцію для клонування/копіювання властивостей об'єтку

// Варіант 2:
// function clone(original) {
// let copy = {};
//     for(key in original) {
//         if(typeof original[key] !== "object" || original[key] === null) {
//             copy[key] = original[key];
//         } else {
//             copy[key] = clone(original[key]);
//         }
//     }
//     return copy;




// чим відрізняєтсья const від let
let coffeeMachine = {
    coffee: 200
};
// console.log(coffeeMachine.coffee);
// coffeeMachine.coffee = 100;
// console.log(coffeeMachine.coffee);
console.log(coffeeMachine); // В coffeeMachine хранииться ссылка на объект
coffeeMachine = "Кофе закончилось";
console.log(coffeeMachine); // Теперь в coffeeMachine храниться строка

const coffeeMachine2 = {
    coffee: 400
};
let obj = {
    name: "New obj"
}
console.log(coffeeMachine2); // В coffeeMachine2 хранииться ссылка на объект
coffeeMachine2 = obj;
console.log(coffeeMachine2); // Теперь в coffeeMachine храниться строка

// console.log(coffeeMachine2.coffee);
// coffeeMachine2.coffee = 100;
// console.log(coffeeMachine2.coffee)



/* Написати функцію для перевірки правельності введення даних для паспорта чи ID на 
будь-яку особу Написать объект userData с такими свойствами: ID, name, lastName, age
 с соотвествующими геттерами и сеттерами, которые проверяют данные на коректность*/

// Рішення:
let userData = {
    "first name": null,
    "last name": null,
    ID: null,
    sex: null,
    "date of birth": null,
    addID: function(idValue) {
        idValue = idValue.toString();
        /*
        Можливі варіанти які може отримати idValue:
        1. 0
        2. 1
        3. NaN
        4. 120.15
        5. 12356
        6. 12343212
        */
        if(idValue.length == 8 && Number.isInteger(+idValue) && (+idValue) > 0) { // перевірка на правельність введених даних
            this.ID = idValue;
            console.log(this.ID);
        }
        else {
            console.log("Нельзя впихнуть невпихуемое!");
        }
    }
};

userData.ID = "Тенотчетлан";

// userData.addID("Северное Сколково");
// userData.addID(true);
// userData.addID(12346);
// userData.addID(-4341541);
// userData.addID(0000000);
// userData.addID(43415413);



/* Написати об'єкт userData з такими властивостями: ID, name, lastName, age і відповідними гетерами і сетерами,
які перевіряють дані на коректність введення */

// Рішення:
let userData = {
    ID_3945: 12345678,
    name_8403: "Sergey",
    lastName_6804: "Sinitsa",
    age_0974: 29,
    get ID() {
        return this.ID_3945;
    },
    set ID(val) {
        /*
        string - не буквы
        ture - не булевое
        false - не булевое
        null - не объект
        object - не объект
        > 8 \ < 8 - кол-во символов = 8
        -number - <0
        not integer - целое число

        число
        8 символов
        целое
        положительное
         */
        // val = +val;
        if ((+val) > 0 && val.toString().length == 8 && Number.isInteger(+val)) {
            this.ID_3945 = val;
        }
        else {
            console.log("incorrect data");
        }
    }
}
let id = prompt("Enter your ID");
userData.ID = id;
console.log(userData.ID);





let userData = {
    ID_3945: 12345678,
    name_8403: "Sergey",
    lastName_6804: "Sinitsa",
    age_0974: 29,
    get ID() {
        return this.ID_3945;
    },
    set ID(val) {
        /*
        string - не буквы
        ture - не булевое
        false - не булевое
        null - не объект
        object - не объект
        > 8 \ < 8 - кол-во символов = 8
        -number - <0
        not integer - целое число

        число
        8 символов
        целое
        положительное
         */
        // val = +val;
        if ((+val) > 0 && val.toString().length == 8 && Number.isInteger(+val)) {
            this.ID_3945 = val;
        }
        else {
            console.log("incorrect data");
        }
    },
    get age(){
        /*
        string - не буквы
        ture - не булевое
        false - не булевое
        null - не объект
        object - не объект
        не больше 3х значений
        -number - <0
        not integer - целое число

        число
        целое
        положительное
         */

        return this.age_0974;

    },
    set age (value){
        if ((+value) > 0 && (+value) <= 120 &&  Number.isInteger(+value)) {
            this.age_0974 = value;
        }
        else {
            console.log("incorrect data");
        }
    },
    get name(){
        return this.name_8403;
    },
    set name(value){
        this.name_8403 = (this.checkString(value)) ? value : this.name_8403;
    },
    get lastName(){
        return this.lastName_6804;
    },
    set lastName(value){
        if(isNaN(value)){
            this.lastName_6804 = value;
        }
        else {
            console.log("incorrect data");
        }
    },
    checkString: function (value) {
        if(isNaN(value)){
            return true;
        }
        else {
            return false;
        }
    }
};


/* let id = prompt("Enter your ID");
userData.ID = id;
console.log(userData.ID);*/
/*

let age = prompt("Enter your age");
userData.age = age;
console.log(userData.age);
*/
/* let name = prompt("Enter your name");
userData.name = name;
console.log(userData.name);*/
let lastName  = prompt("Enter your name");
userData.ID = "Какая-то хрень";
userData.lastName = lastName;
console.log(userData.lastName);