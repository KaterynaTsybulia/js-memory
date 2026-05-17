// function getTime(minutes) {
//   const hour = Number.parseInt(minutes / 60);
//   const minutesOne = minutes % 60;
//   const totalMinutes = `${hour}:${minutesOne}`;
//   return totalMinutes;
// }

// function getTime(minutes) {
//   const hour = Number.parseInt(minutes / 60);
//   const minutesOne = minutes % 60;
//   return `${hour.toString().padStart(2, '0')}:${minutesOne.toString().padStart(2, '0')}`;
// }

function getTime(minutes) {
  const hour = Math.floor(minutes / 60);
  const minutesOne = minutes % 60;
  return `${hour.toString().padStart(2, '0')}:${minutesOne.toString().padStart(2, '0')}`;
}

console.log(getTime(5)); // 00:05
console.log(getTime(65)); // 01:05
console.log(getTime(70)); // 01:10
console.log(getTime(450)); // 07:30
console.log(getTime(1441)); // 24:01
