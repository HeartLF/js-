//把数字转换为罗马数字
var arry = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
];

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) { // 11m
    var res = '';
    while (num > 0) {
        var i = 0;
        for (; arry[i][0] > num; i += 1);
        res += arry[i][1];
        num -= arry[i][0];
    }

    return res;
};


//把罗马数字转换为数字
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (!s || s.length === 0) {
        return 0;
    }

    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let i = s.length - 1;
    let result = map.get(s[i]);

    while (i > 0) {
        const curr = map.get(s[i]);
        const prev = map.get(s[i - 1]);

        if (prev >= curr) {
            result += prev;
        } else {
            result -= prev;
        }

        i--;
    }

    return result;
};