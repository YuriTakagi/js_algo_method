// 2 つの整数 L,R が与えられます。

// L 以上 R 以下の整数の中から、 一の位が等しくなるように相異なる 2 つの整数を選ぶ方法は何通りあるか求めるプログラムを作成してください。

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const [L, R] = input.split(' ').map(Number)
const numArray = [];
for (let i = L; i <= R; i++) {
  numArray.push(i)
}

const lastDigitCounts = {};
for (let num of numArray) {
  const lastDigit = num % 10;
  lastDigitCounts[lastDigit] = (lastDigitCounts[lastDigit] || 0) + 1;
}

let totalPairs = 0;
for (let count of Object.values(lastDigitCounts)) {
  totalPairs += count * (count - 1) / 2;
}

console.log(totalPairs);

// 別解
// const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
// const [L, R] = input.split(' ').map(Number)
// const quantity = R - L + 1;
// let count = 0;

// for(i = 0;i < quantity - 1;i++){
//     for(j = i + 1;j < quantity;j++){
//         if((L + [i]) % 10 === (R + [j]) % 10){
//             count++;
//         }
//     }
// }

// console.log(count);
