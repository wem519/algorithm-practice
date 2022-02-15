var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split("\n");
let counts = input[0];
let numbers ="";

function solution(input) {
    for (let i = 1; i<=counts; i++) {
      let num = input[i].split(" ");
      numbers += Number(num[0]) + Number(num[1]) + "\n"
    }
    return numbers;
}
  console.log(solution(input))
