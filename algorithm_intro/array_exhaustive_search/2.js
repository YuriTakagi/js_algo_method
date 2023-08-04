// N個の整数A0,A1,…,AN-1が与えられます。

// N個の整数の中に整数Vが何個あるかを数えるプログラムを作成してください。

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [nv, strA] = input.trim().split('\n');
const [n, v] = nv.split(' ').map(Number);
const arrayA = strA.split(' ').map(Number);
const res = arrayA.filter(num => num === v).length;
console.log(res);