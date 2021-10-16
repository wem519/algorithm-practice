function solution(n){
    
    let count = 1;
    
    for(let i=3; i<=n; i++){
        let found = false;
        for(let j=2; j<i; j++){
            
            if(i % j === 0){
                found = true;
                break;
            }
            
            
            
        }
        if(found === false)
            count += 1
    }
    return count
    
}

console.log('solution(3)',solution(3))
console.log('solution(5)',solution(5))
console.log('solution(6)',solution(6))
console.log('solution(7)',solution(7))
console.log('solution(9)',solution(9))
console.log('solution(10)',solution(10))