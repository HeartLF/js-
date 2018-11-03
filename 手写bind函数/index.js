Function.prototype.mybind = function(context) {
        if (typeof this !== "function") {
            throw new Error(this + "is not a function");
        }
        var self = this;
        var args = [];
        for (var i = 1, len = arguments.length; i < len; i++) {
            args.push(arguments[i]);
        }

        var fbound = function() {
            var bindArgs = Array.prototype.slice.call(arguments);
            self.apply(this instanceof self ? this : context, args.concat(bindArgs));
        }
        fbound.prototype = Object.create(self.prototype);
        //返回的函数不仅要和 被调函数的函数体相同，也要继承人家的原型链
        return fbound;
    }
    /*
        目标函数：调用bind的函数；
        新函数：bind返回的函数                                                               
    * 1.返回的函数作为构造函数，新函数要继承目标函数的原型
      2.一旦把新函数当成构造函数了，目标函数的this应该指向实例对象
    */

Function.prototype.customeBind = function(thisArg, ...arg) {
    let self = this;

    //自己实现bind函数，如果把返回的新函数当成了构造函数，此时会遇到问题，就是找不到目标函数原型上的方法，解决：放新函数继承目标函数的原型
    let bund = function(...arg2) {
        //如果这个函数作为了构造函数，那么目标函数的this，应该执行的是实例对象，如果这个不是作为构造函数，目标函数中的this还指向thisArge  
        let thisArgSelf = this instanceof Bound ? this : thisArg
        self.apply(thisArgSelf, [...arg, ...arg2]);
    };
    //原型继承
    //Object.create用来创建以某一个对象作为原型的对象
    bund.prototype = Object.create(self.prototype);
    bund.prototype.constructor = self;
    return bund;
}