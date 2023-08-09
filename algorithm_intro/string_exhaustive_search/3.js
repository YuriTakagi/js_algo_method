// 英小文字からなる文字列 S が与えられます。

// 文字列 S 中に「連続する 2 文字が同じ文字である箇所」が何個あるかを答えるプログラムを作成してください。

const S = require('fs').readFileSync('/dev/stdin', 'utf-8').trim()
const arrayS = S.split('')
let count = 0;
for (let i = 0; i < arrayS.length - 1; i++) {
  if (arrayS[i] === arrayS[i + 1]) {
    count++
  }
}
console.log(count)