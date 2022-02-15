var fs = require('fs');
var input = fs.readFileSync('../example.txt').toString().split(" ");

const solution = (input) => {
const A = Number(input[0])
  if ((A % 4 === 0 && A % 100 !== 0) || A % 400 === 0) {
    return "1";
  } else {
    return "0";
  }
}
console.log(solution(input))


// 2753문제 테스트 케이스

// case1  
// 2000
// case2
// 1999

