function myAtoi(str) {
    console.log(parseInt(str));
    console.log(Math.min(parseInt(str) || 0, 2147483647))
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)

}
console.log(myAtoi("-114748364"));