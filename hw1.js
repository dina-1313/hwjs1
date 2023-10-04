/*
1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

{
    let hamburger = 4;
    let fries = 1;
    if (hamburger >= 4 && fries){ // Перевіряємо, щоб всього було не рівно скільки треба, а більше
        console.log('Ми поїли');
    } else {
        console.log('Ми йдемо в інше кафе');
    }
}

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

// перевірити, чи ціна в рамках 1000-1900 включно і вивести "Price is OK", інакше "Price is not OK"

{
    let price = 1900;
    if (price >= 1000 && price <= 1900) { // перевірки: 1000, 1001, 1899, 1900
        console.log('Price is OK');
    } else {
        console.log('Price is not OK'); // перевірки: 999, 1901
    } 
}

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/

{
    // без оператора НЕ !
    let price = 1900; 
    if (price < 1000 || price > 1900) { // перевірки: 999, 1901
        console.log('Price is OK');
    } else {
        console.log('Price is not OK'); // перевірки: 1000, 1001, 1899, 1900
    }
}

{
    // оператор НЕ ! 
    let price = 1901; 
    if (!(price >= 1000) || !(price <= 1900)) { // перевірки: 999, 1901
        console.log('Price is OK');
    } else {
        console.log('Price is not OK'); // перевірки: 1000, 1001, 1899, 1900
    }
}

/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

{
    let season = 4;
    if (season === 1) {
        console.log('Зима'); 
    } else if (season === 2) {
        console.log('Весна'); 
    } else if (season === 3) {
        console.log('Літо');
    } else if (season === 4) {
        console.log('Осінь');
    } else {
        console.log('Щоб дізнатися пору року, введіть значення від 1 до 4');
    }
}

/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/

{
    let a = 3;
    let b = 1;
    let c = 2;
    if ((b < a && a < c) || (c < a && a < b)) {
        console.log('a'); 
    } else if ((a < b && b < c) || (c < b && b < a)) {
        console.log('b');
    } else if ((a < c && c < b) || (b < c && c < a)) {
        console.log('c'); 
    }  
}

{
    let a = 2, b = 1, c = 3;

    if (a > b) {
        if (a > c) {
            if (b > c) {
                console.log('b - середнє значення');
            } else console.log('c - середнє значення');
        }
        if (a < c) {console.log('a - середнє значення');
    }
    }
    else if (b > a) {
        if (b > c) {
            if (a > c) {
                console.log('a - середнє значення');
            } else console.log('c - середнє значення');
        }
        if (b < c) {console.log('b - середнє значення');
    }
    }
}

/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

{
    let day = 5;
    switch (day) {
        case 1:
            console.log('Понеділок');
            break;
        case 2:
            console.log('Вівторок');
            break;
        case 3:
            console.log('Середа');
            break;
        case 4:
            console.log('Четвер');
            break;
        case 5:
            console.log('П’ятниця');
            break;    
        case 6:
            console.log('Субота');
            break;
        case 7:
            console.log('Неділя');
            break;        
        default: 
            console.log('Щоб дізнатися день тижня - введіть значення від 1 до 7');
            break;
    }
}

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

{
    let d = 2;
    let f = 5;
    let action = "+";
    let result;
    switch (action) {
    case "+":
        result = d + f;
        console.log(result);
        break;
    case "-":
        result = d - f;
        console.log(result);
        break;
    case "*":
        result = d * f;
        console.log(result);
        break;
    case "/":
        result = d / f;
        console.log(result);
        break; 
    default:
        console.log("Операція не входить в перелік можливих");
    }
}

// 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.

{
    let myArray = [];
    for(let i = 1; i < 6; i++){ 
        myArray.push(i);
    }
    console.log(myArray);
}

/*
9. Напишіть 2 цикли.
   За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
   За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.
*/

{
    let myArray = [];
    for(let i = 1; i < 10 ; i += 2){ 
        myArray.push(i);
    }
    for(let i = 2; i < 10 ; i += 2){ 
        myArray.push(i);
    }
    console.log(myArray);  
}

/*
10. Оголоcіть та ініціалізуйте змінну total = 0.
    Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
    const myArr = [2, 3, 4, 5, 6];
*/

{
    let total = 0; 
    const myArr = [2, 3, 4, 5, 6];
    for (let i = 0; i < myArr.length; i++) {
        total = total + myArr[i];
    }
    console.log(total);
}

/*
11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

    const arr = [ [1, 2], [3, 4], [5, 6] ];

    Console output:
    1
    2
    3
    4
    5
    6
*/

{
    const arr = [ [1, 2], [3, 4], [5, 6] ];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr[i].length; ++j) {
            console.log(arr[i][j]);
        }
    }
}

/*
12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
    Використайте для цього вкладені цикли for.

    Наприклад:
    const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
    const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
    const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

    const arr = [[1, 2], [3, 4], [5, 6, 7]];

    let product = 1;

    // тут має бути ваше рішення

    console.log(product);

*/

{
    let product = 1;
    const arr = [[1, 2], [3, 4], [5, 6, 7]];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr[i].length; ++j) {
            product = product * arr[i][j];
        }
    }
    console.log(product);
}

// 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

{
    let word = "mesmerizing";
    console.log(word.replace(/[AaEeIiOoYyUu]/g, ''));
}

/*
14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

{
    let m = 0.9;
    let km = m / 1000;
    let mRest10 = m % 10;
    let mRest100 = m % 100;
    let kmRest10 = km % 10;
    let kmRest100 = km % 100;
    
    if ((mRest10 === 0) || (5 <= mRest10 && mRest10 <= 9) || (11 <= mRest100 && mRest100 <= 14)) { // 1) закінчуються на 0 (10, 20, 30, 40, 280, 50500; 2) закінчуються на 5-9; 3) закінчуються на 11-19
        meters = (m + ' метрів');
    } else if (2 <= mRest10 && mRest10 <= 4) { // закінчуються на 2, 3, 4 (не важливо чи є дроби) 
        meters = (m + ' метри');
    } else if (m < 1) { // будь який дріб менше 1, не повний км
        meters = (m + ' метра');
    } else if (mRest10 === 1) { // закінчується на 1, окрім 11 (бо 11, 111, 1111 входить в інший if вище)
        meters = (m + ' метр');
    };
    
    if ((kmRest10 === 0) || (5 <= kmRest10 && kmRest10 <= 9) || (11 <= kmRest100 && kmRest100 <= 14)) { // 1) закінчуються на 0 (10, 20, 30, 40, 280, 50500; 2) закінчуються на 5-9; 3) закінчуються на 11-19
        kilometers = (km + ' кілометрів');
    } else if (2 <= kmRest10 && kmRest10 <= 4) { // закінчуються на 2, 3, 4 (не важливо чи є дроби) 
        kilometers = (km + ' кілометри');
    } else if (km < 1) { // будь який дріб менше 1, не повний км
        kilometers = (km + ' кілометра');
    } else if (kmRest10 === 1) { // закінчується на 1, окрім 11 (бо 11, 111, 1111 входить в інший if вище)
        kilometers = (km + ' кілометр');
    }

    console.log(meters + ' це ' + kilometers)
}