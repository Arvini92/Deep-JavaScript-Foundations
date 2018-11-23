function Foo(who) {
    this.me = who;
}
Foo.prototype.indentify = function() {
    return "I am" + this.me;
};

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a2.speak = function() {
    alert("Hello, " + this.indentify() + ".");
};

a1.__proto__ === Object.getPrototypeOf(a1);
a2.constructor === Foo;
a1.__proto__ === a2.__proto__;
a2.__proto__ === a2.constructor.prototype;