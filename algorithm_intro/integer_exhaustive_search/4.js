// 整数AとBの最大公約数を出力するプログラムを作成してください。

// ただし次の条件を満たすとき「XはAとBの最大公約数である」と言います。

// 条件：X は A も B も割り切る 1 以上の整数の中で最大のものである

const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
const [A, B] = input.trim().split(' ').map(Number)
let a = A;
let b = B;
for (; b !== 0;) {
  [a, b] = [b, a % b]
}
console.log(a)

// 別解
// let [a, b] = require("fs").readFileSync("/dev/stdin", "utf8").split(" ").map(Number);

// let output = 0;
// for (let i = 1; i <= Math.min(a, b); i++) {
//     if (a % i === 0 && b % i === 0) {
//         output = i
//     }
// }

// console.log(output);
