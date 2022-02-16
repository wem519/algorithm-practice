let fs =require("fs")
let input = fs.readFileSync('example.txt').toLocaleString().split("\n");
function solution(input) {
    let num = input[0];
    let arr = input[1].split(" ").sort((a,b) => a - b)
    return arr[0] + " " + arr[num-1]
    
}
// console.log(input);
// let num = input[0];
// let arr = input[1].split(" ").sort((a,b) => a - b);
// console.log(`${arr[0]} ${arr[num-1]}`);

console.log(`${solution([ '7', '21 10 5 35 7 78 99' ])}`)