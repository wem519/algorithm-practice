var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split("\n");
console.log(input)

let numbers =[];

for ( let i=0; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}
console.log(numbers)
for( let i=0; i <numbers.length; i++) {
  let A = numbers[i]
  if ((A % 4 === 0 && A % 100 !== 0) || A % 400 === 0) {
    console.log("1");
  } else {
    console.log("0");
  }
}
