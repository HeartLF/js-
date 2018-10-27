function maxArea(height) {
    let Maxarea = 0,
        l = 0,
        r = height.length - 1;
    while (l < r) {
        Maxarea = Math.max(Maxarea, Math.min(height[l], height[r]) * (r - l));
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return Maxarea;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))