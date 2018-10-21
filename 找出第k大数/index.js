// 1. 给你一个数字n(n < 1e9), 再给你一个数字k(k < n), 要求你找到1, 2, 3, ... n按照字典序排序后, 第k大的数字;
// 如, n = 15, k = 7;那1 ~ 15按照字典序排序为: 1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9;则答案为15;

// function get(n, k) {
//     let arr = [];
//     for (let i = 1; i <= n; i++) {
//         arr.push(i);
//     }
//     console.log(arr);
//     arr.sort(); //默认按字典序排序
//     console.log(arr);
//     return arr[k - 1];
// }
// console.log(get(15, 7));

// function ajax(res){
//     return new Promise((reslove,reject)=>{
//         let method=res.method||'get';
//         let xhr=null;
//         if(window.XMLRequest){
//             xhr=new XMLHttpRequest()
//         }else{
//             xhr=new ActiveXObject()
//         }
//         xhr.onReadyStateChange=()=>{
//             if(xhr.readyState==4){
//                 if(xhr.status>=200&&xhr.status<300||xhr.status==304){
//                     reslove(xhr.responseText)
//                 }else{
//                     reject(xhr.statusText)
//                 }
//             }
//         }
//         if(method=='post'){
//             xhr.open('post',res.url);
//             xhr.responseType='json';
//             xhr.setRequestHeader('Accept','application/json');
//             xhr.send(res.data);
//         }else{
//             let query='';
//             for(let key in res.data){
//                 query+='&'+encodeURIComponent(key)+'='+encodeURIComponent(res.data[key]);
//             }
//             query.substring(1);
//             xhr.open('get',res.url+'?'+query);
//             xhr.send
//         }
//     })
// }

// var str='did';
// str.split('').reverse().join('')==str;
var foo = {
    value: '2333',
    getValue: function() {
        console.log(this.value);
        console.log(arguments[0], arguments[1])
    },
    setValue: function() {
        this.value = '111'
    }

}
var foo1 = {
    value: '222222'
}
var newGetValue = foo.getValue.bind(foo1, 1);
newGetValue(2);