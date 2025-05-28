// Конструкция switch заменяет собой сразу несколько if
// switch имеет синтаксис:
// switch(x) {
//     case 'value1':  // if (x === 'value1') Переменная x проверяется на строгое равенство первому значению value1, 
//       ...
//       [break]
//     case 'value2':  // if (x === 'value2') затем второму value2 и так далее.
//       ...           // Если соответствие установлено – switch начинает выполняться от соответствующей директивы case далее, до ближайшего break 
//     default:        // Если ни один case не совпал – выполняется (если есть) вариант default
//       ...
//       [break]
// }

// var a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( 'Я таких значений не знаю' );
// }

// Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются
// var a = 2 + 2;
// switch (a) {              // Пример без break
//   case 3:
//     alert( 'Маловато' ); 
//   case 4:
//     alert( 'В точку!' );
//   case 5:
//     alert( 'Перебор' ); 
//   default:
//     alert( 'Я таких значений не знаю' ); // последовательно выполнятся три alert
// }

// В case могут быть любые выражения, в том числе включающие в себя переменные и функции
// var a = 1;
// var b = 0;
// switch (a) {
//   case b + 1:
//     alert( 1 );
//     break;

//   default:
//     alert('нет-нет, выполнится вариант выше')
// }

// Несколько значений case можно группировать
// var a = 2+2;
// switch (a) {
//   case 4:
//     alert('Верно!');
//     break;

//   case 3:                    // выполняют один и тот же код
//   case 5:                    // выполняют один и тот же код
//     alert('Неверно!');
//     alert('Немного ошиблись, бывает.');
//     break;

//   default:
//     alert('Странный результат, очень странный');
// }

// Следующий пример принимает значение от посетителя
// var arg = prompt("Введите arg?")
// switch (arg) {
//   case '0': // При вводе 0 или 1 выполнится первый alert, далее выполнение продолжится вниз до первого break и выведет второй alert('Два'). 
//   case '1': // Итого, два вывода alert
//     alert( 'Один или ноль' );

//   case '2': // При вводе 2, switch перейдет к case '2', и сработает единственный alert('Два')
//     alert( 'Два' );
//     break;

//   case 3: // При вводе 3, switch перейдет на default. Это потому, что prompt возвращает строку '3', а не число.
//     alert( 'Никогда не выполнится' );

//   default:
//     alert('Неизвестное значение: ' + arg)
// }
// Типы разные. Оператор switch предполагает строгое равенство ===, так что совпадения не будет.




//                                                П Р И К Л А Д И 




/* Переписати код для поздоровлення після народження дитини з використанням конструкції switch. Ось код
який потрібно переписати:
let sex = prompt("Хто народився ?");
if (sex == "хлопчик"){
    alert ("Ура!");
}
else if (sex == "дівчинка"){
    alert ("Два рази Ура!");
}
else {
    alert ("Що, темно було і нічого не було видно?");
}     */

// Рішення:
// switch(sex) {
//     case "хлопчик":
//         alert ("Ура!");
//         break;
//     case "дівчинка":
//         alert ("Два рази Ура!");
//         break;
//     default:
//     alert ("Що, темно було і нічого не було видно?");
// }





/*Спитати про любиму домашню тваринку. Якщо собака чи кішка, то вивеси повідомлення "Просто Чудово !"
Якщо "дракон" - "Дейенеріс, ти задовбала, заведи собі вже чоловіка!" */

// Рішення:
// let pet = prompt("Яку ви маєте домашню тваринку ?");
// switch(pet.toLowerCase()) {                          // Приводимо до нижнього регістру для облегчення і приведення результату до єдиного виду
//     case "dog":
//     case "cat":
//         console.log("Просто Чудово !");
//         break;
//     case "dragon":
//         console.log("Дейенеріс, ти задовбала, заведи собі вже чоловіка!");
//         break;
//     default:
//         console.log("Врешті однаково, що мати, все рівно це класно !");
// }





/* Переписати наданий варіант з switch  у варіант із використанням if...else */
// switch (browser) {
//     case 'IE':
//       alert( 'О, так у вас встановлений IE!' );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Так, і ці браузери ми також підтримуємо' );
//       break;
  
//     default:
//       alert( 'Ми надіємось, що і у вашому браузері все ок!' );
//   }
// Рішення: якщо зовсім дотримуватись умов, то порівняння повинно бути ===, але скоріше за все це є звичайне порівняння ==

// if (browser == "IE") {
//     alert( 'О, так у вас встановлений IE!' );
// } else if (browser == "Chrome" ||
//            browser == "Firefox" ||
//            browser == "Safari" ||
//            browser == "Opera") {
//         alert ( 'Так, і ці браузери ми також підтримуємо' );
// } else {
//     alert( 'Ми надіємось, що і у вашому браузері все ок!' );
// }



/* Переписати наданий код з використанням однієї конструкції switch */
// var a = +prompt("Задайте a?", "");
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
// Рішення:

// let a = +prompt("Задайте a?", "");
//     switch (a) {
//       case 0:
//         alert ( 0 );
//         break;
    
//       case 1:
//         alert ( 1 );
//         break;
    
//       case 2:
//       case 3:
//         alert ( "2,3" );
//         break;
//     }
// break внизу не обовязковий, але ми ставимо по «правилам хорошого тону», крім того
// у майбутньому може знадобитись додати в кінці ще один case  - щоб не було помилки
// Крім того в кінці після break; можна додати вираз на випадок введення числа більше 3:
// default:
//    alert ("Введіть значення від 0 до 3");





/* Написати код підрахунку зарплати за кожен місяць року з використанням конструкції switch */

// let salaryPerDay = Number( prompt("Вкажіть зарплату в доларах за один день!", "500") );
// let month = prompt("Вкажіть місяць як показано", "березень");
// month = month.toLowerCase();
// let salaryPerMonth = 0;

//     switch (month){
//         case "січень":
//             salaryPerMonth = 23 * salaryPerDay; // січень має 31 день; без субот і неділь буде мати 23 робочих дня
//             alert( salaryPerMonth );
//             break;
//         case "лютий":
//             salaryPerMonth = 20 * salaryPerDay; // лютий має 28 днів; без субот і неділь буде мати 20 робочих днів
//             alert( salaryPerMonth );
//             break;
//         case "березень":
//             salaryPerMonth = 23 * salaryPerDay; // березень має 31 день; без субот і неділь буде мати 23 робочих дня
//             alert( salaryPerMonth );
//             break;
//         case "квітень":
//             salaryPerMonth = 22 * salaryPerDay; // квітень має 30 днів; без субот і неділь буде мати 22 робочих дня
//             alert( salaryPerMonth );
//             break;
//         case "травень":
//             salaryPerMonth = 23 * salaryPerDay; // травень має 31 день; без субот і неділь буде мати 23 робочих дня
//             alert( salaryPerMonth );
//             break;
//         case "червень":
//             salaryPerMonth = 22 * salaryPerDay; // червень має 30 днів; без субот і неділь буде мати 22 робочих дня
//             alert( salaryPerMonth );
//             break;
//         case "липень":
//             salaryPerMonth = 23 * salaryPerDay; // березень має 31 день; без субот і неділь буде мати 23 робочих дня
//             alert( salaryPerMonth );
//             break;
//         case "серпень":
//             salaryPerMonth = 23 * salaryPerDay; // серпень має 31 день; без субот і неділь буде мати 23 робочих дня
//             alert( salaryPerMonth );
//             break;
//         case "вересень":
//             salaryPerMonth = 22 * salaryPerDay; // вересень має 30 днів; без субот і неділь буде мати 22 робочих дня
//             alert( salaryPerMonth );
//             break;
//         case "жовтень":
//             salaryPerMonth = 23 * salaryPerDay; // жовтень має 31 день; без субот і неділь буде мати 23 робочих дня
//             alert( salaryPerMonth );
//             break;
//         case "листопад":
//             salaryPerMonth = 22 * salaryPerDay; // листопад має 30 днів; без субот і неділь буде мати 22 робочих дня
//             alert( salaryPerMonth );
//             break;
//         case "грудень":
//             salaryPerMonth = 23 * salaryPerDay; // грудень має 31 день; без субот і неділь буде мати 23 робочих дня
//             alert( salaryPerMonth );
//             break;
//         default:
//             month = prompt ("Задайте місяць коректно!");
//     }

// // Тепер оптимізуємо код
// let salaryPerDay = Number( prompt("Вкажіть зарплату в доларах за один день!", "500") );
// let month = prompt("Вкажіть місяць як показано", "березень");
// month = month.toLowerCase();
// let salaryPerMonth = 0;

//     switch (month){
//         case "січень":
//         case "березень":
//         case "травень":
//         case "липень":
//         case "серпень":
//         case "жовтень":
//         case "грудень":
//             salaryPerMonth = 23 * salaryPerDay;
//             alert( salaryPerMonth );
//             break;
//         case "лютий":
//             salaryPerMonth = 20 * salaryPerDay;
//             alert( salaryPerMonth );
//             break;
//         case "квітень":
//         case "червень":
//         case "вересень":
//         case "листопад":
//             salaryPerMonth = 22 * salaryPerDay;
//             alert(salaryPerMonth);
//             break;
//         default:
//             month = prompt ("Задайте місяць коректно!");
//     }