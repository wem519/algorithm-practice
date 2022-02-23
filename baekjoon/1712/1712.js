let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split(" ");

// console.log(input)
function solution(input){
    let fixed = input[0]
    let variable = input[1];
    let cost = input[2];

    if(cost-variable <= 0){
            return -1
    }else{
         const n = Math.floor(fixed / (cost-variable)) + 1
         
            return n
    }
}

console.log(solution(input))

// console.log(input);