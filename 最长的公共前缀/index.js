function longestCommonPrefix(strs) {
    // if (strs.length == 0) return;

    // let out = '';
    // let pref = strs[0];

    // // myloop:
    // for (let i = 0; i < pref.length; i++) {
    //     for (let j = 1; j < strs.length; j++) {
    //         if (strs[j][i] !== pref[i]) {
    //             break;
    //         }
    //     }
    //     out += pref[i];
    // }
    // return out;
    let fix = '';
    if (strs.length == 0) {
        return fix;
    }
    let arr = strs[0];
    for (var i = 0; i < arr.length + 1; i++) {
        var item = arr.slice(0, i + 1);
        console.log(item)
        var result = true;
        strs.forEach(element => {
            result = result && element.indexOf(item) === 0;
            console.log(result)
        })
        if (result) {
            fix = item;
        } else {
            return fix;
        }

    }
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));


// var fix = "";
// var len = strs.length;
// if (len === 0) {
//     return fix;
// }
// var fir = strs[0];
// for (var i = 0; i < len + 1; i++) {
//     var item = fir.slice(0, i + 1);
//     var hasFir = true;
//     strs.forEach(function(ele) {
//         hasFir = hasFir && ele.indexOf(item) === 0;
//     })
//     if (hasFir) {
//         fix = item;
//     } else {
//         return fix;
//     }

// }

// return fix