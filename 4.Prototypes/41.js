function Foo(who) {
    this.me = who;
}
Foo.prototype.indentify = function() {
    return "I am " + this.me;
};

var a1 = new Foo("a1");
a1.indentify(); //"I am a1"

a1.indentify = function() { //<-- shadowing
    console.log("Hello, " + this.__proto__.indentify() + ".");
};

a1.indentify(); // "Hello, I am a1."
