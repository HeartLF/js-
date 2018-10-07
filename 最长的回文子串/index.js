//最长回文子串 例如：babad   输出就是bab或aba
var longestPalindrome = function(s) {
    var index;
    var substring = "";
    //length is odd number
    for (index = 0; index < s.length; index++) {

        let i = index - 1;
        let j = index + 1;
        let sub = s[index];
        while (i >= 0 && j < s.length) {
            if (s[i] !== s[j]) break;
            sub = s[i] + sub + s[j]
            i--;
            j++;
        }
        if (sub.length > substring.length) substring = sub;

    }
    //lenth is even number
    for (index = 0; index < s.length - 1; index++) {
        if (s[index] === s[index + 1]) {
            let i = index - 1;
            let j = index + 2;
            let sub = s[index] + s[index + 1];
            while (i >= 0 && j < s.length) {
                if (s[i] !== s[j]) break;
                sub = s[i] + sub + s[j]
                i--;
                j++;
            }
            if (sub.length > substring.length) substring = sub;
        }

    }
    return substring
};