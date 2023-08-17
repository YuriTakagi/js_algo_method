// N 個の整数 S 0 ,S 1 ,…,S N−1 が与えられます。

// これらの N 個の文字列の中に同じ 2 つの文字列があるかどうかを判定するプログラムを作成してください。

// const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n')
// const N = Number(input[0])

// function hasDuplicate(arr) {
//   const set = new Set();
//   for (let i = 0; i < N; i++) {
//     if (set.has(arr[i])) {
//       return true;
//     }
//     set.add(arr[i]);
//   }
//   return false;
// }

// if (hasDuplicate(input)) {
//   console.log('Yes')
// } else {
//   console.log('No')
// }

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
const N = Number(input[0]);
let strings = [];
let flag = false;
for(i = 1;i <= N;i++){
    strings.push(input[i])
}
for(i = 0;i < strings.length - 1;i++){
    for(j = i + 1;j < strings.length;j++){
        if(strings[i] == strings[j]){
            flag = true;
        }
    }
}

if (flag) {
  console.log("Yes")
} else {
  console.log("No")
}


// 別解
// [N,...i]=require("fs").readFileSync("/dev/stdin","utf8").trim().split("\n");
// console.log(N!=new Set(i).size?"Yes":"No");

// 別解2
// const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
// const N = Number(array[0]);
// let strings = [];
// let flag = false;
// for(i = 1;i <= N;i++){
//     strings.push(array[i])
// }
// for(i = 0;i < strings.length - 1;i++){
//     for(j = i + 1;j < strings.length;j++){
//         if(strings[i] == strings[j]){
//             flag = true;
//         }
//     }
// }

// console.log(flag ? "Yes" : "No");