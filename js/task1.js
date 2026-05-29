// Напишіть функцію convertMilesToKilometers, яка приймає відстань у милях як аргумент і повертає відстань у кілометрах.
// Одна миля відповідає приблизно 1.60934 кілометрам.

function convertMilesToKilometers(mill) {
  const DIFFERENCE_IN_KILOMETERS = 1.60934;

  const textPr = Number(prompt(`How ${mill} miles in km? `));
  const kmrs = Math.floor(mill * DIFFERENCE_IN_KILOMETERS);

  return textPr === kmrs;
}

console.log(convertMilesToKilometers(5));
