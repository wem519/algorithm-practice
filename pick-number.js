const foo =(ids) => {
    var sortedArr = ids.sort((a,b) => (a-b
        ))
    if(sortedArr[0] !==0)return 0;        
    for(var i =0; i< sortedArr.length; i++){
        const prev = sortedArr[i-1]
        const cur = sortedArr[i]
        
        if(cur - prev > 1)return prev + 1;  
    
    }return sortedArr[sortedArr.length-1] + 1; 
    }

   console.log(`입력: ${[1,2,3,5,5,2,4]}, 예상값: 0, 실제값: ${foo([1,2,3,5,5,2,4])}`)  
   console.log(`입력: ${[0,1,2,3,4,5]}, 예상값: 6, 실제값: ${foo([0,1,2,3,4,5])}`)
   console.log(`입력: ${[2,2,2,2,2,1,0]}, 예상값: 3, 실제값: ${ foo([2,2,2,2,2,1,0])}`)