// N 個の整数 A 0 ,A 1 ,…,A N−1 が与えられます。

// N 個の整数の中に素数がいくつあるか調べるプログラムを作成してください。

const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
const [N, A] = input.trim().split('\n')
const numArray = A.split(' ').map(Number);
let primeCount = 0;
for (let num of numArray) {
  if (num === 1) continue;

  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) primeCount++;
}

console.log(primeCount);


