let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split("\n");
console.log(input)

function solution(input) {
const year = Number(input[0])
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "1";
  } else {
    return "0";
  }
}
console.log(solution(input))
console.log(`${solution(2022)}`)

