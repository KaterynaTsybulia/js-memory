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

// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
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
const firstArray = [1, 2, 3, 7, 5];
const secondArray = [3, 5, 4, 2, 9];

function commonNumbers(arr1, arr2) {
  const commonArray = [];

  for (const number of arr1) {
    if (arr2.includes(number)) {
      commonArray.push(number);
    }
  }
  return commonArray;
}
commonNumbers(firstArray, secondArray);
