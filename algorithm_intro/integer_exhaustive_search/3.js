// 整数Nが素数かどうかを判定するプログラムを作成してください。

// ただし次の条件を満たすとき「Nは素数である」と言います。

// Nは2以上の整数である
// Nを割り切ることのできる1より大きい整数はNのみである

const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
const N = Number(input.trim())
let result = 'Yes';
if (N === 1) {
  result = 'No'
}
for (let i = 2; i < N; i++) {
  if (N % i === 0) {
    result = 'No'
  }
}

console.log(result)