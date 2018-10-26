 //  Given a 32-bit signed integer, reverse digits of an integer.
 // 给定32位有符号整数，整数的反向数字。

 function reverse(x) {
     //   let str = String(x);
     //   let arr = str.split('');
     //   //  arr.reverse()
     //   let Array = [];
     //   arr.forEach(element => {

     //       Array.unshift(element);

     //   })
     //   console.log(arr);
     //   if (Array[Array.length - 1] == '-') {
     //       Array.unshift(Array[Array.length - 1]);
     //       Array.pop();
     //   }
     //   if (parseInt(Array.join('')) > (Math.pow(2, 31) - 1) || parseInt(Array.join('')) < (Math.pow(-2, 31))) {
     //       return 0;
     //   }
     //   return parseInt(Array.join(''));
     // check if negative



     const negative = x < 0 && "-";
     //等价于
     // var negative=x<0;
     // if(negative){
     //     negative="-"
     // }




     console.log(negative)
         // create array from number
     const array = Array.from(x.toString()).map(Number);

     // reverse array and parse into an integer
     const num = parseInt(array.reverse().join(""));

     // if greater than the max 32bit integer return 0
     if (num > 2147483647) return 0;

     return parseInt(negative + num);

 };
 console.log(reverse(-2112));