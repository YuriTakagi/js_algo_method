// N個の整数A0,A1,…,AN-1が与えられます。

// N個の整数の最小値を求めるプログラムを作成してください。

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [N, A] = input.trim().split('\n');
const arrayA = A.split(' ').map(Number);

const min = Math.min(...arrayA);
console.log(min);

// 別解
// スプレッド構文は配列の要素が多すぎるとRangeErrorになる

// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
// const [N, A] = input.trim().split('\n');
// const arrayA = A.split(' ').map(Number);
// // reduceメソッドは2つの引数を取るコールバック関数が必要
// // 第一引数`acc`は前回の呼び出しの結果、第二引数`current`は現在処理中の要素
// const min = arrayA.reduce((acc, current) => acc < current ? acc : current);
// console.log(min)