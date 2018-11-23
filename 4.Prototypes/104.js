class Foo {
    constructor(who) {
        this.me = who;
    }

    indentify() {
        return "I am " + this.me;
    }

    static hello() { return "Hello!"; }
}

class Bar extends Foo {
    speak() {
        console.log("Hello, " + super.indentify() + ".");
    }
}

Foo.hello(); //"Hello"
Bar.hello(); //""Hello"