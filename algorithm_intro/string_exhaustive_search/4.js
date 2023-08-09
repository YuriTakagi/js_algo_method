// 英小文字からなる長さ N の文字列 S, T が与えられます。

// 文字列 S の何文字かを書き換えることで、文字列 T に一致させたいものとします。 置き換える必要のある文字数を答えるプログラムを作成してください。

const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
const [N, S, T] = input.trim().split('\n')
let count = 0;
for (let i = 0; i < N; i++) {
  if (S[i] !== T[i]) {
    count++
  }
}
console.log(count)