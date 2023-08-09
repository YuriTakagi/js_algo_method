const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
const [N, K] = input.split(' ').map(Number)
let result = 0
for (let i = 1; i <= N; i++) {
  let divisorCount = 0
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      divisorCount++
    }
  }
  if (divisorCount === K) {
    result++
  }
}
console.log(result)
