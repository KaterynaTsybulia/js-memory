// -------------------lesson 2---------------//
// *? Напишіть код, який питання
// *? логін за допомогою prompt та логувати результат
// *? у консоль браузера

// *? Якщо відвідувач вводить "Admin",
// *? то prompt запитує пароль.
// *? Якщо нічого не ввели або натиснуто клавішу Esc
// *? вивести рядок "Canceled"
// *? В іншому випадку вивести рядок "Я вас не знаю"

// *? Пароль перевірять так:
// *? Якщо введено пароль "Password",
// *? то вивести рядок "Вітаю"
// *? інакше виводить рядок "Невірний пароль!"
//  */
/*



const login = prompt("Your login").trim();
if (login === "Admin") {
  const password = prompt("Enter password").trim();
  if (password === "Password") {
    alert("Вітаю");
  } else {
    alert("Невірний пароль!");
  }
} else if (!login) {
  // } else if (login === null || login === "") {
  alert("Canceled");
} else {
  alert("Я вас не знаю");
}
/*


 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і 
 for...of
 */

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tennis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);
// for (const key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }

// const keys = Object.keys(user)
// for (let key of keys) {
//   console.log(  `${key} : ${user[key]}` )
// }

// console.log( )

// /**
// //  *? Напишіть ф-цію calcTotalPrice(someStones, stoneName),
// //  *? яка приймає масив об'єктів та
// //  *? рядок із назвою каменю.
// //  *? Функція рахує та повертає загальну вартість каменів
// //  *? з таким ім'ям, ціною та кількістю з об'єкта
// //  */
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 6 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 150, quantity: 100 },
// ];

// function calcTotalPrice(someStones, stoneName) {
//   for (let stone of someStones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return 'Not Found yours Stone';
// }
// console.log(calcTotalPrice(stones, ''));

//  Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// Зробіть знижку 20 % на всі фрукти у масиві
//  Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: 'apple', price: 200 },
//   { name: 'orange', price: 300 },
//   { name: 'grapes', price: 750 },
// ];

// updateArray(fruits);

// function updateArray(arr) {
//   let newArr = [];
//   let id = 0;
//   for (const el of arr) {
//     let newel = { ...el, price: el.price * 0.8, id: id };
//     id += 1;
//     newArr.push(newel);
//   }
//   return newArr;
// }
// console.log(updateArray(fruits));
// console.log(fruits);

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

// const arr = ['best', 'the', 'foo', 'is', 'js'];

// const copyArr = [...arr];
// const index = copyArr.indexOf('foo');
// copyArr.splice(index, 1);
// copyArr.reverse();
// const string = copyArr.join(' ');
// console.log(arr);
// console.log(string);

// const string = arr
//   .slice(0, arr.indexOf('foo'))
//   .concat(arr.slice(arr.indexOf('foo') + 1, arr.length))
//   .reverse()
//   .join(' ');

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */
// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function sumSallary(obj) {
//   let sum = 0;
//   for (let value in obj) {
//     sum += obj[value];
//   }
//   return sum;
// }

// sumSallary(someObj);

// function sumSallary(obj) {
//   let sum = 0;
//   const sallary = Object.values(obj);
//   for (let value of sallary) {
//     sum += value;
//   }
//   return sum;
// }

// sumSallary(someObj);

/*Напишіть функцію checkBrackets(str) яка приймає рядок gжс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/
// const someFn = `function foo() {
//   const arr = [1, 2, 3];
//   console.log(arr);
// }`;

// function checkBrackets(str) {
//   const stack = [];
//   const obj = {
//     '(': ')',
//     '{': '}',
//     '[': ']',
//   };
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);
//     const bracket = str[i];
//     // console.log(bracket);
//     if (bracket === '(' || bracket === '{' || bracket === '[') {
//       stack.push(bracket);
//       // console.log(stack);
//     }
//     if (bracket === '}' || bracket === ')' || bracket === ']') {
//       // console.log(stack);
//       const lastEl = stack.pop();
//       // console.log(stack);
//       // console.log(lastEl);
//       // console.log(bracket);
//       if (bracket !== obj[lastEl]) {
//         return false;
//       }
//     }
//   }
//   if (stack.length) return false;
//   return true;
// }

// console.log(checkBrackets(someFn));

// Напиши функцію, яка приймає два масиви і повертає массив спільних значень
// const firstArray = [1, 2, 3, 7, 5];
// const secondArray = [3, 5, 4, 2, 9];

// function commonNumbers(arr1, arr2) {
//   const commonArray = [];

//   for (const number of arr1) {
//     if (arr2.includes(number)) {
//       commonArray.push(number);
//     }
//   }
//   return commonArray;
// }
// commonNumbers(firstArray, secondArray);

//  Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
//  Зробіть знижку 20 % на всі фрукти у масиві
//  Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: 'apple', price: 200 },
//   { name: 'orange', price: 300 },
//   { name: 'grapes', price: 750 },
// ];

// const newfruits = array =>
//   array.map((fruit, idx) => {
//     return { ...fruit, price: fruit.price * 0.8, id: idx + 1 };
//   });
// console.log(newfruits(fruits));

// Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel

// class Worker {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   getSalary() {
//     return this.salary;
//   }
// }

// class TopLevelWorker extends Worker {
//   constructor(name, age, salary, hierarchyLevel) {
//     super(name, age, salary);
//     this.hierarchyLevel = hierarchyLevel;
//   }
//   getHierarchyLevel() {
//     return this.hierarchyLevel;
//   }
// }

// const newWorker = new TopLevelWorker('Anna', 20, 2000, 'top');
// console.log(newWorker);

/**
 * Напиши клас Client який створює об'єкт
 * з ​​властивостями login email
 * Оголоси приватні властивості #login #email,
 * доступ до яких зроби через геттер та сеттер login email
 */

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     return (this.#login = newLogin);
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }
// }

// const newClient = new Client('Anna', 'anna@gmail.com');
// console.log(newClient.login);
// console.log(newClient.email);
// newClient.login = 'Kate';
// console.log(newClient.login);

// Напиши клас Product з приватними властивостями #name і #price.
// Зроби геттери для обох, а в сеттері price додай перевірку:
// ціна не може бути від'ємною або не числом. Якщо перевірка не пройшла,
// виведи в консоль повідомлення і не змінюй значення

// class Product {
//   #name;
//   #price;
//   constructor(name, price) {
//     this.#name = name;
//     this.price = price;
//   }

//   get name() {
//     return this.#name;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (
//       newPrice < 0 ||
//       typeof newPrice !== 'number' ||
//       Number.isNaN(newPrice)
//     ) {
//       console.log('не коректне число');
//       return;
//     }
//     this.#price = newPrice;
//   }
// }

// const p = new Product('Телефон', 500);
// p.price = -10; // Некоректна ціна
// p.price = 'abc'; // Некоректна ціна
// p.price = 700;
// console.log(p.price); // 700

// Напиши клас BankAccount з приватним #balance(початково 0).
// Додай методи deposit(amount), withdraw(amount) і геттер balance.
// Не можна зняти більше, ніж є на рахунку.

// class BankAccount {
//   #balance;

//   constructor() {
//     this.#balance = 0;
//   }

//   get balance() {
//     return this.#balance;
//   }

//   deposit(amount) {
//     if (typeof amount !== 'number' || amount <= 0) {
//       console.log('Некоректна сума');
//       return;
//     }
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     if (typeof amount !== 'number' || Number.isNaN(amount) || amount <= 0) {
//       console.log('Некоректна сума');
//       return;
//     }
//     if (amount > this.#balance) {
//       console.log('Недостатньо коштів');
//       return;
//     }
//     this.#balance -= amount;
//   }
// }

// const acc = new BankAccount();
// acc.deposit(1000);
// console.log(acc.balance); // 1000
// acc.withdraw(300);
// console.log(acc.balance); // 700
// acc.withdraw(5000); // Недостатньо коштів
// acc.withdraw(-5); // Некоректна сума
// console.log(acc.balance); // 700

// Додай до класу Client статичну властивість count,
//   яка рахує, скільки об'єктів створено.
//   Також додай статичний метод Client.getCount().

// class Client {
//   static #count = 0;
//   #email;
//   #name;
//   constructor(email, name) {
//     this.#email = email;
//     this.#name = name;

//     Client.#count++;
//   }

//   static getCount() {
//     return this.#count;
//   }
// }

// const c1 = new Client('anna@gmail.com', 'Anna');
// const c2 = new Client('kate@gmail.com', 'Kate');
// console.log(Client.getCount()); // 2

// Завдання: напиши клас Product, у якого є приватні властивості name і price.
// Додай статичну приватну властивість count, яка рахує, скільки товарів створено.
// Додай статичний метод getCount(), який повертає це число.

// Підказка по кроках.Спочатку оголоси статичний лічильник зі значенням нуль.
// Потім у конструкторі збережи name і price, а наступним рядком збільшуй лічильник,
//   звертаючись до нього через ім'я класу, Product.
//   І наприкінці напиши статичний метод, який просто повертає лічильник.

// Щоб перевірити, створи три товари і виклич Product.getCount(), має вийти три.

// Зверни увагу, це майже копія Client: змінюється лише назва класу і назви властивостей.
// Саме так і закріплюється шаблон.Спробуй написати сама, а я перегляну.

// class Product {
//   #name;
//   #price;

//   static #count = 0;
//   static #products = [];
//   // static #amount = 0;

//   constructor(name, price) {
//     this.#name = name;
//     this.#price = price;
//     Product.#count++;
//     Product.#products.push(this);
//     // Product.#amount += price;
//   }

//   get name() {
//     return this.#name;
//   }
//   get price() {
//     return this.#price;
//   }
//   static getCount() {
//     return Product.#count;
//   }

//   static getNames() {
//     return Product.#products.map(product => product.name);
//   }

//   // static getAmount() {
//   //   return Product.#amount;
//   // }

//   static getAmount() {
//     return Product.#products.reduce((sum, product) => sum + product.price, 0);
//   }
// }

// const p1 = new Product('Телефон', 500);
// const p2 = new Product('Ноутбук', 1200);
// const p3 = new Product('Мишка', 20);

// console.log(Product.getCount()); // 3
// console.log(Product.getNames()); // ['Телефон', 'Ноутбук', 'Мишка']
// console.log(Product.getAmount()); // 1720
