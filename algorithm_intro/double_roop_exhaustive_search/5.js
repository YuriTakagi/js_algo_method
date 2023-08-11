// 英小文字からなる N個の文字列 S 0 ,S 1 ,…,S N−1が与えられます。

// N 個の文字列のうち回文の個数を数えるプログラムを作成してください。

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = parseInt(input[0], 10)
const S = input.slice(1)
let count = 0;
for (let i = 0; i < N; i++) {
  if (S[i] === S[i].split('').reverse().join('')) {
    count++;
  }
}
console.log(count)