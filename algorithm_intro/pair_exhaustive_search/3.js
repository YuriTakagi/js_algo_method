// N 個の整数 A 0 ,A 1 ,…,A N−1 が与えられます。

// 以下の条件をみたす整数の組 (i,j,k) の個数を求めるプログラムを作成してください。

// - A i ,A j ,A k の最大値は A j である。
// - 0≤i<j<k≤N−1

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = parseInt(input[0])
const A = input[1].split(' ').map(Number)
let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      if (A[i] <= A[j] && A[j] >= A[k] ) {
        count++
      }
    }
  }
}
console.log(count)
