// N個の整数A0,A1,…,AN-1が与えられます。

// N個の整数の最大値を求めるプログラムを作成してください。

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [N, A] = input.trim().split('\n');
const numA = A.split(' ').map(Number);
const maxNum = numA.reduce((max, currentValue) => Math.max(max, currentValue), -Infinity);
console.log(maxNum);

// 別解1
// const imput = require("fs").readFileSync("/dev/stdin").toString().split("\n")
// const imput1 = imput[0].split(" ")
// const imput2 = imput[1].split(" ")

// const n = Number(imput1[0])
// let max = -100
// for (let i = 0; i < n; i++) {
//     if (max < Number(imput2[i])) {
//         max = imput2[i]
//     }
// }

// console.log(max)

// 別解2
// const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
// const N = Number(array[0]);
// const numbers = array[1].split(' ').map(Number);
// console.log(Math.max(...numbers));
