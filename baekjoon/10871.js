var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split("\n");

let num = input[0].split(" ").map(e => Number(e));
let arr = input[1].split(" ").map(e => Number(e));
let small = []
for ( let i = 0; i <=num[0]; i++) {
  if( arr[i] < num[1]) {
    small.push(arr[i]);
  }
}
console.log(small.join(" "))