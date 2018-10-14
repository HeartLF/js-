//透明的单例类
var CreateDiv = (function() {
    var instance;
    var CreateDiv = function(html) {
        if (instance) {
            return instance
        }
        this.html = html;
        this.init();
        return instance = this;
    }
    CreateDiv.prototype.init = function() {
        var div = document.createElement('div');
        div.innerHTML += this.html;
        document.body.appendChild(div);
    }
    return CreateDiv;
})()
var a = new CreateDiv('sven1');
var b = new CreateDiv('sven2');

alert(a === b);

var user = (function() {
    var _name = "seven",
        _age = 29;
    return {
        getUseinfo: function() {
            return _name + "-" + _age;
        }
    }
})();
console.log(user.getUseinfo());