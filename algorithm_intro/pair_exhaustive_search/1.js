// N 個の整数 A 0 ,A 1 ,…,A N−1 と整数 K が与えられます。

// これらの N 個の整数から、和が K 以下となるように 2 つの数を選ぶ方法は何通りあるか求めるプログラムを作成してください。

// ただし選んだ 2 つの整数の添字 (A i の i) が等しくなってはいけないものとします。

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number)
const A = input[1].split(' ').map(Number)
let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if(A[i] + A[j] <= K) {
      count++
    }
  }
}
console.log(count)
