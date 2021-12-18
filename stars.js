var star = '';
for (var i = 0; i < 5; i++) {
    for (var j = 4; j > i; j--) {
        star += ' ';
    }
    for (var k = 0; k <= (i * 2); k++) {
        star += '*';
    }
    star += '\n'; // 줄바꿈 escape 문자 사용
}
console.log(star);