//-------------------//

//  Використовуючи функцію if...else,
//   напишіть код, який запитуватиме:
//  "Яка офіційна назва JavaScript?"
//  Якщо користувач вводить "ECMAScript",
//   то показати через alert: "Вірно!"
//  інакше відобразити: "Не знаєте? ECMAScript!"

// let answer = prompt("Яка офіційна назва JavaScript?");
// console.log(answer);
// if (answer.trim() === "ECMAScript") {
//     alert("Вірно!");
// } else { alert("Не знаєте? ECMAScript!"); }
//
//
//
//-----------------//

//  Напишіть цикл, який виводить у консоль
//  всі непарні числа  від max до min  за спаданням

// const max = 51;
// const min = 23;

// Var1
// let start = max % 2 === 0 ? max - 1 : max;
// for (let i = start; i >= min; i -= 2) {
//   console.log(i);
// }

// Var2;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// Var для парних:
// for (let i = max; i >= min; i -= 1) {
//   if (!(i % 2)) {
//     console.log(i);
//   }
// }
//
//
//
// --------------------- //

/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 70 === 01:10
 */

// const message = prompt(`chas`);
// const hours = String(Math.floor(message / 60)).padStart(2, 0);
// console.log(hours);
// const minutes = String(message % 60).padStart(2, 0);
// console.log(minutes);
// console.log(`${hours} : ${minutes}`);

// Var з ф-цією
// function chas(minets) {
//   const hours = String(Math.floor(minets / 60)).padStart(2, 0);
//   const min = String(minets % 60).padStart(2, 0);

//   return `${hours} : ${min}`;
// }

// console.log(chas(60));
//
//
//
// ------------------- //

// Напишіть код, який питання
//  логін за допомогою prompt та логувати результат
//  у консоль браузера

//  Якщо відвідувач вводить "Admin",
//  то prompt запитує пароль.
//  Якщо нічого не ввели або натиснуто клавішу Esc
//  вивести рядок "Canceled"
//  В іншому випадку вивести рядок "Я вас не знаю"

//  Пароль перевірять так:
//  Якщо введено пароль "Password",
//  то вивести рядок "Вітаю"
//  інакше виводить рядок "Невірний пароль!"

// const login = prompt(`What your login`)?.trim();
// console.log(login);

// if (login === 'Admin') {
//   const password = prompt(`What your password`).trim();
//   if (password === 'Password') {
//     alert('Вітаю');
//   } else {
//     alert('Невірний пароль!');
//   }
// } else if (!login) {
//   alert('Canceled');
// } else {
//   ('Я вас не знаю');
// }
//
//
//
// -----------------//

// Станція з продажу ремонтних дроїдів готова до запуску,
// залишилося написати програмне забезпечення для відділу продажів.
// Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits),
//  яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта

// Доповни функцію таким чином:

// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів)
// і задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!",
// де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   let totalPrice = quantity * pricePerDroid;

//   if (totalPrice > customerCredits) {
//     return 'Insufficient funds!';
//   } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
//
//
//
//
// ----------------//

// Оголоси функцію formatMessage(message, maxLength),
//   яка приймає рядок(параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини(параметр maxLength).

// Доповни код функції таким чином, що:

// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів,
//   додає трикрапку "..." в кінці та повертає обрізану версію.

// function formatMessage(message, maxLength) {
//   return message.length <= maxLength
//     ? message
//     : `${message.slice(0, maxLength)}...`;
// }

// console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
// console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"
//
//
///
//
//-----------//

// Функція checkForSpam(message) приймає рядок(параметр message), перевіряє його на вміст заборонених слів spam і sale,
//   і повертає результат перевірки.Слова в рядку параметра message можуть бути в довільному регістрі,
//     наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

// function checkForSpam(message) {
//   const messageText = message.toLowerCase();
//   const messageSpam = messageText.includes('spam');
//   const messageSale = messageText.includes('sale');

//   if (messageSpam || messageSale) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('Amazing SalE, only tonight!')); // true
// console.log(checkForSpam('Trust me, this is not a spam message')); // true
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
//
//
//
//
// -------------------- //

// Оголоси функцію getShippingCost(country),
//   яка повинна перевіряти можливість доставки товару в країну користувача(параметр country)
//   і повертати повідомлення про результат.Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits",
//   де замість < country > і < price > необхідно підставити відповідні значення.

// Список країн і вартість доставки:
// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів

// Зі списку видно, що доставка можлива не скрізь.Якщо зазначена країна відсутня у списку,
//   то функція повинна повернути рядок "Sorry, there is no delivery to your country".

// function getShippingCost(country) {
//   const priceChina = 100;
//   const priceChile = 250;
//   const priceAustralia = 170;
//   const priceJamaica = 120;

//   switch (country) {
//     case 'China':
//       return `"Shipping to ${country} will cost ${priceChina} credits"`;
//     case 'Chile':
//       return `"Shipping to ${country} will cost ${priceChile} credits"`;
//     case 'Australia':
//       return `"Shipping to ${country} will cost ${priceAustralia} credits"`;
//     case 'Jamaica':
//       return `"Shipping to ${country} will cost ${priceJamaica} credits"`;
//     default:
//       return '"Sorry, there is no delivery to your country"';
//   }
// }

// console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
