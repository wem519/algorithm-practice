const foo = (games) => {
    return games.map(e =>{
        var arr = e.split(`:`)
        var left = Number(arr[0]);
        var right = Number(arr[1]);

        if (left > right) return 3
        else if(left == right) return 1
        else if(left < right) return 0;
    }).reduce((agg,el) => agg + el)
    
}
console.log(`입력: ${["3:1", "2:2", "1:3"]}, 예상값: 4, 실제값: ${foo(["3:1", "2:2", "1:3"])}`)
console.log(`입력: ${["1:1", "2:2", "0:0", "0:1"]} 예상값: 3, 실제값:${foo(["1:1", "2:2", "0:0", "0:1"])}`)