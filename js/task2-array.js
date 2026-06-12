// const array = ['Hello world', null, true, 15, false, 98, 3];
// console.log(array);
// const firstEl = array[0];
// console.log(firstEl);
// const lastInd = array.length - 1;
// console.log(lastInd);
// const lastEl = array[lastInd];
// console.log(lastEl);

// const arrayJoin = array.join('+');
// console.log(arrayJoin);

// const arraySplit = firstEl.split('');
// console.log(arraySplit);

// const arrayJoinSp = arraySplit.join('');
// console.log(arrayJoinSp);

// const arraySlice = array.slice(1, 6);
// console.log(arraySlice);

// for (let i = 0; i < array.length; i += 1) {
//   const item = array[i];
//   console.log(item);
// }

// for (const item of array) {
//   console.log(item);
// }

// const a = [15, 9, 3];

// a[0] = 6;
// console.log(a);

// a.push(4, 7, 9);
// console.log(a); //(6) [15, 9, 3, 4, 7, 9]
// console.log(a.push(5, 8, 3)); // 9

// a.pop();
// console.log(a); // (8) [15, 9, 3, 4, 7, 9, 5, 8]
// a.pop();
// console.log(a); // (7) [15, 9, 3, 4, 7, 9, 5]

// console.log(a.unshift(0));
// console.log(a.shift());

// ----------------------- //
// Напиши скрипт який буде перебирати масив та
//  видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arr = [3, 'Hello', null, 42, false, 'okay'];
// console.log(arr);

// for (let i = 0; i < arr.length; i += 1) {
//   if (typeof arr[i] !== 'number') {
//     arr.splice(i, 1);
//     i -= 1;
//   }
// }
// console.log(arr);

// for (let i = arr.length - 1; i >= 0; i -= 1) {
//   if (typeof arr[i] !== 'number') {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

//---------------------//
// Task - 2;
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому
//  та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.includes(arr[i], i + 1) && !result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(getCommonElements([1, 2, 3, 1, 2, 17, 2, 19]));

//------------//

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та
// повернути їх в результаті свого виканання.

const users = [
  'Artem',
  'Anna',
  'Larisa',
  'Maksim',
  'Svetlana',
  'David',
  'Roman',
  'Olga',
];
const men = ['Artem', 'Maksim', 'David', 'Roman'];

// function getWomen(users, men) {
//   const women = [];

//   for (let user of users) {
//     if (!men.includes(user)) {
//       women.push(user);
//     }
//   }
//   return women;
// }

// console.log(getWomen(users, men));

// const women = [];
// function getWomen(users, men) {
//   for (let i = 0; i < users.length; i += 1) {
//     if (!men.includes(users[i])) {
//       women.push(users[i]);
//     }
//   }
//   return women;
// }

// console.log(getWomen(users, men));

//-------------//
// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер)
//  і виводить його в консоль.

// const string = 'Welcome to the future';

// console.log(string.split('').reverse().join(''));

//-----------//
// Напиши скрипт який буде перевіряти чи елементи в масиві
// розташовані в порядку зростання,
// якщо ні то замінювати елементи на вірнi

// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

// for (let i = 1; i < numbers.length; i += 1) {
//   const currentEl = numbers[i];
//   const prevEl = numbers[i - 1];
//   // console.log(currentEl, prevEl);
//   if (currentEl <= prevEl) {
//     numbers[i] = prevEl + 1;
//   }
// }

// console.log(numbers);

//-------------//

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує
//  та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {
//   switch (arr.length) {
//     case 0:
//       return 'no one likes this';
//     case 1:
//       return `${arr[0]} likes this`;
//     case 2:
//       return `${arr[0]} and ${arr[1]} like this`;
//     case 3:
//       return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//     default:
//       return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//   }
// }

// console.log(createStr([]));
// console.log(createStr(['Peter']));
// console.log(createStr(['Jacob', 'Alex']));
// console.log(createStr(['Max', 'John', 'Mark']));
// console.log(createStr(['Mark', 'Alex', 'Jacob', 'Mark']));

//--------------//
