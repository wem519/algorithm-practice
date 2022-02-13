const foo = (str) => { 
    var count= 0;
    for(var i = 0; i<str.length; i++){
        
    //    console.log(str[i], "글자");
        if(str[i]=== "a" ||str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count = count + 1; 
            
        }
        // console.log(count, "count")
        
    }
    return count;
}
console.log(`입력: ${"abracadabra"}, 예상값: 5, 출력: ${foo(("abracadabra"))}`)
console.log(`입력: ${"drunken Tiger"}, 예상값: 4, 출력: ${foo("drunken Tiger")}`)
