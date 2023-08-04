// 整数 N, V と、N 個の整数 A0,A1,…,AN-1が与えられます。

// N個の整数の中に、整数Vがあるかどうかを判定するプログラムを作成してください。

const input = require('fs').readFileSync('/dev/stdin','utf8');
const [nv, strA] = input.trim().split('\n');
const [n, v] = nv.split(' ');
const arrayA = strA.split(' ');
const res = arrayA.filter(num => num === v).length === 0 ? "No" : "Yes";
console.log(res);

// 別解
// const [nums1, nums2] = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")
// const includeValue = nums1.split(" ").map(Number)[1]
// console.log(nums2.split(" ").map(Number).includes(includeValue) ? "Yes" : "No")