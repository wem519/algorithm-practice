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

// 10871문제 테스트 케이스

// case1 
// 10 5
// 1 10 4 9 2 3 8 5 7 6