var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
console.log(input)

for(var i=0; i<input.length; i++){
    if((input[i] % 4 === 0 && input[i] % 100 !==0 ) || input[i] % 400 === 0){
        console.log(1);
    } else {
        console.log(0);
    } 
           
} 