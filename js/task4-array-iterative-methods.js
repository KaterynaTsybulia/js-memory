// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
//  Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор
// у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// // function logTotalPrice(product) {
// //   console.log(product.price * product.quantity);
// // }

// function logTotalPrice({ price, quantity }) {
//   console.log(`Product total price ${price * quantity}`);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Task - 2
// Напишіть функцію яка буде отримувати 2 параметри.
// 1 - масив чисел.
// 2 - функцію яка має опрацювати кожен елемент масиву.
//
// Функція повертає новий масив кожен елемент якого є результатом виконання колбек функції

// function each(arr, action) {
//   const items = [];

//   arr.forEach(elem => {
//     const result = action(elem);
//     console.log(result);
//     items.push(result);
//   });
//   return items;
// }

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// Task-3
// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback.
// Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.
// У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.

// const products = [
//   {
//     id: 1,
//     name: 'Телефон',
//     price: 10000,
//     description: 'Смартфон з високоякісним дисплеєм та потужним процесором.',
//   },
//   {
//     id: 2,
//     name: 'Ноутбук',
//     price: 25000,
//     description: 'Легкий та потужний ноутбук для роботи та розваг.',
//   },
//   {
//     id: 3,
//     name: 'Планшет',
//     price: 8000,
//     description: 'Компактний планшет для перегляду контенту.',
//   },
// ];

// function getProductDetails(id, success, error) {
//   for (const product of products) {
//     if (product.id === id) {
//       return success(product);
//     }
//   }
//   error(product);
// }

// getProductDetails(3, handleSuccess, handleError);
// getProductDetails(44, handleSuccess, handleError);

// function handleSuccess(message) {
//   console.log(`✅ Success!`, message);
// }

// function handleError(productId) {
//   console.log(`❌ Error! Product with ${productId} id not found`);
// }

// Task-4
// Напишіть функцію calculateAveragePrice, яка приймає на вхід масив об'єктів,
// що представляють товари, та колбеки onSuccess та onError.
// Функція повинна обчислювати середню ціну товарів у масиві та викликати колбек onSuccess,
// передаючи йому отриману середню ціну як аргумент.
// Якщо масив товарів порожній, функція повинна викликати колбек onError,
// передаючи йому рядок "No products found".
// Для форматування середньої ціни використовується метод toFixed(2), щоб обмежити число до двох десяткових знаків.

// 6 значень які завжди повернуть false

// 1 false
// 2 "" - порожній рядок
// 3 0  - число нуль
// 4 null
// 5 undefined
// 6 NaN

// const products = [
//   { name: 'Apple', price: 0.99 },
//   { name: 'Banana', price: 0.49 },
//   { name: 'Orange', price: 0.79 },
//   { name: 'Mango', price: 1.99 },
// ];

// function calculateAveragePrice(products, onSuccess, onError) {
//   if (!products.length) {
//     // products.length === 0
//     onError('No products found');
//     return;
//   }

//   let total = 0;

//   products.forEach(({ price }) => (total += price));

//   const averagePrice = total / products.length;
//   onSuccess(averagePrice);
// }

// const onSuccess = averagePrice =>
//   console.log('Average price: ', averagePrice.toFixed(2));

// const onError = errorMessage => console.log('Error ❌', errorMessage);

// calculateAveragePrice(products, onSuccess, onError);
//
//
//
//
// const arr = [1, 2, 3, [4, 5, [7, 8, [9, 10]]]];

// function getTotal(numbers) {
//   let total = 0;

//   for (const number of numbers) {
//     if (Array.isArray(number)) {
//       total += getTotal(number);
//     } else {
//       total += number;
//     }
//   }

//   return total;
// }

// console.log(getTotal(arr));

// const arr = [1, 4, 2, 3];

// console.log(arr.sort((a, b) => a - b));
// console.log('Original array', arr);

// console.log(arr.toSorted((a, b) => a - b));
// console.log('Original array', arr);

// const sortByDescendingFriendCount = users => {
//   return users.sort((a, b) => b.friends.length - a.friends.length);
// };

// --------------------- Part 2 -------------------//

// Тестовий масив для теоретичного блоку

// ********map******** \\
// const names = users.map((item, idx, arr) => {
//   console.log(item);
//   return item.name;
// });
// console.log(names);

// const names = users.map(({ name }) => name);

// console.log(names);

// function customMap() {
//   const result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     result.push(callback(array[i], i, array));
//   }
//   return result;
// }

// const users = [
//   { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//   { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//   { id: 3, name: 'Bob', age: 24, skills: ['JavaScript', 'React', 'Node.js'] },
//   { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
//   { id: 5, name: 'David', age: 22, skills: ['C++', 'C#'] },
// ];

// ********flatMap******** \\

// const result = users.flatMap(({ skills }) => {
//   return skills;
// });

// const result = numbers.flatMap(number => number);
// console.log(result);

// const result = users.flatMap(({skills})=> skills)
// console.log(result)

// ********flat******** \\
// const numbers = [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]];

// const result = numbers.flat(3);

// console.log(result);

// ********filter******** \\
// const users = [
//   { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//   { id: 2, name: 'Alice', age: 32, skills: ['JavaScript', 'Data Analysis'] },
//   { id: 3, name: 'Bob', age: 24, skills: ['JavaScript', 'React', 'Node.js'] },
//   { id: 4, name: 'Emily', age: 40, skills: ['Java', 'JavaScript'] },
//   { id: 5, name: 'David', age: 22, skills: ['JavaScript', 'C#'] },
// ];

// const arr = users.flatMap(({ skills }) => skills);
// console.log(arr);
// const result = arr.filter((skill, idx, array) => array.indexOf(skill) === idx);
// const result = arr.filter((skill, idx, array) => !array.includes(skill,idx + 1));
// console.log(result);

// const result = users.filter((user, idx, arr) => {
//   if (user.age > 50) {
//     return true;
//   }
// });
// console.log(result);

// ********find******** \\
// const users = [
//   { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//   { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//   { id: 3, name: 'Bob', age: 24, skills: ['JavaScript', 'React', 'Node.js'] },
//   { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
//   { id: 5, name: 'David', age: 22, skills: ['C++', 'C#'] },
// ];

// const result = users.find(({ skills }) => skills.includes('JavaScript'));

// console.log(result);
// ********findIndex********\\

// const idx = users.findIndex(user => user.id === 3);
// console.log(idx);
// const result = users.find(user => user.id === 3);
// console.log(result);

// ********some********\\

// const isKnow = users.some(user => user.skills.includes('GraphQL'));
// console.log(isKnow);
// ********every ********\\

// const result = users.every(user => user.age > 20 && user.age <= 40);
// console.log(result);
// ********sort********\\

// const users = [
//   { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//   { id: 2, name: 'Alice', age: 18, skills: ['Python', 'Data Analysis'] },
//   { id: 3, name: 'Bob', age: 24, skills: ['JavaScript', 'React', 'Node.js'] },
//   { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
//   { id: 5, name: 'David', age: 22, skills: ['C++', 'C#'] },
// ];

// users.sort((current, next) => next.age - current.age);
// console.log(users);
// const result = users.toSorted((current, next) => next.age - current.age);
// console.log(result);
// console.log(users);

// const result = users.toSorted((a, b) => b.name.localeCompare(a.name));
// const result = users.toSorted((a, b) => a.name - b.name);
// console.log(result);

// ********reduce********\\

const users = [
  { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
  { id: 2, name: 'Alice', age: 18, skills: ['Python', 'Data Analysis'] },
  { id: 3, name: 'Bob', age: 24, skills: ['JavaScript', 'React', 'Node.js'] },
  { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
  { id: 5, name: 'David', age: 22, skills: ['C++', 'C#'] },
];

// const result = users.reduce((acc, item) => {
//   acc += item.age;

//   return acc;
// }, 0);

// const result = users.reduce((acc, item) => acc + item.age, 0);

// console.log(result);

// const result = users.reduce((acc, user) => {
//   acc.push(user.name);
//   return acc;
// }, []);

// const result = users.reduce((acc, user) => acc.push(user.name), []);
// console.log(result);

// ****************Практика**************** \\

// Task-1
// Напишіть функцію, яка використовує метод map,
// щоб створити новий масив об'єктів, в якому буде інформація про середній бал
// кожного студента.

// const students = [
//   { name: 'John', grades: [80, 85, 90] },
//   { name: 'Alice', grades: [90, 95, 92] },
//   { name: 'Bob', grades: [70, 80, 75] },
//   { name: 'Emily', grades: [95, 92, 88] },
//   { name: 'David', grades: [] },
// ];

// function getAverage(arr) {
//   return arr.map(({ name, grades }) => {
//     const total = grades.reduce((acc, value) => acc + value, 0);
//     return {
//       name,
//       average: grades.length ? Math.round(total / grades.length) : total,
//     };
//   });
// }

// console.log(getAverage(students));

// Task-2
// Напишіть функцію, яка використовує метод filter,
// щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: 'John', age: 20, gpa: 3.8 },
//   { name: 'Alice', age: 21, gpa: 3.2 },
//   { name: 'Bob', age: 19, gpa: 3.5 },
//   { name: 'Emily', age: 22, gpa: 3.9 },
//   { name: 'David', age: 20, gpa: 3.7 },
// ];

// function getAdult(arr) {
//   return arr.filter(({ age }) => age > 20).map(({ name }) => name);
// }
// console.log(getAdult(students));

// Task-3
// Напишіть функцію, яка використовує метод find,
//  щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.
// const books = [
//   {
//     title: 'JavaScript: The Good Parts',
//     author: 'Douglas Crockford',
//     year: 2008,
//   },
//   {
//     title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
//     author: 'Robert C. Martin',
//     year: 2008,
//   },
//   {
//     title: 'The Pragmatic Programmer: Your Journey to Mastery',
//     author: 'Andrew Hunt, David Thomas',
//     year: 1999,
//   },
//   {
//     title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
//     author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
//     year: 1994,
//   },
//   {
//     title: 'Refactoring: Improving the Design of Existing Code',
//     author: 'Martin Fowler',
//     year: 1999,
//   },
// ];

// function getBook(arr, title) {
//   const book = arr.find(({ title: boolTitle }) => boolTitle === title);
//   return book || 'Not found';
// }

// console.log(
//   getBook(
//     books,
//     'Design Patterns: Elements of Reusable Object-Oriented Software'
//   )
// );
// console.log(getBook(books, 'qwerty'));

// Task-4
// Напишіть функцію, яка використовує метод reduce,
// щоб обчислити загальну вартість всіх товарів у масиві,
// яка розраховується як добуток ціни товару на його кількість,
// а потім сумується з іншими товарами.
//  Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//   { id: 1, name: 'T-shirt', price: 20, quantity: 3 },
//   { id: 2, name: 'Jeans', price: 50, quantity: 2 },
//   { id: 3, name: 'Sneakers', price: 80, quantity: 1 },
//   { id: 4, name: 'Hat', price: 15, quantity: 4 },
//   { id: 5, name: 'Socks', price: 5, quantity: 6 },
// ];

// function getTotal(arr) {
// return arr.reduce((acc, product) => {
//   acc += product.price * product.quantity;
//   return acc;
// }, 0);
// }
// const getTotal = arr =>
//   arr.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

// console.log(getTotal(products));

// Task-5
// Напишіть функцію, яка використовує метод sort,
// щоб відсортувати книжки за роком видання у спадаючому порядку.
// Результат повинен бути відсортованим масивом книжок за роком видання.

// const books = [
//   {
//     title: 'JavaScript: The Good Parts',
//     author: 'Douglas Crockford',
//     year: 2008,
//   },
//   {
//     title: 'Refactoring: Improving the Design of Existing Code',
//     author: 'Martin Fowler',
//     year: 1999,
//   },
//   {
//     title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
//     author: 'Robert C. Martin',
//     year: 2008,
//   },
//   {
//     title: 'The Pragmatic Programmer: Your Journey to Mastery',
//     author: 'Andrew Hunt, David Thomas',
//     year: 1999,
//   },
//   {
//     title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
//     author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
//     year: 1994,
//   },
// ];

// function sortDesc(arr) {
//   return [...arr].sort((a, b) => b.year - a.year);
// }
// console.log(sortDesc(books));
// console.log(books);

// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter,
//  щоб отримати масив назв продуктів, ціна яких менше 2 доларів
// та відсортуй їх за алфавітним порядком.
// const products = [
//   { id: 2, name: 'Banana', price: 0.99 },
//   { id: 1, name: 'Apple', price: 1.99 },
//   { id: 3, name: 'Orange', price: 2.49 },
//   { id: 4, name: 'Grapes', price: 3.99 },
// ];

// function getProducts(arr) {
//   return arr
//     .filter(({ price }) => price < 2)
//     .map(({ name }) => name)
//     .sort((a, b) => a.localeCompare(b));
// }
// console.log(getProducts(products));
// console.log(products);

// const arr = ['A', 'c', 'B', 'a', 'C', 'b'];
// console.log(arr.sort((a, b) => a.localeCompare(b)));
// console.log(arr.toSorted());

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер,
// гарантовано в рядку немає пробілів та розділових знаків,
// потрібно повернути об'єкт де кожна літера буде ключем,
// а кількість разів яку вона дублюється буде значенням ключа

// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }

// const str = 'absdabsrgbadgtdswwbetflg';
// const result = str.split('').reduce((acc, item) => {
//   if (item in acc) {
//     //acc.hasOwnProperty(item)
//     acc[item] += 1; // додаю 1 до літери у значенні
//   } else {
//     acc[item] = 1; // створюю літеру
//   }

//   return acc;
// }, {});

// console.log(result);
