// N 個の 1 以上 9 以下の整数 A0,A1,…,A N−1が与えられます。

// N 個の整数の中に一番多く出てくる数字を求めるプログラムを作成してください。 ただし、答えは一つに定まることが保証されているものとします。

const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const [N, A] = input.trim().split('\n');
const arrayA = A.split(' ').map(Number);
let countNumbers = [];
for (let i = 1; i <= 9; i++) {
  countNumbers.push(arrayA.filter(v => v === i).length);
}
let answer = countNumbers.indexOf(Math.max(...countNumbers));
console.log(answer + 1);
