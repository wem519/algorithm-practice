// let fs = require("fs");
// let input = fs.readFileSync('example.txt').toString().split("\n");
// console.log(input)
let input = [
    '5',
    '5 50 50 70 80 100',
    '7 100 95 90 80 70 60 50',
    '3 70 90 80',
    '3 70 90 81',
    '9 100 99 98 97 96 95 94 93 91'
  ]
let count = Number(input[0]);
function solution(input){
    let sum = 0;
    let student = 0;
    for (let i = 1; i <=count; i++) {
         
        let Case = input[i].split(" ").map(el=>+el);
        let n = Case[0];
       
        for(let j = 1; j <= n; j++) {
            sum += Case[j]
       }
       
        
       let avr = sum / n;
       for(let k = 1; k<= n; k++) {
        if(avr < Case[k]){
            student ++
    }
        }   
       
        let result = (student / n * 100).toFixed(3)
        console.log(result + "%")
    }
}
(solution(input))