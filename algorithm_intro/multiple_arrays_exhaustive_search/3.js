// X 個の整数 A 0 ,A 1 ,…,A X−1 と、 Y 個の整数 B 0 ,B 1 ,…,B Y−1 と、 Z 個の整数 C 0 ,C 1 ,…,C Z−1 が与えられます。

// 次の条件を満たす組 (i,j,k) の個数を答えるプログラムを作成してください。

// i は 0 以上 X−1 以下の整数
// j は 0 以上 Y−1 以下の整数
// k は 0 以上 Z−1 以下の整数
// A i +B j =C k

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const A = input[1].split(' ').map(Number)
const B = input[2].split(' ').map(Number)
const C = input[3].split(' ').map(Number)
let count = 0;

for (let i = 0; i < C.length; i++) {
  for(let j = 0; j < A.length; j++) {
    for (let k = 0; k < B.length; k++) {
      if (A[j] + B[k] === C[i]) {
        count++;
      }
    }
  }
}
console.log(count);