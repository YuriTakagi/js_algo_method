// Nの約数の個数を数えるプログラムを作成してください。

// ただしNの約数とは「Nを割り切ることのできる1以上の整数」のことです。

const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
const N = Number(input.trim())

let count = 0;
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    count++;
  }
}
console.log(count);