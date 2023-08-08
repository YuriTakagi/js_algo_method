const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const N = Number(input.trim())
let numArray = []
for (let i = 1; i <= N; i++) {
  numArray.push(i)
}

let count = 0;
numArray.forEach(num => {
  if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) {
    count++
  }
})

console.log(count)