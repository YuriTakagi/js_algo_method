// 長さ N の文字列 S が与えられます。
// 以下の条件をみたす整数の組 (x,y) の個数を数えるプログラムを作成してください。

// S の x 文字目と y 文字目は等しい
// 0≤x<y≤N−1
// ただし、S の先頭の文字が 0 文字目であるとします。

const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const N = Number(input[0])
const arrayS = input[1].split('')
let count = 0
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (arrayS[i] === arrayS[j]) {
      count++;
    }
  }
}
console.log(count)


