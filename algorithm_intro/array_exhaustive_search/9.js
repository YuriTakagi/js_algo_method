// N 個の 1 以上 9 以下の整数 A0,A1,…,A N−1が与えられます。

// N 個の整数に含まれる 1,2,…,9 の個数をそれぞれ求めるプログラムを作成してください。

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [N, A] = input.trim().split('\n');
const arrayA = A.split(' ').map(Number);
const countNumbers = {};
for (let i = 1; i <= 9; i++) {
  countNumbers[i] = 0;
}

arrayA.forEach(num => {
  if (num >= 1 && num <= 9) {
    countNumbers[num]++;
  }
})

for (let i = 1; i <= 9; i++) {
  console.log(countNumbers[i])
}

// 別解
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
// const [N, A] = input.trim().split('\n');
// const arrayA = A.split(' ').map(Number);
// for (let i = 1; i <= 9; i++) {
//   console.log(arrayA.filter(v => v === i).length);
// }