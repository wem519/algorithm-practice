// 백준 15552문제 테스트

var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split("\n");
console.log(input)
let counts = input[0];
let numbers =[];

for ( let i=1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}
console.log(numbers)
for( let i=0; i <numbers.length; i++) {
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);

  console.log(num1 + num2)
}
