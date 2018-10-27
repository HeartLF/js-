function isPalindrome(x) {
    // x = x + '';
    // return x === x.split('').reverse().join('')
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    var num = 0;
    while (x > num) {
        num = num * 10 + x % 10;
        x = parseInt(x / 10);


    }
    console.log(num, x);
    return x == parseInt(num / 10) || x == num;
}

console.log(isPalindrome(11));