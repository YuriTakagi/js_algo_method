// N個の整数A0,A1,…,AN-1が与えられます。

// 次の条件を満たすiの個数を調べるプログラムを作成してください。

// iは1以上N−1以下の整数

// AiはAi−1よりも大きい

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [N, A] = input.trim().split('\n');
const numA = A.split(' ').map(Number);
let count = 0;
for (let i = 0; i < Number(N); i++) {
  if (numA[i] < numA[i + 1]) {
    count = count + 1;
  }
}

console.log(count)
