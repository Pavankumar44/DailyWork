var global = 10;
var Scopes = /** @class */ (function () {
    function Scopes() {
        this.instanceValue = 30;
    }
    Scopes.prototype.display = function () {
        var localValue = 30;
        console.log('Local : ' + localValue);
        console.log('Instance : ' + this.instanceValue);
        console.log('Static : ' + Scopes.staticValue);
        console.log('Global : ' + global);
    };
    Scopes.staticValue = 20;
    return Scopes;
}());
var obj = new Scopes();
obj.display();
