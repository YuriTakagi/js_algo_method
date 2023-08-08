// 正の整数 N が与えられます。 1 以上 N 以下の整数 i について、次の問題に答えてください。

// i が 3 でも 5 でも割り切れるならば FizzBuzz を出力し、
// それ以外で i が 3 で割り切れるならば Fizz を出力し、
// それ以外で i が 5 で割り切れるならば Buzz を出力し、
// i がどちらでも割り切れないならば i 自身を出力してください。

const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
const N = Number(input.trim())

for (let i = 1; i <= N; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}
