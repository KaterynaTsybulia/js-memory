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

// const users = [
//   'Artem',
//   'Anna',
//   'Larisa',
//   'Maksim',
//   'Svetlana',
//   'David',
//   'Roman',
//   'Olga',
// ];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

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

// Part2

// const number = [1, 2, 3, 4, 5];
// const a = number;

// number.splice(0, 1);
// a.splice(0, 1);

// console.log(a);
// console.log(number);

// ----------- Function expression ----------//

// const foo = function (a, b = []) {
//   console.log('a', a);
//   console.log('b', b);
//   return a + b;
// };

// console.log(foo(10));
// console.log(foo(10, [1, 2, 3]));
// console.log(foo(10, 20, 30, 40));

// ------------- Function declaration---------//

// foo(10, 15);

// function foo(a = 0, b = 1, c = 2) {
//   console.log('a', a);
//   console.log('b', b);
//   console.log('c', c);
// }

// Псевдомасив arguments

// function getSum() {
//   console.log(arguments);

// for (const argum of arguments) {
//   console.log(argum);
// }

// for (let i = 0; i < arguments.length; i += 1) {
//   console.log(arguments[i]);
// }

// const array = Array.from(arguments);
// console.log(array);

//   const array = [...arguments];
//   console.log(array);
// }

// getSum(1, 2, 3);
// getSum(1, 2, 3, 4, 5);

// Області видимості, присвоєння за посиланням та значенням

// Example 1
// let someValue = 4;

// if (true) {
//   let someValue = 12;
//   // someValue = 11;
//   console.log(someValue);
// }

// console.log(someValue);

// // Example 2
// let someValue = 4;

// if (true) {
//   let someValue = 11;
//   console.log('local', someValue);
// }

// console.log('global', someValue);

//// Example 3
// let someValue = 4;

// if (true) {
//   if (true) {
//     someValue = 24;
//   }
//   let someValue = 11;
// }

// console.log(someValue);

// // Example 4
// let someValue = 2;

// function checkScope(someValue) {
//   // let someValue = 2
//   someValue = 45;
//   return someValue;
// }

// console.log(checkScope(someValue));

// console.log(someValue);

// Example 5
// let someValue = 2;

// function checkScope() {
//   someValue = 45;
//   return someValue;
// }

// checkScope(someValue);

// console.log(someValue);

// Example 6
// let someValue = 2;

// function checkScope() {
//   someValue = 42;
//   return someValue;
// }

// checkScope();
// console.log(someValue);

// Example 7
// let someArray = ['Hello', 'my', 'name', 'scope'];

// function checkScope(arr) {
//   arr.splice(0, 3);
// }

// checkScope(someArray);

// console.log(someArray);

// let someArray = ['Hello', 'my', 'name', 'scope'];

// function checkScope(arr) {
//   arr = Array.from(arr);

//   arr.splice(0, 3);
//   // console.log(arr);
// }

// checkScope(someArray);

// // console.log(someArray);

// Практика

// Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення.
// Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку
// (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(values, target) {
//   for (const value of values) {
//     if (value < target) {
//       return 'Fail ❌';
//     }
//   }
//   return 'Success ✅';
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));

// Task-2
// Створити функцію яка буде розбивати початковий масив на
// потрібну кількість елементів розділюячи на декілька масивів.
// Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
//   let total = [];

//   for (let i = 0; i < arr.length; i += count) {
//     const combination = arr.slice(i, i + count);
//     if (combination.length === count) {
//       total.push(combination);
//     }
//   }
//   return total;
// }

// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника
// зі сторонами, значення яких будуть передані до параметра dimensions
// у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//   const arr = dimensions.split(' ');
//   const firstEl = Number(arr[0]);
//   const secondEl = Number(arr[1]);

//   return firstEl * secondEl;
// }
// console.log(getRectArea('8 11'));
// console.log(getRectArea('15 11'));

// Task-4
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//   if (courses.includes(name)) {
//     return 'Ви вже маєте такий курс';
//   }
//   courses.push(name);
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS')); // 'Ви вже маєте такий курс'

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// function removeCourse(name) {
//   const nameIdx = courses.indexOf(name);
//   if (!~nameIdx) {
//     return "Курс із таким ім'ям не знайдено";
//   }
//   courses.splice(nameIdx, 1);
// }

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue')); // 'Курс із таким ім'ям не знайдено'

// const courses = ['HTML', 'CSS', 'Express', 'JavaScript', 'React', 'PostgreSQL'];
// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName);
//   if (!~idx) {
//     return "Курс із таким ім'ям не знайдено";
//   }
//   if (courses.includes(newName)) {
//     return 'Ви вже маєте такий курс';
//   }

//   courses[idx] = newName;
// }

// updateCourse('HTML', 'NestJS');
// console.log(courses); // ['NestJS', 'CSS', 'Express', 'JavaScript', 'React', 'PostgreSQL']

// console.log(updateCourse('NestJS', 'CSS'));
// console.log(updateCourse('qwerty', 'NestJS'));

// Напиши функцію slugify(title), яка приймає заголовок статті,
// параметр title і повертає slug, створений із цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.

// function slugify(title) {
//   const slug = title.toLowerCase().split(' ').join('-');
//   return slug;
// }

// console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); //

// Напиши функцію під назвою makeArray, яка приймає три параметри:
// firstArray(масив), secondArray(масив) і maxLength(число).
// Функція повинна створювати новий масив, який містить усі елементи з firstArray,
//  а потім усі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength,
//   функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);

//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   return newArray;
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(numbers)
// та значення(value) як параметри.
// Функція повинна повертати новий масив лише тих чисел із масиву numbers,
//   які більші за значення value.

// Усередині функції:

// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента
// и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

// function filterArray(numbers, value) {
//   const newArray = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
