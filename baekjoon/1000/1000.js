let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split(' ');
// let a = parseInt(input[0]);
// let b = parseInt(input[1]);
// console.log(a + b);
// console.log(input)

function solution (input) {
    let a = parseInt(input[0]);
    let b = parseInt(input[1]);
    return a + b 
}
console.log(solution(input))