const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
const [S, T] = input.trim().split('\n')

console.log(S.includes(T) ? 'Yes' : 'No')