class A {
    one() { console.log("one:A"); }
    two() { console.log("two:A"); }
}

class B extends A { }

B.prototype.foo = function() {
    this.one();
    super.two(); //syntax error!
}


