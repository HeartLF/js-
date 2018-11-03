(function() {

    const status = {
        pending: 0,
        fulfilled: 1,
        rejected: 2
    }

    class CustomePromise {
        constructor(func) {
                // 初始状态
                this._status = status.pending;
                this._value = null; // 记录resolve函数传入的参数
                this._error = null; // 记录reject函数传入的参数

                // 收集成功状态要执行的函数
                this.resolvedArr = [];
                // 收集失败状态要执行的函数
                this.rejectedArr = [];

                this._handler(func)
            }
            // 判断value有没有then函数,并且拿出then函数
        _getThen(value) {
                let type = typeof value;
                if (value && (type === 'object' || type === 'function')) {
                    let then;
                    if (then = value.then) {
                        return then;
                    }
                }

                return null;
            }
            // 接收外部传入的函数，调用外部传入的函数
        _handler(func) {
            let done = false; // 就是让函数值执行一次
            func((value) => {
                if (done) return;
                done = true;

                // value有没有then函数
                let then = this._getThen(value);
                if (then) {
                    // 拿到对象的then之后，怎么知道这个promise对象完成了呢？
                    // 在then函数上注册成功和失败函数就可以
                    return this._handler(then.bind(value))
                }

                this._resolve(value);
            }, (error) => {
                if (done) return;
                done = true;
                // value有没有then函数
                let then = this._getThen(error);
                if (then) {
                    // 拿到对象的then之后，怎么知道这个promise对象完成了呢？
                    // 在then函数上注册成功和失败函数就可以
                    return this._handler(then.bind(error))
                }
                this._reject(error);
            });
        }

        _resolve(value) {

            setTimeout(() => {
                // 把状态改为成功
                this._status = status.fulfilled;
                this._value = value;
                // 执行所有成功的函数
                this.resolvedArr.forEach(item => {
                    item(this._value)
                })
            })
        }
        _reject(error) {
                setTimeout(() => {
                    // 把状态改为失败
                    this._status = status.rejected;
                    this._error = error;

                    this.rejectedArr.forEach(item => item(this._error));
                })
            }
            // 收集注册的成功状态或失败状态要执行的函数
        _done(resolvedFunc, rejectedFunc) {
            //pending的时候收集
            resolvedFunc = typeof resolvedFunc === 'function' ?
                resolvedFunc : null;
            rejectedFunc = typeof rejectedFunc === 'function' ?
                rejectedFunc : null;

            // 收集
            if (this._status === 0) {
                if (resolvedFunc) this.resolvedArr.push(resolvedFunc);
                if (rejectedFunc) this.rejectedArr.push(rejectedFunc);
            } else if (this._status === 1 && resolvedFunc) { // 直接执行
                resolvedFunc(this._value);
            } else if (this._status === 2 && rejectedFunc) {
                rejectedFunc(this._error);
            }
        }

        // 收集注册的成功状态或失败状态要执行的函数
        // 返回一个promise对象
        then(resolvedFunc, rejectedFunc) {
            //this._done(resolvedFunc,rejectedFunc)
            return new CustomePromise((resolve, reject) => {
                this._done(
                    (value) => {
                        // resolvedFunc不是一个函数
                        if (typeof resolvedFunc !== 'function') {
                            return resolve(value);
                        }
                        resolve(resolvedFunc(value));
                    },
                    (error) => {
                        if (typeof rejectedFunc !== 'function') {
                            return reject(error);
                        }
                        reject(rejectedFunc(error))
                    }
                )
            })
        }
    }

    window.CustomePromise = CustomePromise;

})();