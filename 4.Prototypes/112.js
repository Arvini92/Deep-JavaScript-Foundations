class Foo {
    constructor() {
        console.log("Hello!");
    }
}

class Bar {
    constructor(who) {
        this.me = who;
    }
}

Foo(); //<-- error!

Bar.call({}); //<-- error!