// В JavaScript функция является значением, таким же как строка или число. 
// Обычные значения, такие как числа или строки, представляют собой данные. А функцию можно воспринимать как действие.
// Это действие можно запустить через скобки (), а можно и скопировать в другую переменную.

// Как и любое значение, объявленную функцию можно вывести,
// function sayHi() {
//     alert( "Привет" );
// }
// alert( sayHi ); // выведет весь код функции т.к в последней строке после sayHi нет скобок - так функция не вызывается, а просто выводится на экран.

// Функцию можно скопировать в другую переменную
// function sayHi() {               // Объявление как бы говорит интерпретатору "создай функцию и помести её в переменную sayHi,
//     alert( "Привет" );           // результат работы функции sayHi() равен undefined т.к. внутри sayHi нет return
// }
// var func = sayHi;               // Мы копируем функцию в новую переменную func.  После sayHi нет скобок. Если бы они были,
// func();      // выведет: Привет // то вызов var func = sayHi() записал бы в func результат работы функции sayHi()- undefined 
//                                 // На этот момент функцию можно вызывать и как sayHi() и как func()
// sayHi = null;        // в любой момент значение переменной можно поменять
// sayHi();             // выведет: Error: sayHi is not a function - это ошибка


// Существует альтернативный синтаксис для объявления функции, который ещё более наглядно показывает, 
// что функция – это всего лишь разновидность значения переменной 

// Он называется «Function Expression» (функциональное выражение) – объявление функции в контексте какого-либо выражения и выглядит так:
// var f = function(параметры) {
//     // тело функции
// };
// Например:
// var sayHi = function(person) {
//     alert( "Привет, " + person );
// };
// sayHi('Вася');      // выведет: Привет, Вася

// Несмотря на немного разный вид, по сути две эти записи делают одно и то же:
// Function Declaration:
// function sum(a, b) {           // ключевое слово function должно быть
//     return a + b;
// }
// // Function Expression:
// var sum = function(a, b) {     // ключевое слово function должно быть
//     return a + b;
// }

// Основное отличие между ними: функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода
// sayHi("Вася"); // выведет: Привет, Вася - функция вызвана до объявления
                // JS перед запуском кода ищет в нём Function Declaration -их легко найти: они не являются частью выражений и начинаются со слова function
// function sayHi(name) {
//   alert( "Привет, " + name );
// }
// // А если бы это было объявление Function Expression
// sayHi("Вася"); // ошибка! - тайой вызов функции не сработал
                  // т.к. Function Expression создаются в процессе выполнения выражения, функция будет создана при операции присваивания sayHi = function...
// var sayHi = function(name) {
//   alert( "Привет, " + name );
// }


// в зависимости от условия, объявить функцию можна по-разному:
// var age = +prompt("Сколько вам лет?", 20);
// if (age >= 18) {
//     function sayHi() {
//       alert( 'Прошу вас!' );
//     }
//   } else {
//     function sayHi() {
//       alert( 'До 18 нельзя' );
//     }
//   }
// sayHi();  // при use strict Function Declaration видны только внутри блока, в котором объявлены, поэтому будет ошибка!

//  а здесь
// var age = prompt('Сколько вам лет?');
// var sayHi;
// if (age >= 18) {
//   sayHi = function() {
//     alert( 'Прошу Вас!' );
//   }
// } else {
//   sayHi = function() {
//     alert( 'До 18 нельзя' );
//   }
// }
// sayHi(); // функция сработает т к.  создаётся именно та функция, которая нужна, и вызов функции ее видит
// или даже так:
// var age = prompt('Сколько вам лет?');
// var sayHi = (age >= 18) ?
//   function() { alert('Прошу Вас!');  } :
//   function() { alert('До 18 нельзя'); };
// sayHi(); // функция сработает


// Анонимные функции - это функциональное выражение, которое не записывается в переменную
// Анонимные функции имеют три параметра: (question, yes, no) с тремя параметрами
// функция имеет семантику: ask(question, yes, no) более точно: question -> строка-вопрос; yes -> функция; no -> функция
// Она выводит вопрос на подтверждение question и, в зависимости от
// согласия пользователя, вызывает функцию yes() или no(). 
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// function showOk() {
//   alert( "Вы согласились." );
// }
// function showCancel() {
//   alert( "Вы отменили выполнение." );
// }
// использование
// ask("Вы согласны?", showOk, showCancel);

// // то же самое можно написать более коротко
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
  
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },         // Здесь функции объявлены прямо внутри вызова ask(...), даже без присвоения им имени
//     function() { alert("Вы отменили выполнение."); }
// );


// Eщё один способ создания функции, который используется очень редко
// Он позволяет создавать функцию полностью «на лету» из строки
// Функция создаётся вызовом new Function(params, code)
// Cемантикa: new Function(params, code) более точно: params -> Параметры функции через запятую в виде строки; code -> Код функции в виде строки

// Пример:
// var sum = new Function('a,b', ' return a+b; ');
// var result = sum(1, 2);
// alert( result ); // выведет: 3

// можно конструировать функцию, код которой неизвестен на момент написания программы, но строка с ним генерируется
// или подгружается динамически во время её выполнения

// ИТОГО:

//                                   Function Declaration	                                    Function Expression
// Время создания	                 До выполнения первой строчки кода.	                Когда управление достигает строки с функцией.
// Можно вызвать до объявления	     Да (т.к. создаётся заранее)	                    Нет
// Условное объявление в if	         Не работает	                                    Работает

// Если нет явной причины использовать Function Expression – предпочитайте Function Declaration т.к. короче и лучше читается. 
// Дополнительный бонус – такие функции можно вызывать до того, как они объявлены






//                                         П Р И К Л А Д И





// function checkPromptToNumber(value, paramtr) { // функция выполняет одну задачу, например, корреектность введенных данных
//     if(value === null) {
//         let answer = confirm("Вы уверены, что не хотите войти?");
//         if(answer) {
//             alert("Ну и дурак!");
//         }
//         else{
//             value = prompt(`Тогда введите ${paramtr}`);
//         }
//     }
//     else if(value === '') {
//         value = prompt("Введите "+paramtr);
//     }
//     else if(isNaN(value)) {
//         value = prompt("Введите "+paramtr+" числом");
//     }
//     return value;
// }


/* Написати код, який запитує скільки налити горівки в залежності від віку, кількості горівки та ваги.
Зробити перевірку на числову форму введення даних по віку*/

// Рішення:
// let age = prompt("Який ваш вік?");

// age = checkPromptToNumber(age, "свій вік");

//     if(!(!age || isNaN(age) || age < 18)) {
//         let drink = prompt("Скільки налити в граммах?", "50");
        
//         drink = checkPromptToNumber(drink, 'дозу в граммах');
        
//             let weight = prompt("Ваш вес?");
            
//             weight = checkPromptToNumber(weight, "вес в кг");
                
//                 if(drink > 400 && weight < 50) {
//                         alert("Сначала скажи домашний адрес куда привозить тело");
//                     }
//                 else if ((drink > 400 && weight > 80) || weight > 100) {         // сначала вычисляется то, что в скобках
//                     alert("Не хотите клубную карту?");
//                 } else {
//                     alert("Тогда в сад");
//                 }

// age = ''; 
// if(age) {
//     alert("Нормально");
// } else {
//     alert("Не нормально");
// }




/* Алгоритм Гаусса вычисления даты Пасхи
Алгоритм Гаусса вычисления даты Пасхи — математический алгоритм, предназначенный для определения дня празднования 
Пасхи в любом году. Предложен впервые немецким математиком Карлом Гауссом в 1800 году. Сам Гаусс привёл формулы без 
вывода. Объяснение каждого шага алгоритма дал профессор Базельского университета Герман Кинкелин в 1870 году.
Для определения даты Православной пасхи по старому стилю необходимо:
Разделить номер года на 19 и определить остаток от деления a.
Разделить номер года на 4 и определить остаток от деления b.
Разделить номер года на 7 и определить остаток от деления c.
Разделить сумму 19a + 15 на 30 и определить остаток d.
Разделить сумму 2b + 4c + 6d + 6 на 7 и определить остаток e.
Определить сумму f = d + e.
(по старому стилю) Если f ≤ 9, то Пасха будет праздноваться 22 + f марта; если f > 9, то Пасха будет праздноваться f — 9 апреля.
(по новому стилю) Если f ≤ 26, то Пасха будет праздноваться 4 + f апреля; если f > 26, то Пасха будет праздноваться f — 26 мая.

Данный алгоритм предназначен именно для расчёта Католической пасхи (то есть для пасхалии по григорианскому календарю). Для расчёта 
даты Православной пасхи по старому стилю (по юлианскому календарю) значения величин M и N принимаются: M=15 и N=6 независимо от века,
а не вычисляются по приведённым формулам; получается алгоритм, приведенный в начале статьи. Вычисление M и N для григорианской пасхалии
необходимо из-за того, что в григорианском календаре года, кратные 100, не високосные, кроме тех, что кратны 400, в то время как в 
юлианском календаре все года, кратные 4, — високосные без всяких исключений. Для перевода на новый стиль дату, вычисленную для Православной
пасхи, нужно сдвинуть вперёд на 13 дней в 20-м и 21-м веках. Католическая пасха всегда заключается между 22 марта и 25 апреля нового стиля,
а Православная — между 22 марта и 25 апреля старого стиля, то есть в 20-м и 21-м веках — с 4 апреля по 8 мая нового стиля.
Формулы для расчёта Католической пасхи предусматривают два исключения: если d = 29 и e = 6, то Пасха переносится с 26 на 19 апреля[3]; 
если d = 28 и e = 6, то с 25 на 18 апреля[4]. Это условие было введено Гауссом в 1811 году.
Значения величин M и N зависят от века, так что их можно рассчитать отдельно. Для 20-го и 21-го веков получаем: M=24, N=5.
Для 19-го: M=23, N=4. Для 18-го века см. пример*/

let easterDateCheck = function(year) {
    while(!year || year < 33) {
        year = +prompt("Something went wrong. Ttry it again!");
    }
    return year;
}
    function easterDate(year) {
        let result = null;
        let a = null, b = null, c = null, d = null, e = null, f = null;
        a = year % 19;
        b = year % 4;
        c = year % 7;
        d = (19 * a + 15) % 30;
        e = (2 * b + 4 * c + 6 * d + 6) % 7;
        f = d + e;
        
        if (f <= 26) {
            result = `Пасха в ${year} буде празнуватись ${4 + f} квітня`
        } 
        else {
            result = `Пасха в ${year} буде празнуватись ${f - 26} травня`;
        }
        return result;
    }

let year = +prompt("Enter a year");
    year = easterDateCheck(year);
let easterDay = easterDate(year);
console.log(easterDay);

// Те саме трохи по іншому через тернарний оператор
// let easterDateCheck = function(year) {
//     while(!year || year < 33) {
//         year = +prompt("Something went wrong. Try again!");
//     }
//     return year;
// }

// let year = +prompt("Enter a year");
// year = easterDateCheck(year);
// let easterDay = `Пасха в ${year} году будет праздноваться` + easterDate(year);
// console.log(easterDay);

// function easterDate(year) {
//     let result = null;
//     let a = null, b = null, c = null, d = null, e = null, f = null;
//     a = year % 19;
//     b = year % 4;
//     c = year % 7;
//     d = (19 * a + 15) % 30;
//     e = (2 * b + 4 * c + 6 * d + 6) % 7;
//     f = d + e;
//     // f = (19 * year % 19 + 15) % 30 + (2 * b + 4 * c + 6 * d + 6) % 7;
//     result =  (f <= 26) ? ` ${4 + f} апреля` : `${f - 26} мая`;
//     // if (f <= 26) {
//     //     result = `Пасха в ${year} году будет праздноваться ${4 + f} апреля`;
//     // }
//     // else {
//     //     result = `Пасха в ${year} году будет праздноваться ${f - 26} мая`;
//     // }

//     return result;
// }





// function function_name(){
//     let a="Валя";
//     let b="Алина";
//     return [a,b];
//  }
 
//  let [p1, q1] = function_name();
//  console.log(p1);
//  console.log(q1);


//  function sum(x = 0, y = 0) {
//     while(x === 0 || y === 0) {
//        if(x === 0) {
//            x = prompt("Ведите первое число");
//        }
//            y = prompt("Ведите первое число");
//     }
//     let result = (Number(x)+Number(y));
//     return [x,y,result];
// }

// let number1 = prompt("Введите первое число");
// let number2 = prompt("Введите второе число");
// // let numberSumResult = sum();
// [number1,number2,numberSumResult] = sum(number1,number2);
// console.log(number1);
// console.log(number2);
// console.log(numberSumResult);

// function pow(x,n) {
// let result = 1;
// for (let i = 0; i < n; i++) {
//     result = result * x;
// }
//     return SpeechRecognitionResult;
// }

// let number = prompt("Введите число");
// let power = prompt ("Введите степень");
//     alert( pow (number, power) );





// 






/* Типічна семантика стрілочної функції має вид:
                                                    let functionName = (arg1, arg2) => {
                                                        let result = null;
                                                        //function code
                                                        return result;
                                                    } 
    Написати код для визначення віку тварини по співвідношенні до віку людини
застосувавши стрілочну функцію */

// Рішення:
// let petHumanAge = (petType, petAge) => (petType == "dog") ? petAge*7 : petAge*5;
//     // function petHumanAge(petType, petAge) {
//     //     return (petType == "dog") ? petAge*7 : petAge*5;
//     // }
// let yourPetType = prompt("Хто у вас як домашня тваринка? Кіт чи Пес ?");
// let yourPetAge = prompt("Введіть вік вашого улюбленця");
//     console.log(petHumanAge(yourPetType, yourPetAge));



//     // визначення дня через стрілочну функцію
//     let easterDateCheck = (year) => {
//         while(!year || year < 33) {
//             year = +prompt("Something went wrong. Try again!");
//         }
//         return year;
//     }
//     let easterDate = (year) => {
//         let result = null;
//         let a = null, b = null, c = null, d = null, e = null, f = null;
//         a = year % 19;
//         b = year % 4;
//         c = year % 7;
//         d = (19 * a + 15) % 30;
//         e = (2 * b + 4 * c + 6 * d + 6) % 7;
//         f = d + e;
//         // f = (19 * year % 19 + 15) % 30 + (2 * b + 4 * c + 6 * d + 6) % 7;
//         result =  (f <= 26) ? ` ${4 + f} апреля` : `${f - 26} мая`;
//         // if (f <= 26) {
//         //     result = `Пасха в ${year} году будет праздноваться ${4 + f} апреля`;
//         // }
//         // else {
//         //     result = `Пасха в ${year} году будет праздноваться ${f - 26} мая`;
//         // }

//         return result;
//     }
//     let year = +prompt("Enter a year");
//     year = easterDateCheck(year);
//     let easterDay = `Пасха в ${year} году будет праздноваться` + easterDate(year);
//     console.log(easterDay);




// Перевірка на те чи є число в імені
function checkStrHasNumber(str) {
    let NoNumber = false;
    if(str) {
        for(let i = 0, strLength = str.length; i < strLength; i++) {
            if(!isNaN(str[i])) {
                NoNumber = true;
            }
        }
    }
    return NoNumber;
}





/* Створити універсальну функцію, яка буде перевіряти чи не закралась цифра в назві рядка
а у разі її виявлення - знищити */

Рішення:
Варіант 1
        let name = prompt("Введіть ваше ім'я");

        let hasNoNumber = checkStrHasNumber(name);
/*
        let str = name;
        let NoNumber = false;
        if(str) {
            for(let i = 0, strLength = str.length; i < strLength; i++) {
                if(!isNaN(str[i])) {
                    hasNoNumber = true;
                }
            }
        }
        hasNoNumber = NoNumber;
        delete name;
        delete NoNumber;
*/


        while(!name || hasNoNumber) {
            name = prompt("Ваше имя");
            hasNoNumber = checkStrHasNumber(name);
        }

        let lastName = prompt("Введите фамилию");
        hasNoNumber = checkStrHasNumber(lastName);

        /*
                let str = lastName;
                let NoNumber = false;
                if(str) {
                    for(let i = 0, strLength = str.length; i < strLength; i++) {
                        if(!isNaN(str[i])) {
                            hasNoNumber = true;
                        }
                    }
                }
                hasNoNumber = NoNumber;
                delete name;
                delete NoNumber;
         */
        while(!lastName || hasNoNumber) {
            lastName = prompt("Ваше имя");
            hasNoNumber = checkStrHasNumber(lastName);
        }
        // function checkStrHasNumber(str) {
        //     let NoNumber = false;
        //     if(str) {
        //         for(let i = 0, strLength = str.length; i < strLength; i++) {
        //             if(!isNaN(str[i])) {
        //                 NoNumber = true;
        //             }
        //         }
        //     }
        //     return NoNumber;
        // }

        // console.log(name);
        // let test = !name;
        // console.log(test);
        // let temp = +name;
        // console.log(typeof temp);
        // let temp = parseInt(name);
        // let i = 0;
        // while(i < name.length) {
        //     // код
        //     i++;
        // }

        // if(parseInt(name)) {
        //     console.log("parseInt превращается внутри скобок в true");
        // }
        // else {
        //     console.log("parseInt превращается внутри скобок в false");
        // }