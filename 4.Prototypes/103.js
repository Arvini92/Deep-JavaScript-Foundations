class Foo {
    constructor(who) {
        this.me = who;
    }

    indentify() {
        return "I am " + this.me;
    }
}

class Bar extends Foo {
    indentify() {
        console.log("Hello, " + super.indentify() + ".");
    }
}

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.indentify(); //"Hello, I am b1"
b2.indentify(); //""Hello, I am b2"