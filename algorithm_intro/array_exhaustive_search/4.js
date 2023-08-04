// N個の整数A0,A1,…,AN-1が与えられます。

// N個の整数の中で最も右にあるVは前から何番目にあるかを調べるプログラムを作成してください。

// ただし、Vが存在しない場合はそのことを報告してください。 また、N個の整数のうち先頭の要素A0を、前から0番目であると数えることとします。

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [NV, A] = input.trim().split('\n');
const [N, V] = NV.split(' ').map(Number);
const numA = A.split(' ').map(Number);
console.log(numA.lastIndexOf(V));
