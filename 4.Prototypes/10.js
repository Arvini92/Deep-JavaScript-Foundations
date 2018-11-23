class Foo {
    constructor(who) {
        this.me = who;
    }

    indentify() {
        return "I am " + this.me;
    }
}

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a1.indentify(); //" I am a1"
a2.indentify(); //" I am a2"