var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split("\n");
let counts = input[0];
let numbers ="";

for (let i = 1; i<=counts; i++) {
  let num = input[i].split(" ");
  numbers += Number(num[0]) + Number(num[1]) + "\n"
}
console.log(numbers)

// 10552문제 테스트 케이스

// case1 
// 5
// 1 1
// 12 34
// 5 500
// 40 60
// 1000 1000