// const user = {
//   name: 'Alice',
//   skills: {
//     html: true,
//     css: true,
//     react: false,
//   },
//   case2: 'some value',
// };

// console.log(user);

// console.log(user.name);
// console.log(user.case2);

// const user = {
//   name: 'Alice',
//   skills: {
//     html: true,
//     css: true,
//     react: false,
//   },
//   case2: 'some value',
// };
// console.log(user['name']);

// const objectKey = 'name';
// console.log(user[objectKey]); // user['name']

// console.log('css', user.skills.css);
// console.log('css', user['skills']);

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user['skills']['css'] = false

// user.city = 'Lviv';
// user['age'] = 28;
// console.log(user);

// user.city = 'Odessa';
// user['age'] = 38;
// console.log(user);

// ****************Object.freeze**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// Object.freeze(user);
// user.name = 'Kate';
// user.city = 'Lviv';
// Object.freeze(user.skills)
// user.skills.css = 'some value'

// console.log(user);

// ****************Методи об'єкта**************** \\
// function sayHello(city) {
//   // console.log(city);
//   console.log(this);
//   console.log(`Hello my name ${this.name}`);
// }
// console.log(sayHello)

// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// //   sayHello: sayHello
//   sayHello(city) {
//     // console.log(city);
//     console.log(this);
//     // console.log(`Hello my name ${this.name}`);

//     return `Hello my name ${this.name}`
//   },
// };
// document.querySelector('h1').textContent = user.sayHello("Lviv");
// console.log(user.sayHello)

// const userA = {
//   name: "Kate",
//   sayHello: sayHello,
// };
// userA.sayHello();

// ****************Цикл for...in**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     }
// }

// const userA = Object.create(user)
// userA.city = 'Lviv'
// console.log(userA)

// for(const key in userA){
//     // console.log(key)
//     console.log(key, userA[key]);
// }

// ****************Метод Object.keys()**************** \\
// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// const keys = Object.keys(user);
// console.log(keys);

// for (const key of keys) {
//   console.log(key, user[key]);
// }
// console.log(keys);

// ****************Метод Object.values()**************** \\

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// const values = Object.values(user);
// const values = Object.values(user.skills);
// console.log(values);

// ****************Метод Object.entries()**************** \\

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// // const entries = Object.entries(user);
// const entries = Object.entries(user.skills);
// console.log(entries);

// function foo() {
//   console.log(this);
//   console.log(this.price);
// }

// const productA = {
//   name: 'Cherry',
//   price: 100,
//   showPrice: foo,
// };
// productA.showPrice();
// const productB = {
//   name: 'banana',
//   price: 60,
//   showPrice: foo,
// };

// const productC = {
//   name: 'apple',
//   price: 30,
//   showPrice: foo,
// };
// productB.showPrice();
// productC.showPrice();

// ****************Практика**************** \\
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
//   const resulte = {
//     name: product,
//     price,
//     quantity,
//     totalPrice: quantity * price,
//   };

//   return resulte;
// }
// console.log(createBasket('pizza', 3, 120));
// console.log(createBasket('aplle', 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу.
// Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача,
//  а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та
// який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {
//   const values = Object.values(obj);
//   let total = 0;

//   for (const value of values) {
//     total += value;
//   }
//   console.log(total);
//   return `Count of players ${values.length}, average time ${total / values.length}`;
// }

//   let countPlayers = 0;
//   let totalMinutes = 0;

//   for (const key in obj) {
//     totalMinutes += obj[key];
//     countPlayers += 1;
//   }

//   return `Count of players ${countPlayers}, average time ${totalMinutes / countPlayers}`;
// }
// console.log(getTime(players));

// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
//   { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//   { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
//   {
//     name: 'Oleksii',
//     books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//     age: 26,
//   },
// ];

// function getUsers(arr, bookName) {
//   const userName = [];

//   for (const user of arr) {
//     if (user.books.includes(bookName)) {
//       userName.push(user.name);
//     }
//   }
//   return userName.join(', ');
// }

// console.log(getUsers(friends, 'Harry Potter'));

//--------------------2---------------//

// function getTotalAge(arr) {
//   let totalAge = 0;

//   for (const user of arr) {
//     // console.log(user.hasOwnProperty('age'));
//     if (user.hasOwnProperty('age')) {
//       totalAge += user.age;
//     }
//     // if(user.age){
//     //     totalAge += user.age;
//     // }
//     // if ("age" in user) { // key in object
//     //     totalAge += user.age
//     // }
//   }
//   return totalAge;
// }
// console.log(getTotalAge(friends));

// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та
// повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та
//  повертати кількість очків факультету (перевірити чи є властивість points !!!)

// const hogvarts = {
//   griffindor: [
//     {
//       name: 'Harry',
//       points: 17,
//     },
//     {
//       name: 'Hermiona',
//       points: 19,
//     },
//     {
//       name: 'Ron',
//       points: 14,
//     },
//   ],
//   slizerin: [
//     {
//       name: 'Draco',
//       points: 17,
//     },
//     {
//       name: 'Goyl',
//       points: 14,
//     },
//     {
//       name: 'Crabbe',
//       points: 5,
//     },
//   ],

//   getUserList(faculty) {
//     if (!(faculty in this)) {
//       return 'Facult not found 😥';
//     }
//     const users = [];
//     for (const student of this[faculty]) {
//       users.push(student.name);
//     }
//     return users.join(', ') + '.';
//   },
// };

// console.log(hogvarts.getUserList('griffindor'));
// console.log(hogvarts.getUserList('slizerin'));
// console.log(hogvarts.getUserList('slitherin'));

// console.log(hogvarts.getTotalPoints('griffindor'));
// console.log(hogvarts.getTotalPoints('slizerin'));
// console.log(hogvarts.getTotalPoints('slitherin'));

// ----------------- 2 Part --------------------- //

// ******************************Деструктуризація масива***************************************\\
// const arr = [1, 2, 3, 4, 5];

// const [first, second, third] = arr;

// console.log(first);
// console.log(second);
// console.log(third);

// const [, , , , last] = arr;
// console.log(last);
// console.log(arr);

// ******************************Деструктуризація об'єкта***************************************\\
// const user = {
//   name: 'Test name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
// const skills = ['html', 'css', 'js'];

// const { skills: userSkills } = user;
// console.log(user);
// console.log(skills);
// console.log(userSkills);

// const { skills, name } = user;

// const name = user.name;
// const skills = user.skills;

// ************************Глибока деструктуризація об'єкта***************************************\\

// const user = {
//   name: 'Test name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   languages: {
//     ukrainian: true,
//     spanish: false,
//   },
//   sayHello() {
//     console.log(this);
//     console.log('hello');
//   },
// };

// const {
//   skills: { html: skillHTML, css, js },
//   skills,
//   languages: { ukrainian, spanish },
//   sayHello,
// } = user;

// console.log(ukrainian);
// console.log(sayHello);
// sayHello();
// user.sayHello();

// *********************Деструктуризація об'єкта в параметрах функції******************************\\

// const user = {
//   name: 'Test name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// *********Без деструктуризації
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

// getUserName(user);

// *********З деструктуризацією
// const user = {
//   name: 'Test name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
// function getUserName({ name, skills: { html, css, js } = {} } = {}) {
//   console.log(
//     `Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`
//   );
// }

// getUserName(user);

// *************************Деструктуризація об'єкта в циклі***********************************\\

// const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }];

// function getAllPropValues(prop) {
//   const result = [];
//   for (const user of users) {
//     if (user.hasOwnProperty(prop)) {
//       // prop in user

//       result.push(user[prop]);
//     }
//   }

//   return result;
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('qwerty'));

// ********Без деструктуризації*******
// const names = [];

// for (const user of users) {
//   names.push(user.name);
// }

// console.log(names);

// ********З деструктуризацією*********
// const names = [];

// for (const { name } of users) {
//   names.push(name);
// }

// console.log(names);

// *************************Операція rest та spread********************************\\

// const numbers = [1, 2, 3];
// const copy = [...numbers]; //spread
// console.log(numbers === copy);

// const numbers = [1, 2, 3];
// const [first, ...args] = numbers; // rest
// console.log(first);
// console.log(args);

// ************Операція rest та spread в функціях********************************\\

// const numbers = [1, 2, 3];

// function foo(...props) {
//   //rest [1,2,3]
// }
// foo(...numbers); // spread // 1 , 2 ,3

// const names = ['Alice', 'Kate', 'Emma'];

// function foo(first, second, third) {
//   console.log('first', first);
//   console.log('second', second);
//   console.log('third', third);
// }

// foo(...names); // foo('Alice', 'Kate', 'Emma')// spread

// const names = ['Alice', 'Kate', 'Emma'];
// function foo(first, second, ...args) {
//   //rest
//   console.log(first);
//   console.log(second);
//   console.log(args);
// }

// foo('Alice', 'Kate', 'Emma', 'Mia', 'Lily');

// const user = {
//   name: 'Test name',
//   age: 22,
//   city: 'Lviv',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// function foo({ name, age, ...props }) {
//   console.log(name);
//   console.log(age);
//   console.log(props);
// }
// foo(user);

// const user = {
//   name: 'Test name',
//   age: 22,
//   city: 'Lviv',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// function foo({ name, skills: { html, ...props2 }, ...props }) {
//   console.log(name);
//   console.log(html);
//   console.log(props);
//   console.log(props2);
// }
// foo(user);

// ПЕРЕРВА ДО 21.00

// Task - 1 - Деструктуризація
// Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username

// const user = {
//   id: 1,
//   username: 'harry_potter',
//   profile: {
//     name: 'Harry',
//     surname: 'Potter',
//     age: 25,
//   },
// };

// // Деструктуризація об'єкта для отримання окремих змінних
// const {
//   username,
//   profile: { name, surname },
// } = user;

// // Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);

// Task - 2 Деструктуризація
// Допиши функцію таким чином щоб кожна властивість об'єкта product
// була незалежним параметром

// const product = {
//   name: 'Smart TV',
//   price: 25000,
//   category: 'Electronics',
//   details: {
//     brand: 'Samsung',
//     color: 'Black',
//     weight: '15.5',
//   },
// };

// function displayProductInfo({
//   name,
//   price,
//   category,
//   details: { brand, color, weight } = {},
// } = {}) {
//   console.log(`Назва товару: ${name}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log('Деталі:');
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);

// Task - 3 - Операція spread
// Напиши функцію createContact(partialContact) так,
//  щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt,
// а також list зі значенням "default" якщо в partialContact немає такої властивості.

// function createContact(partialContact) {
//   return {
//     id: Date.now(),
//     createdAt: new Date(),
//     list: 'default',
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// Task - 4 - Операція rest
// Напиши функцію transformUsername(user) так,
// щоб вона повертала новий об'єкт із властивістю fullName,
// замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...rest }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...rest,
//   };
// }

// function transformUsername(obj) {
//   const result = {};
//   for (const prop in obj) {
//     if (prop === 'firstName' || prop === 'lastName') {
//       continue;
//     }
//     result[prop] = obj[prop];
//   }
//   result.fullName = obj.firstName + ' ' + obj.lastName;

//   return result;
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

// Task - 5 Об'єкт параметрів
// Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
// так щоб вона приймала об'єкт з параметрами будинку, включаючи довжини сторін будинку.
//  Функція повинна розрахувати та повернути периметр будинку.

// function calculateHousePerimeter({ sideA: a, sideB: b, sideC: c, sideD: d }) {
//   const perimeter = a + b + c + d;
//   return perimeter;
// }

// const perimeter = calculateHousePerimeter({
//   sideA: 10,
//   sideB: 15,
//   sideC: 10,
//   sideD: 15,
// });
// console.log(`Периметр будинку: ${perimeter}`);
