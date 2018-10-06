function lengthOfLongestSubstring(s) {
    var visited = new Set();
    var right = 0;
    var left = 0;
    var num = 0;
    while (right < s.length) {
        var item = s.charAt(right);
        if (!visited.has(item)) {
            visited.add(item);
            num = Math.max(num, right - left + 1);
            right++;
        } else {
            visited.delete(s.charAt(left));
            left++;
        }
    }
    console.log(visited);
    return num;
}

console.log(lengthOfLongestSubstring("abcabcbb"));