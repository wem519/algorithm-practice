var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split("\n");

function solution(input) {
  
  let num = input[0].split(" ").map(e => Number(e));
  let arr = input[1].split(" ").map(e => Number(e));
  let small = []
    
    for ( let i = 0; i <=num[0]; i++) {
        if( arr[i] < num[1]) {
          small.push(arr[i]);
        }
    }
    return small.join(" ")
}
console.log(`${solution(['5 20', '12 21 24 50 10'])}`);
console.log(solution(input))
