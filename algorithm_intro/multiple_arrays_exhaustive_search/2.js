// N 個の整数 A 0 ,A 1 ,…,A N−1 と M 個の整数 B 0 ,B 1 ,…,B M−1 と整数 K が与えられます。

// 次の条件を満たす組 (i,j) の個数を答えるプログラムを作成してください。

// i は 0 以上 N−1 以下の整数
// j は 0 以上 M−1 以下の整数 A i +B j =K

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const K = Number(input[0].split(' ')[2])
const A = input[1].split(' ').map(Number)
const B = input[2].split(' ').map(Number)
let count = 0;
for (const numA of A) {
  count += B.filter(numB => numB + numA === K).length
}
console.log(count);