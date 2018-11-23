class Foo {
    constructor(who) {
        this.me = who;
    }

    indentify() {
        return "I am " + this.me;
    }

}

class Bar extends Foo {
    constructor(who) {
        this.me = 1; // <--error!
        super(who); //<--this must come first!
    }
}

var b1 = new Bar("b1");