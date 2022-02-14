var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split(" ");
console.log(input)
const A = Number(input[0])
console.log(A)

if ((A % 4 === 0 && A % 100 !== 0) || A % 400 === 0) {
  console.log("1");
} else {
  console.log("0");
}
           

