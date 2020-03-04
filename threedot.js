const fnd = [12, 13, 14, 15, 16, 17]; //its aa array
const cus = [18, 19, 20, 21, 22, 23]; //it's a array
const unc = [33, 35, 40, 45, 50, 55, 63, 59]; // it's aa Array
const all = fnd.concat(cus).concat([55, 22, 34, 39, 23]).concat(unc);
const all = [...fnd, ...cus, ...unc];
// console.log(all);

const business = 550;
const minister = 500;
const sochib = 450;
// const totalTk = Math.max(business, minister, sochib);
// console.log(totalTk);

const puroTakaPoisha = [112, 220, 330, 350, 440];
const totalTk2 = Math.max(...puroTakaPoisha);
console.log(totalTk2);