// 英小文字からなる文字列 S と、英小文字 c が与えられます。

// 文字列 S の中に c が含まれるかどうかを答えるプログラムを作成してください。

const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
const [S, c] = input.trim().split('\n')
if (S.includes(c)) {
  console.log('Yes')
} else {
  console.log('No')
}