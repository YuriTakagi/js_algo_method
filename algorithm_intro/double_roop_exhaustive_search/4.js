// 英小文字からなる文字列 S が与えられます。

// 文字列 S に使われている英小文字の種類数を答えるプログラムを作成してください。

const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const stringSet = new Set([...S]);
console.log(stringSet.size)
