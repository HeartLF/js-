let data = [{
        id: "1",
        name: "dorsey1",
        children: [{
                id: "1-1",
                name: "dorsey1-1",
                children: [{
                        id: "1-1-1",
                        name: "dorsey1-1-1",
                        children: [{
                            id: "1-1-1-1",
                            name: "dorsey1-1-1-1",
                        }]
                    },
                    {
                        id: "1-1-2",
                        name: "dorsey1-1-2"
                    }
                ]
            },
            {
                id: "1-2",
                name: "dorsey1-2",
                children: [{
                        id: "1-2-1",
                        name: "dorsey1-2-1"
                    },
                    {
                        id: "1-2-2",
                        name: "dorsey1-2-2"
                    }
                ]
            },
            {
                id: "1-3",
                name: "dorsey1-3",
                children: [{
                        id: "1-3-1",
                        name: "dorsey1-3-1"
                    },
                    {
                        id: "1-3-2",
                        name: "dorsey1-3-2"
                    }
                ]
            }
        ]
    },
    {
        id: "2",
        name: "dorsey2",
        children: [{
                id: "2-1",
                name: "dorsey2-1",
                children: [{
                        id: "2-1-1",
                        name: "dorsey2-1-1"
                    },
                    {
                        id: "2-1-2",
                        name: "dorsey2-1-2"
                    }
                ]
            },
            {
                id: "2-2",
                name: "dorsey2-2",
                children: [{
                        id: "2-2-1",
                        name: "dorsey2-2-1"
                    },
                    {
                        id: "2-2-2",
                        name: "dorsey2-2-2"
                    }
                ]
            }
        ]
    }
]

function getJsonDataNameById(dataArr, id) {
    let agent = [];
    let data = dataArr,
        len = data.length;
    for (let i = 0; i < len; i++) {
        let item = data[i];
        if (item.children && item.children.length !== 0) {
            for (let j = 0; j < item.children.length; j++) {
                agent.push(item.children[j]);
            }
            data = data.concat(agent); //children降维
            len += agent.length;
            agent = [];
        }
    }
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i].name;
        }
    }
}
let a = getJsonDataNameById(data, "1-3-2");
console.log(a);





// var s = {
//     s: 'student',
//     getS: function() {
//         console.log(this.s);
//     }
// };
// var t = {
//     s: 'teaher'
// };

// var getS = s.getS;
// var getS1 = getS.bind(s);

// // 写出以下输出结果
// s.getS();
// s.getS.apply(t);
// getS();
// getS1.call(t);

// function arrayRandom(array, index2) {
//     array.map(function(item, index) {
//         if (index != index2) {
//             var x = parseInt(Math.random() * (array.length));
//             if (x != index2) {
//                 array[index] = array[x]
//                 array[x] = item;
//             }
//         }
//     })
//     return array;
// }
// var arr = arrayRandom([1, 2, 3, 4, 5], 2);
// console.log(arr);