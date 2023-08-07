// N個の互いに相異なる整数A0,A1,…,AN-1が与えられます。

// N個の整数の中で一番大きいものは前から何番目にあるかを調べるプログラムを作成してください。

// ただし、N個の整数のうちの先頭の整数A0は、前から0番目であると考えることとします。

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [N, A] = input.trim().split('\n');
const arrayA = A.split(' ').map(Number);
const maxNum = Math.max(...arrayA);
const index = arrayA.indexOf(maxNum);
console.log(index);