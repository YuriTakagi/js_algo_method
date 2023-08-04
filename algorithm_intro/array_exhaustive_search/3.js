// N個の整数A0,A1,…,AN-1が与えられます。

// N個の整数のうち、正の整数が何個あるかを数えるプログラムを作成してください。

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [N, A] = input.trim().split('\n');
const numA = A.split(' ').map(Number);
const res = numA.filter(num => num > 0).length;
console.log(res);
