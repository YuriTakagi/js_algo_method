// 英小文字からなる文字列 S が与えられます。

// 文字列 S が回文かどうかを判定するプログラムを作成してください。 なお文字列 S が回文であるとは、S を逆から読んでも S になることを言います。

const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
const S = input.trim()
const reverseS = S.split('').reverse().join('')
console.log(S === reverseS ? 'Yes' : 'No')