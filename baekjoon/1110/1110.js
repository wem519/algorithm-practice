let fs = require('fs')
let input = fs.readFileSync('example.txt').toString();

let count = 0;
let number = +input;
// console.log(input)

function solution(input) {
while(true) {
    let sum = Math.floor(input / 10) + (input % 10); 
    input = (input % 10) * 10 + (sum % 10);
    count++
    console.log(input)
    if(number === input){
        
        return count;
        break;
    }
}

}
// console.log(solution(input))
console.log(`${solution(54)}`)