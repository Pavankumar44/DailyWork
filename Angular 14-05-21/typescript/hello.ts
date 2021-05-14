var global: number = 10;
class Scopes {
    static staticValue: number = 20;
    instanceValue = 30;

    display(): void {
        var localValue: number =30;
        console.log('Local : ' + localValue);
        console.log('Instance : ' + this.instanceValue);
        console.log('Static : ' + Scopes.staticValue);
        console.log('Global : ' + global);
    }
}
var obj = new Scopes();
obj.display();