// 백준 15552문제 테스트

var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split("\n");
let counts = input[0];
let numbers ="";

for (let i = 1; i<=counts; i++) {
  let num = input[i].split(" ");
  numbers += Number(num[0]) + Number(num[1]) + "\n"
}
console.log(numbers)
