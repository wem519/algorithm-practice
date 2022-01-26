const foo = (month) => {
    if(1<=month && month <=3) {
        return 1;
    }
    if(4<=month && month <=6) {
        return 2;
    }
    if(7<=month && month <=9) {
        return 3;
    }
    if(10<=month && month <=12) {
        return 4;
    }
}
console.log(`입력: ${1}, 예상값: 1, 실제값: ${foo(1)}`);
console.log(`입력: ${6}, 예상값: 2, 실제값: ${foo(6)}`);
console.log(`입력: ${9}, 예상값: 3, 실제값: ${foo(9)}`);
console.log(`입력: ${12}, 예상값: 4, 실제값: ${foo(12)} `);