// function doubleIt(sum) {
//   return sum * 2;
// }
// const doubleIt = function (sum) {
//   return sum * 10;
// }
// const doubleIt = sum => sum * 20;
// const doubleIt2 = (x, y = 0) => x * y; // added Default Value 0
// const doubleIt2 = (x, y) => x * y;
const bishal = (x, y = 0) => {
  const sum = x + y;
  const mun = x - y;
  const result0 = sum + mun;
  return result0;
}
const result = bishal(20, 5);
console.log(result);