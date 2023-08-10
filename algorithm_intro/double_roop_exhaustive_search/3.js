// 整数 X を文字列としてみると回文になっているとき、「X は回文数である」と呼ぶことにします。

// 整数 L, R が与えられるので、L 以上 R 以下の整数の中に回文数がいくつあるか数えるプログラムを作成してください。

const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
const [L, R] = input.trim().split(' ').map(Number)
let count = 0;

for (let i = L; i <= R; i++) {
  if(String(i) === String(i).split('').reverse().join('')) {
    count++;
  }
}

console.log(count);