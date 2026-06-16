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
