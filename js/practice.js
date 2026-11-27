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

// Клас Student
// Приватні властивості #name і #grade (оцінка).
// Геттери для name і grade.
// Сеттер grade з перевіркою: оцінка має бути числом від 1 до 12. Якщо ні, виведи в консоль повідомлення і не змінюй значення.
// Конструктор має використовувати сеттер grade (пам'ятаєш, чому this.grade, а не this.#grade?).
// Статична приватна властивість #students (масив), у яку конструктор додає кожного нового студента.
// Статичний метод getNames(), що повертає масив імен усіх студентів (map).
// Статичний метод getAverageGrade(), що повертає середню оцінку всіх студентів (reduce, а потім поділити на кількість).

// class Student {
//   #name;
//   #grade;

//   static #students = [];

//   constructor(name, grade) {
//     this.#name = name;
//     this.grade = grade;
//     Student.#students.push(this);
//   }

//   get name() {
//     return this.#name;
//   }
//   get grade() {
//     return this.#grade;
//   }

//   set grade(newGrade) {
//     if (
//       typeof newGrade !== 'number' ||
//       Number.isNaN(newGrade) ||
//       newGrade <= 0 ||
//       newGrade > 12
//     ) {
//       console.log('Число повинно бути від 1 до 12');
//       return;
//     }
//     this.#grade = newGrade;
//   }

//   static getNames() {
//     return Student.#students.map(student => student.name);
//   }

//   static getAverageGrade() {
//     return (
//       Student.#students.reduce((sum, student) => sum + student.grade, 0) /
//       Student.#students.length
//     );
//   }
// }

// const s1 = new Student('Anna', 10);
// const s2 = new Student('Oleg', 8);
// const s3 = new Student('Kate', 12);

// console.log(Student.getNames()); // ['Anna', 'Oleg', 'Kate']
// console.log(Student.getAverageGrade()); // 10

// s1.grade = 15; // повідомлення про помилку
// console.log(s1.grade); // 10, не змінилось

// Підказки:

// Середнє це сума, поділена на кількість: сума / Student.#students.length.
// Перевірка оцінки схожа на перевірку ціни в Product: відсіюємо погане(не число, менше 1, більше 12),
//   робимо return, а присвоєння лишаємо наприкінці.

// Клас Employee (працівник)

// Приватні властивості #name і #salary (зарплата).
// Геттери для обох.
// Сеттер name з перевіркою: це має бути рядок, у якому щонайменше 2 символи.
// Якщо ні, виведи повідомлення в консоль і не змінюй значення.
//   Підказка: довжина рядка це newName.length.
// Сеттер salary з перевіркою: це має бути число більше 0.
// Конструктор має використовувати обидва сеттери.
//   Пам'ятаєш, this.name чи this.#name?
// Статична приватна властивість #employees (масив), у яку конструктор додає кожного нового працівника.
// Статичний метод getNames(), що повертає масив імен (map).
// Статичний метод getTotalSalary(), що повертає суму всіх зарплат (reduce).
// Звичайний метод raiseSalary(percent), який збільшує зарплату на вказаний відсоток.
//   Наприклад, для зарплати 1000 і raiseSalary(10) вийде 1100. Перевір, що percent це число більше 0.

// class Employee {
//   #name;
//   #salary;
//   static #employees = [];

//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//     Employee.#employees.push(this);
//   }

//   get name() {
//     return this.#name;
//   }

//   get salary() {
//     return this.#salary;
//   }
//   set name(newName) {
//     if (typeof newName !== 'string' || newName.length < 2) {
//       console.log("Ім'я повинно складатися щонайменше 2 символи");
//       return;
//     }
//     this.#name = newName;
//   }

//   set salary(newSalary) {
//     if (
//       typeof newSalary !== 'number' ||
//       Number.isNaN(newSalary) ||
//       newSalary <= 0
//     ) {
//       console.log('Сумма не пыдходить');
//       return;
//     }
//     this.#salary = newSalary;
//   }

//   static getNames() {
//     return Employee.#employees.map(employee => employee.name);
//   }

//   static getTotalSalary() {
//     return Employee.#employees.reduce(
//       (sum, employee) => sum + employee.salary,
//       0
//     );
//   }

//   raiseSalary(percent) {
//     if (typeof percent !== 'number' || Number.isNaN(percent) || percent <= 0) {
//       console.log('Відсоток повинен бути більше 0');
//       return;
//     }
//     this.salary = this.salary + (this.salary * percent) / 100;
//   }
// }

// const e1 = new Employee('Anna', 1000);
// const e2 = new Employee('Oleg', 2000);
// const e3 = new Employee('Kate', 1500);

// console.log(Employee.getNames()); // ['Anna', 'Oleg', 'Kate']
// console.log(Employee.getTotalSalary()); // 4500

// e1.raiseSalary(10);
// console.log(e1.salary); // 1100

// e2.name = 'A'; // повідомлення про помилку
// console.log(e2.name); // 'Oleg', не змінилось

// У пункті 9 нову зарплату можна порахувати так: this.salary + this.salary * percent / 100,
//   а потім присвоїти через this.salary = ..., щоб спрацювала перевірка.
// Для name перевірка схожа на ту, що була для grade, тільки погані значення інші: не рядок, або newName.length < 2.

// Клас Book (книга)

// Приватні властивості #title і #pages (кількість сторінок).
// Геттери для обох.
// Сеттер title: це має бути рядок, у якому щонайменше 1 символ.
// Сеттер pages: це має бути число більше 0.
// Конструктор використовує обидва сеттери.
// Статична приватна властивість #books (масив), у яку конструктор додає кожну нову книгу.
// Статичний метод getTitles(), що повертає масив назв (map).
// Статичний метод getTotalPages(), що повертає суму сторінок усіх книг (reduce).
// Звичайний метод addPages(count), який збільшує кількість сторінок на count. Перевір, що count це число більше 0.

// class Book {
//   #title;
//   #pages;
//   static #books = [];

//   constructor(title, pages) {
//     this.title = title;
//     this.pages = pages;
//     Book.#books.push(this);
//   }

//   get title() {
//     return this.#title;
//   }

//   get pages() {
//     return this.#pages;
//   }

//   set title(newTitle) {
//     if (typeof newTitle !== 'string' || newTitle.length < 1) {
//       console.log('Заголовок повинен бути від 1 символа');
//       return;
//     }
//     this.#title = newTitle;
//   }

//   set pages(newPages) {
//     if (
//       typeof newPages !== 'number' ||
//       Number.isNaN(newPages) ||
//       newPages <= 0
//     ) {
//       console.log('Сторінок повинно бути бути від 1');
//       return;
//     }
//     this.#pages = newPages;
//   }

//   static getTitles() {
//     return Book.#books.map(book => book.title);
//   }

//   static getTotalPages() {
//     return Book.#books.reduce((sum, book) => sum + book.pages, 0);
//   }

//   addPages(count) {
//     if (typeof count !== 'number' || Number.isNaN(count) || count <= 0) {
//       console.log('Множном повинен бути більше 0');
//       return;
//     }
//     this.pages += count;
//   }
// }

// const b1 = new Book('Кобзар', 300);
// const b2 = new Book('Intermezzo', 150);
// const b3 = new Book('Лісова пісня', 200);

// console.log(Book.getTitles()); // ['Кобзар', 'Intermezzo', 'Лісова пісня']
// console.log(Book.getTotalPages()); // 650

// b1.addPages(50);
// console.log(b1.pages); // 350

// b2.pages = -5; // повідомлення про помилку
// console.log(b2.pages); // 150

// Це стосується однієї книги чи всіх разом ? Одна книга означає звичайний метод, без static.
// Усі разом означає static, і звертаємось через Book.
// Це читають і присвоюють без дужок(b1.pages) чи викликають як дію(b1.addPages(50)) ?
//   Без дужок це get / set.З дужками це звичайний метод, без get і set.
// Решітка чи ні ? Всередині сеттера пишемо this.#pages, бо туди вже потрапило перевірене значення.
// Скрізь деінде(конструктор, інші методи) пишемо this.pages, щоб спрацювала перевірка.

// Клас Movie (фільм)

// Приватні властивості #title і #rating (рейтинг).
// Геттери для обох.
// Сеттер title: це має бути рядок, у якому щонайменше 1 символ.
// Сеттер rating: це має бути число від 1 до 10.
// Конструктор використовує обидва сеттери.
// Статична приватна властивість #movies (масив), у яку конструктор додає кожен новий фільм.
// Статичний метод getTitles(), що повертає масив назв (map).
// Статичний метод getAverageRating(), що повертає середній рейтинг усіх фільмів (reduce, а потім поділити на кількість).
// Звичайний метод isGood(), який повертає true, якщо рейтинг 7 або більше, і false, якщо менше.
// Звичайний метод changeRating(newRating), який міняє рейтинг на новий.

// class Movie {
//   #title;
//   #rating;
//   static #movies = [];

//   constructor(title, rating) {
//     this.title = title;
//     this.rating = rating;
//     Movie.#movies.push(this);
//   }

//   get title() {
//     return this.#title;
//   }

//   get rating() {
//     return this.#rating;
//   }

//   set title(newTitle) {
//     if (typeof newTitle !== 'string' || newTitle.length < 1) {
//       console.log('Newtitle must have 1 length');
//       return;
//     }
//     this.#title = newTitle;
//   }

//   set rating(newRating) {
//     if (
//       typeof newRating !== 'number' ||
//       Number.isNaN(newRating) ||
//       newRating < 1 ||
//       newRating > 10
//     ) {
//       console.log('newRating must in 1 for 10');
//       return;
//     }
//     this.#rating = newRating;
//   }

//   static getTitles() {
//     return Movie.#movies.map(movie => movie.title);
//   }

//   static getAverageRating() {
//     return (
//       Movie.#movies.reduce((sum, movie) => sum + movie.rating, 0) /
//       Movie.#movies.length
//     );
//   }

//   isGood() {
//     return this.rating >= 7;
//   }

//   changeRating(newRating) {
//     this.rating = newRating;
//   }
// }

// const m1 = new Movie('Інтерстеллар', 9);
// const m2 = new Movie('Тітанік', 7);
// const m3 = new Movie('Нудне кіно', 4);

// console.log(Movie.getTitles()); // ['Інтерстеллар', 'Тітанік', 'Нудне кіно']
// console.log(Movie.getAverageRating()); // 6.666...

// console.log(m1.isGood()); // true
// console.log(m3.isGood()); // false

// m3.changeRating(8);
// console.log(m3.rating); // 8
// console.log(m3.isGood()); // true

// m2.rating = 15; // повідомлення про помилку
// console.log(m2.rating); // 7

// 1. Оператор new

//   Напиши клас Dog з name(звичайна властивість, без #).
// Створи двох собак через new.Виведи в консоль обох і перевір:

// class Dog {
//   name;
// }

// class User {
//   name;
// }

// const dog1 = new User('Bob');
// const dog2 = new Dog('Bob');

// console.log(dog1 === dog2); // фолс, тому що  знак порівняя, а це два різних об'єкта
// console.log(dog1 instanceof Dog); // так, тому що,dog1 був створенний від Dog, тобто dog1 включає Dog

// Своїми словами: чому це два різні об'єкти, хоча створені з одного класу?

// 2. Об'єкт параметрів

// Перероби Client так, щоб конструктор приймав один об'єкт:

// class Client {
//   #login;
//   #email;

//   constructor(params) {
//     this.email = params.email;
//     this.login = params.login;
//   }

//   get email() {
//     return this.#email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const c = new Client({ login: 'Anna', email: 'anna@gmail.com' });
// console.log(c);

// const c1 = new Client({ login: 'Anna', email: 'anna@gmail.com' });
// const c2 = new Client({ email: 'kate@gmail.com', login: 'Kate' });

// console.log(c1.login, c1.email); // Anna anna@gmail.com
// console.log(c2.login, c2.email); // Kate kate@gmail.com

// Приватні #login і #email, геттери і сеттери, як раніше.
//   Перевір, що порядок ключів в об'єкті не впливає:
// поміняй email і login місцями, результат має бути той самий.
